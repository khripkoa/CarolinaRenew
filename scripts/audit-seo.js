
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

async function auditSeo() {
    console.log('Starting SEO Audit...');
    console.log('Scanning dist folder:', DIST_DIR);

    const htmlFiles = await glob('**/*.html', { cwd: DIST_DIR });
    console.log(`Found ${htmlFiles.length} HTML files.`);

    const results = {
        duplicateTitles: {},
        duplicateDescriptions: {},
        missingTitle: [],
        missingDescription: [],
        missingAltText: [],
        longTitles: [], // > 60 chars
        shortTitles: [], // < 10 chars
        longDescriptions: [], // > 160 chars
        shortDescriptions: [], // < 50 chars
    };

    const titleMap = new Map();
    const descMap = new Map();

    for (const file of htmlFiles) {
        const filePath = path.join(DIST_DIR, file);
        const html = fs.readFileSync(filePath, 'utf-8');
        const $ = cheerio.load(html);

        // 1. Title Check
        const title = $('title').text().trim();
        if (!title) {
            results.missingTitle.push(file);
        } else {
            if (title.length < 10) results.shortTitles.push({ file, title });
            if (title.length > 70) results.longTitles.push({ file, title });

            if (titleMap.has(title)) {
                titleMap.get(title).push(file);
            } else {
                titleMap.set(title, [file]);
            }
        }

        // 2. Description Check
        const desc = $('meta[name="description"]').attr('content')?.trim();
        if (!desc) {
            results.missingDescription.push(file);
        } else {
            if (desc.length < 50) results.shortDescriptions.push({ file, desc });
            if (desc.length > 170) results.longDescriptions.push({ file, desc });

            if (descMap.has(desc)) {
                descMap.get(desc).push(file);
            } else {
                descMap.set(desc, [file]);
            }
        }

        // 3. Image Alt Check
        $('img').each((i, img) => {
            const alt = $(img).attr('alt');
            const dynamicAlt = $(img).attr(':alt') || $(img).attr('x-bind:alt');
            const src = $(img).attr('src') || $(img).attr(':src');

            if ((!alt || alt.trim() === '') && !dynamicAlt) {
                results.missingAltText.push({ file, src });
            }
        });
    }

    // Process Duplicates
    for (const [title, files] of titleMap) {
        if (files.length > 1) {
            results.duplicateTitles[title] = files;
        }
    }

    for (const [desc, files] of descMap) {
        if (files.length > 1) {
            results.duplicateDescriptions[desc] = files;
        }
    }

    // Output Report
    const reportPath = path.resolve(__dirname, '../seo_audit_report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

    console.log('Audit Complete!');
    console.log('-----------------------------------');
    console.log(`Duplicate Titles Sets: ${Object.keys(results.duplicateTitles).length}`);
    console.log(`Duplicate Descriptions Sets: ${Object.keys(results.duplicateDescriptions).length}`);
    console.log(`Missing Titles: ${results.missingTitle.length}`);
    console.log(`Missing Descriptions: ${results.missingDescription.length}`);
    console.log(`Images missing Alt Text: ${results.missingAltText.length}`);
    console.log('-----------------------------------');
    console.log(`Full report saved to: ${reportPath}`);
}

auditSeo().catch(console.error);

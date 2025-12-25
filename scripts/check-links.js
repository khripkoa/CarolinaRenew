
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

async function checkLinks() {
    console.log('Scanning dist folder:', DIST_DIR);

    // Find all HTML files
    const htmlFiles = await glob('**/*.html', { cwd: DIST_DIR });
    console.log(`Found ${htmlFiles.length} HTML files.`);

    const errors = [];
    const checkedLinks = new Set();

    for (const file of htmlFiles) {
        const filePath = path.join(DIST_DIR, file);
        const html = fs.readFileSync(filePath, 'utf-8');
        const $ = cheerio.load(html);
        const links = $('a');

        links.each((i, link) => {
            const href = $(link).attr('href');

            if (!href) return;
            if (href.startsWith('http') || href.startsWith('//')) return; // External
            if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return; // Special protocols/anchors

            // Normalize link
            let targetPath = href.split('#')[0]; // Remove anchor
            if (!targetPath) return; // Just an anchor link like "#"

            // Resolve absolute vs relative
            let absoluteTarget;
            if (targetPath.startsWith('/')) {
                absoluteTarget = path.join(DIST_DIR, targetPath);
            } else {
                absoluteTarget = path.join(path.dirname(filePath), targetPath);
            }

            // Check if file exists
            // Possibilities:
            // 1. Exact match (e.g. /foo.html)
            // 2. Directory match (e.g. /foo/ -> /foo/index.html)
            // 3. File match without extension (e.g. /foo -> /foo.html) - less common in Astro SSG but possible

            let exists = false;
            let triedPaths = [];

            // Case 1: Exact path
            if (fs.existsSync(absoluteTarget) && fs.statSync(absoluteTarget).isFile()) {
                exists = true;
            }
            // Case 2: Directory (look for index.html)
            else if (fs.existsSync(absoluteTarget) && fs.statSync(absoluteTarget).isDirectory()) {
                if (fs.existsSync(path.join(absoluteTarget, 'index.html'))) {
                    exists = true;
                } else {
                    triedPaths.push(path.join(absoluteTarget, 'index.html'));
                }
            }
            // Case 3: Missing extension (try .html)
            else if (fs.existsSync(absoluteTarget + '.html')) {
                exists = true;
            }
            // Case 4: Path ends in / but directory doesn't exist (maybe it's a file?)
            // e.g. /foo/ -> /foo.html (unlikely for Astro default)

            if (!exists) {
                // Double check if it's a directory that looks like a file
                triedPaths.push(absoluteTarget);
                triedPaths.push(absoluteTarget + '.html');

                errors.push({
                    source: file,
                    link: href,
                    resolved: absoluteTarget
                });
            }
        });
    }

    return errors;
}

checkLinks().then(errors => {
    if (errors.length === 0) {
        console.log('No broken links found!');
    } else {
        console.log(`Found ${errors.length} broken links.`);
        // Group by error type/link
        const grouped = {};
        errors.forEach(e => {
            if (!grouped[e.link]) grouped[e.link] = [];
            grouped[e.link].push(e.source);
        });

        console.log(JSON.stringify(grouped, null, 2));
    }
});

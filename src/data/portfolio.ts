// Portfolio data - all projects with details
export interface Project {
    id: string;
    title: string;
    category: string;
    categorySlug: string;
    location: string;
    description: string;
    duration: string;
    beforeImage: string;
    afterImage: string;
    gallery: string[];
    testimonial?: {
        text: string;
        author: string;
    };
    features: string[];
}

export const projects: Project[] = [
    {
        id: "modern-kitchen-charlotte",
        title: "Modern Kitchen Transformation",
        category: "Cabinet Refinishing",
        categorySlug: "cabinet-refinishing",
        location: "Charlotte, NC",
        description: "Complete cabinet color change from dated oak to stunning navy blue with brushed gold hardware. This transformation gave the kitchen a modern, luxurious feel.",
        duration: "4 days",
        beforeImage: "/images/portfolio/kitchen1-before-1.webp",
        afterImage: "/images/portfolio/kitchen1-after-1.jpg",
        gallery: ["/images/portfolio/kitchen1-after-1.jpg", "/images/portfolio/kitchen1-after-2.jpg"],
        testimonial: {
            text: "Carolina Renew completely transformed our kitchen! The navy blue cabinets look stunning. We can't believe it's the same kitchen.",
            author: "Sarah M., Charlotte"
        },
        features: ["Full cabinet refinishing", "New hardware installation", "Color consultation", "Matching island finish"]
    },
    {
        id: "exterior-makeover-ballantyne",
        title: "Exterior Makeover",
        category: "Exterior Painting",
        categorySlug: "exterior-painting",
        location: "Ballantyne, NC",
        description: "Complete exterior repaint with modern color scheme. Included trim restoration, power washing, and premium Sherwin-Williams paint for lasting protection.",
        duration: "5 days",
        beforeImage: "/images/portfolio-exterior-before.jpg",
        afterImage: "/images/portfolio-exterior.jpg",
        gallery: ["/images/portfolio-exterior.jpg"],
        testimonial: {
            text: "Our home looks brand new! The team was professional and finished on schedule.",
            author: "Michael B., Ballantyne"
        },
        features: ["Full exterior painting", "Trim restoration", "Power washing", "10-year warranty"]
    },
    {
        id: "living-room-refresh-myers-park",
        title: "Living Room Refresh",
        category: "Interior Painting",
        categorySlug: "interior-painting",
        location: "Myers Park, NC",
        description: "Elegant living room transformation with custom accent wall and ceiling refresh. Used premium low-VOC paints for a safe indoor environment.",
        duration: "2 days",
        beforeImage: "/images/portfolio-living-before.jpg",
        afterImage: "/images/portfolio-living-room.jpg",
        gallery: ["/images/portfolio-living-room.jpg"],
        features: ["Accent wall design", "Ceiling painting", "Trim painting", "Low-VOC premium paints"]
    },
    {
        id: "custom-storage-huntersville",
        title: "Custom Storage Solution",
        category: "Storage Solutions",
        categorySlug: "storage-solutions",
        location: "Huntersville, NC",
        description: "Built-in closet organization system with custom shelving, drawers, and hanging space. Maximized storage in a 10x12 master closet.",
        duration: "3 days",
        beforeImage: "/images/portfolio-storage-before.jpg",
        afterImage: "/images/portfolio-storage.jpg",
        gallery: ["/images/portfolio-storage.jpg"],
        testimonial: {
            text: "Finally, a closet that works! Everything has a place now.",
            author: "Jennifer L., Huntersville"
        },
        features: ["Custom shelving", "Built-in drawers", "Hanging systems", "LED lighting"]
    },
    {
        id: "kitchen-cabinet-fort-mill",
        title: "Elegant Kitchen Transformation",
        category: "Cabinet Refinishing",
        categorySlug: "cabinet-refinishing",
        location: "Fort Mill, SC",
        description: "Transformed outdated honey oak cabinets into an elegant off-white finish with classic raised panel design. Updated hardware with modern brushed metal pulls for a refreshed, high-end look.",
        duration: "5 days",
        beforeImage: "/images/portfolio/kitchen2-before-1.webp",
        afterImage: "/images/portfolio/kitchen2-after-1.jpg",
        gallery: ["/images/portfolio/kitchen2-after-1.jpg", "/images/portfolio/kitchen2-after-2.jpg"],
        features: ["Oak to off-white refinishing", "Raised panel design preserved", "Soft-close hinges", "Modern brushed metal pulls"]
    },
    {
        id: "deck-staining-lake-norman",
        title: "Lake Norman Deck Revival",
        category: "Exterior Painting",
        categorySlug: "exterior-painting",
        location: "Lake Norman, NC",
        description: "Complete deck restoration including sanding, repair, and premium stain application. Protected against harsh lake-area weather.",
        duration: "3 days",
        beforeImage: "/images/portfolio-deck-before.jpg",
        afterImage: "/images/portfolio-deck.jpg",
        gallery: ["/images/portfolio-deck.jpg"],
        features: ["Deck sanding", "Board replacement", "Premium stain", "Weather protection"]
    }
];

export const categories = [
    { name: "All Projects", slug: "all" },
    { name: "Cabinet Refinishing", slug: "cabinet-refinishing" },
    { name: "Interior Painting", slug: "interior-painting" },
    { name: "Exterior Painting", slug: "exterior-painting" },
    { name: "Storage Solutions", slug: "storage-solutions" }
];

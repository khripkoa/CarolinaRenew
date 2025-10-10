import interiorBefore from '../assets/interior_painting_before.png'
import interiorAfter from '../assets/interior_painting_after.png'
import exteriorBefore from '../assets/exterior_painting_before.png'
import exteriorAfter from '../assets/exterior_painting_after.png'
import kitchenBefore from '../assets/kitchen_remodel_before.png'
import kitchenAfter from '../assets/kitchen_remodel_after.png'

export const projects = [
  {
    id: 1,
    title: 'Modern living room in Charlotte',
    category: 'interior',
    location: 'Charlotte, NC',
    date: 'March 2024',
    client: 'Johnson family',
    description: 'Complete living room transformation using modern color schemes and decorative techniques.',
    beforeImage: interiorBefore,
    afterImage: interiorAfter,
    duration: '5 days',
    area: '45 sq m',
    services: ['Wall painting', 'Decorative finishing', 'Ceiling painting'],
    goals: ['Refresh the interior and visually expand the space', 'Match the palette with furniture and flooring'],
    steps: ['Surface prep (spackling, sanding)', 'Priming', 'Two-coat painting', 'Decorative accents'],
    materials: ['Sherwin-Williams Duration Home', 'PVA primer', '3M painter’s tape', 'Wooster rollers'],
    colors: [
      { name: 'SW 7008 Alabaster', hex: '#EDEAE0' },
      { name: 'SW 6241 Aleutian', hex: '#9AA8B2' }
    ],
    team: ['Foreman: Alexey K.', 'Painter: Ivan M.', 'Prep: Maria P.'],
    gallery: [interiorBefore, interiorAfter],
    testimonial: {
      author: 'Johnson family',
      text: 'The team worked quickly and neatly and helped choose the perfect shade. The result exceeded expectations!',
      rating: 5,
    },
    warranty: '12-month warranty on coating and adhesion',
  },
  {
    id: 2,
    title: 'Victorian home restoration',
    category: 'exterior',
    location: 'Concord, NC',
    date: 'February 2024',
    client: 'Mr. Smith',
    description: 'Careful restoration of a historic home preserving its original style while using modern materials.',
    beforeImage: exteriorBefore,
    afterImage: exteriorAfter,
    duration: '14 days',
    area: '280 sq m',
    services: ['Facade painting', 'Trim restoration', 'Protective coating'],
    goals: ['Preserve the historic look', 'Protect wood from moisture and UV'],
    steps: ['Washing and stripping old paint', 'Restoration of decorative elements', 'Priming', 'Two-coat facade painting'],
    materials: ['Benjamin Moore Aura Exterior', 'Zinsser Cover Stain wood primer', 'Purdy brushes'],
    colors: [
      { name: 'HC-172 Revere Pewter', hex: '#CCC5B9' },
      { name: 'Black Accents', hex: '#222222' }
    ],
    team: ['Supervisor: Nikolay S.', 'Painters: John D., Pyotr T.'],
    gallery: [exteriorBefore, exteriorAfter],
    testimonial: {
      author: 'Mr. Smith',
      text: 'Very careful attention to detail. The house looks like new yet keeps its historic charm.',
      rating: 5,
    },
    warranty: '24-month exterior work warranty',
  },
  {
    id: 3,
    title: 'Modern-style kitchen remodel',
    category: 'kitchen',
    location: 'Gastonia, NC',
    date: 'January 2024',
    client: 'Brown family',
    description: 'Complete kitchen makeover with new cabinets, countertops, and modern appliances.',
    beforeImage: kitchenBefore,
    afterImage: kitchenAfter,
    duration: '21 days',
    area: '25 sq m',
    services: ['Remodeling', 'Cabinet painting', 'Countertop installation'],
    goals: ['Make the kitchen brighter and more functional', 'Emphasize cabinet texture'],
    steps: ['Demolition of old elements', 'Preparation and priming', 'Painting cabinets and walls', 'Installing countertops'],
    materials: ['Sherwin-Williams Emerald Urethane Trim Enamel', 'Quartz countertops'],
    colors: [
      { name: 'Pure White', hex: '#F5F5F5' },
      { name: 'Navy Accent', hex: '#1F3A5F' }
    ],
    team: ['Supervisor: Anton L.', 'Carpenter: Viktor N.'],
    gallery: [kitchenBefore, kitchenAfter],
    testimonial: {
      author: 'Brown family',
      text: 'The kitchen became the heart of the home. Very impressed with the durability of the cabinet finish.',
      rating: 5,
    },
    warranty: '12-month finish and installation warranty',
  },
  {
    id: 4,
    title: 'Elegant bedroom',
    category: 'interior',
    location: 'Matthews, NC',
    date: 'December 2023',
    client: 'Mrs. Davis',
    description: 'Creating a cozy, elegant bedroom with warm tones and textured finishes.',
    beforeImage: interiorBefore,
    afterImage: interiorAfter,
    duration: '4 days',
    area: '20 sq m',
    services: ['Wall painting', 'Textured finish', 'Decorative elements'],
    goals: ['Create a calm atmosphere for rest', 'Match shades with textiles'],
    steps: ['Wall preparation', 'Texturing', 'Two-coat painting'],
    materials: ['Behr Marquee Interior', 'Decorative plaster'],
    colors: [
      { name: 'Soft Beige', hex: '#E8E0D5' },
      { name: 'Warm Gray', hex: '#C7C2BA' }
    ],
    team: ['Painter: Sergey P.'],
    gallery: [interiorBefore, interiorAfter],
    testimonial: {
      author: 'Mrs. Davis',
      text: 'The room became much cozier. The job was done on time with minimal dust.',
      rating: 5,
    },
    warranty: '12-month finish warranty',
  },
  {
    id: 5,
    title: 'Downtown office building',
    category: 'commercial',
    location: 'Charlotte, NC',
    date: 'November 2023',
    client: 'ABC Corporation',
    description: 'Painting the facade and interiors of a modern office building using corporate colors.',
    beforeImage: exteriorBefore,
    afterImage: exteriorAfter,
    duration: '30 days',
    area: '1200 sq m',
    services: ['Facade painting', 'Interior painting', 'Branding'],
    goals: ['Refresh corporate style', 'Minimize office downtime during work'],
    steps: ['Phased work planning', 'Facade painting', 'Color zoning of interiors'],
    materials: ['PPG Break-Through!', 'Low-VOC interior paints'],
    colors: [
      { name: 'Corporate Blue', hex: '#1E40AF' },
      { name: 'Light Gray', hex: '#E5E7EB' }
    ],
    team: ['Foreman: Denis Sh.'],
    gallery: [exteriorBefore, exteriorAfter],
    testimonial: {
      author: 'ABC Corporation',
      text: 'The team stuck to the schedule without disrupting operations. We got a fresh, professional look.',
      rating: 5,
    },
    warranty: '18-month facade warranty and 12-month interior warranty',
  },
  {
    id: 6,
    title: 'Luxurious bathroom',
    category: 'bathroom',
    location: 'Huntersville, NC',
    date: 'October 2023',
    client: 'Wilson family',
    description: 'Creating a luxurious bathroom using premium materials and modern design.',
    beforeImage: interiorBefore,
    afterImage: interiorAfter,
    duration: '12 days',
    area: '15 sq m',
    services: ['Remodeling', 'Waterproofing', 'Decorative finish'],
    goals: ['Ensure finish durability in high-humidity conditions'],
    steps: ['Waterproofing', 'Tile work', 'Painting with moisture-resistant compounds'],
    materials: ['Mapei waterproofing', 'Sherwin-Williams Duration'],
    colors: [
      { name: 'Calm Gray', hex: '#D9D9D9' },
      { name: 'White Trim', hex: '#FFFFFF' }
    ],
    team: ['Supervisor: Roman E.'],
    gallery: [interiorBefore, interiorAfter],
    testimonial: {
      author: 'Wilson family',
      text: 'A beautiful and practical bathroom with thoughtful ventilation and moisture protection. Excellent work!',
      rating: 5,
    },
    warranty: '24-month waterproofing warranty',
  },
]

export function getProjectById(id) {
  const numericId = Number(id)
  return projects.find(p => p.id === numericId) || null
}



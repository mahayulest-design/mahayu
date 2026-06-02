import { PriceItem, FAQItem, ReviewItem } from '../types';

export const BUSINESS_INFO = {
  companyName: "THE KHAN'S BIZ WORLDWIDE SDN BHD",
  brandName: "THE KHAN'S AIRCON",
  ssmNumber: "202101012859 (1413158-H)",
  address: "Jalan SP 5/5, Taman Serdang Perdana, Seri Kembangan, 43300 Selangor, Malaysia",
  coverageArea: "KL & SELANGOR",
  coverageDetails: "Kuala Lumpur, Shah Alam, Klang, Subang Jaya, Cyberjaya, Putrajaya, Bangi, Kajang, Puchong, Petaling Jaya, Ampang, Cheras, Selangor.",
  workingHours: "Monday - Saturday (9:00 AM - 6:00 PM), Sunday Closed.",
  warrantyText: "30-day workmanship warranty for water leaking issues post-service.",
  expertNote: "Highly experienced in troubleshooting and servicing advanced Inverter Aircon Systems.",
  supportEmail: "lk7766460@gmail.com",
  phoneWhatsApp: "60177903021", // Official contact standard
  links: {
    whatsapp: "https://wa.me/60177903021",
    telegram: "https://t.me/thekhans_aircon",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  }
};

export const COVERED_AREAS = [
  "Kuala Lumpur",
  "Shah Alam",
  "Klang",
  "Subang Jaya",
  "Cyberjaya",
  "Putrajaya",
  "Bangi",
  "Kajang",
  "Puchong",
  "Petaling Jaya",
  "Ampang",
  "Cheras",
  "Selangor"
];

export const SERVICES_LIST = [
  {
    id: "service-aircon",
    title: "Normal Aircon Service",
    description: "Routine filter cleaning, gas pressure inspection, electrical system testing, and blower checking for maximum cooling efficiency and lower electricity consumption.",
    tag: "Best Seller"
  },
  {
    id: "chemical-service",
    title: "Chemical Service / Overhaul",
    description: "Deep biochemical wash to dissolve stubborn dirt, rust, mold, and buildup on the internal cooling evaporator coils and condenser units.",
    tag: "Highly Recommended"
  },
  {
    id: "water-leaking",
    title: "Water Leaking Rectification",
    description: "Fix annoying indoor blower water drips by clearing drain line blockages, sanitizing drain pans, and correcting pipe alignment of the drainage system.",
    tag: "30-Day Warranty"
  },
  {
    id: "repair-troubleshooting",
    title: "Troubleshooting & Repair",
    description: "Expert diagnostic for faulty compressors, PCB boards, thermistor sensors, electrical wiring faults, and replacement of genuine spare parts.",
    tag: "Inverter Expert"
  },
  {
    id: "install-replace",
    title: "Installation & Replacement",
    description: "Professional setup of brand new energy-saving Inverter air conditioners with top-quality materials installed by certified local technicians.",
    tag: "Free Installation Pipe"
  }
];

export const WALL_MOUNTED_PRICING: PriceItem[] = [
  {
    name: "New AC Installation",
    price: "RM 300",
    details: "Includes Free Items: Copper Pipe max 5 feet, Wiring 5 feet, and Drain Pipe 5 feet.",
    highlight: true
  },
  {
    name: "Dismantle Aircon Unit",
    price: "RM 100",
    details: "Safe disassembly of old unit without releasing refrigerant gas or ruining walls.",
    highlight: false
  },
  {
    name: "Wall-Mounted Normal Service (1.0 HP & 1.5 HP)",
    price: "RM 70",
    details: "Clean filters, inspect system pressures, blower wash, electrical safety diagnostic.",
    highlight: false
  },
  {
    name: "Wall-Mounted Normal Service (2.0 HP & 2.5 HP)",
    price: "RM 90",
    details: "Check compressor draw, clean secondary structures, and inspect blower speed.",
    highlight: false
  },
  {
    name: "Wall-Mounted Chemical Service (1.0 HP)",
    price: "RM 110",
    details: "Complete internal coil pressure cleaning using eco-friendly chemical solvent.",
    highlight: false
  },
  {
    name: "Wall-Mounted Chemical Service (1.5 HP)",
    price: "RM 120",
    details: "Ensure pure clean air and optimize airflow velocity inside bedrooms.",
    highlight: false
  },
  {
    name: "Wall-Mounted Chemical Service (2.0 HP)",
    price: "RM 130",
    details: "Recommended for heavily used living rooms or offices struggling to cool down.",
    highlight: true
  },
  {
    name: "Wall-Mounted Chemical Service (2.5 HP)",
    price: "RM 130",
    details: "Heavy-duty flush of larger units to completely restore optimal cooling power.",
    highlight: false
  }
];

export const CEILING_CASSETTE_PRICING: PriceItem[] = [
  {
    name: "Ceiling Cassette Normal Service (1.0 HP & 1.5 HP)",
    price: "RM 100",
    details: "Cover cleaning, main air filter sanitization, drain pan flush, and freon pressure check.",
    highlight: false
  },
  {
    name: "Ceiling Cassette Normal Service (2.0 HP & 2.5 HP)",
    price: "RM 120",
    details: "Top choice for mid-sized luxury offices, corporate cafes, and meeting rooms.",
    highlight: false
  },
  {
    name: "Ceiling Cassette Normal Service (3.0 HP - 5.0 HP)",
    price: "RM 130",
    details: "Full visual diagnosis and testing of large-scale commercial central blower units.",
    highlight: true
  },
  {
    name: "Ceiling Cassette Chemical / Overhaul (1.0 HP & 1.5 HP)",
    price: "RM 190",
    details: "Dismount unit components, pressure-wash individual copper fins with specialized chemical wash.",
    highlight: false
  },
  {
    name: "Ceiling Cassette Chemical / Overhaul (2.0 HP - 2.5 HP)",
    price: "RM 250",
    details: "Restores refrigerant loop efficiency back to brand new factory-level benchmarks.",
    highlight: false
  },
  {
    name: "Ceiling Cassette Chemical / Overhaul (3.0 HP - 5.0 HP)",
    price: "RM 280",
    details: "Sanitize high-volume commercial cassette ventilation loops to prevent bacteria or mold spread.",
    highlight: true
  }
];

export const ADDITIONAL_CHARGES: PriceItem[] = [
  {
    name: "Copper Pipe (Over 3 Feet limit)",
    price: "RM 22 / foot",
    details: "Premium highly insulated heavy-duty copper tubing to prevent refrigerant leaks.",
    highlight: false
  },
  {
    name: "Wiring (Over 3 Feet limit)",
    price: "RM 6 / foot",
    details: "Double-insulated high-voltage safety cable certified by SIRIM Malaysia.",
    highlight: false
  },
  {
    name: "Drain Pipe (Over 3 Feet limit)",
    price: "RM 5 / foot",
    details: "Smooth-bore durable PVC pipe optimized for fluid water runoffs.",
    highlight: false
  },
  {
    name: "Aircon Switch / New Safety Sockets",
    price: "RM 40 / unit",
    details: "Includes complete installation of a dedicated heavyload fused starter switch.",
    highlight: false
  },
  {
    name: "Compressor Bracket (Outdoor installation)",
    price: "RM 50 / unit",
    details: "Thick rust-proof steel bracket secured safely with heavy anchors.",
    highlight: false
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Muhammad Faiz (Seri Kembangan)",
    rating: 5,
    comment: "Extremely satisfied with the service from The Khan's Aircon team! They arrived perfectly on time, were very polite, and did a super thorough chemical wash. My 1.5HP AC now blows ice-cold air. No hidden charges!",
    date: "2026-05-18"
  },
  {
    id: "rev-2",
    name: "Emily Tan (Petaling Jaya)",
    rating: 5,
    comment: "Highly recommended, especially if you have an Inverter system. My master bedroom's AC was dripping water for weeks. They identified the clogged pipe quickly, resolved the leakage, and provided a 30-day warranty. Top-tier service!",
    date: "2026-05-24"
  },
  {
    id: "rev-3",
    name: "Amirul bin Hashim (Cheras)",
    rating: 5,
    comment: "Took their RM500 brand new installation package for my condo. The copper pipe and wiring layout look clean on the walls with standard professional conduit. Friendly guys, premium results at an affordable local price.",
    date: "2026-05-30"
  },
  {
    id: "rev-4",
    name: "Saraswathy (Subang Jaya)",
    rating: 5,
    comment: "Excellent service! The technician showed me the gas pressure reading before filling and gave great advice on inverter care. Very clean job, no water splashes left on my floors.",
    date: "2026-06-01"
  },
  {
    id: "rev-5",
    name: "Alvin Lee (Cyberjaya)",
    rating: 5,
    comment: "We hired them for our office cassette units overhaul in Cyberjaya. Very professional, fast response, and they provided official SST compliant invoices. Will definitely renew our maintenance contract with them.",
    date: "2026-06-02"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does the 30-Day Water Leaking Warranty work?",
    answer: "If the air conditioner unit we serviced experiences any water dripping or overflow issues within 30 days of the service completion date, our technical team will return to your premises to repair and resolve the drainage issue absolutely FREE of charge."
  },
  {
    question: "Why should I choose The Khan's Aircon for Inverter Systems?",
    answer: "Inverter air conditioners regulate compressor speeds using advanced electronic printed circuit boards (PCBs). Our technicians are specifically trained in diagnostic micro-electronics, thermistors, and precise gas load balances (R32/R410A) to ensure your system operates at peak thermodynamic efficiency and saves you the most on electricity bills."
  },
  {
    question: "Is refrigerant gas refilling charged transparently?",
    answer: "Yes, we practice complete transparency. We will show you the exact live Pressure Gauge reading using our manifold diagnostic tools before refilling. We only charge for the specific amount of gas topped up (measured in PSI) rather than charging unfair flat rates."
  },
  {
    question: "Which areas do your teams cover in Malaysia?",
    answer: "We cover all major locations in Kuala Lumpur & Selangor. Our daily technical routes actively serve Seri Kembangan, Cheras, Ampang, Shah Alam, Petaling Jaya, Subang Jaya, Cyberjaya, Putrajaya, Kajang, Puchong, Bangi, Klang, and all neighboring Selangor districts."
  }
];

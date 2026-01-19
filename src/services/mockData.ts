// mock data for development and testing when database is unavailable
import { SlotInventory, Manufacturer } from "@/types/slotMachines";

// manufacturer data based on actual public folder structure
const MANUFACTURERS_DATA = [
  {
    name: "Aristocrat",
    slug: "aristocrat",
    machines: ["buffalo", "50-dragons", "tiki-torch"],
  },
  {
    name: "Bally",
    slug: "bally",
    types: [
      "alpha2",
      "curve",
      "m9000",
      "s6000",
      "s9000",
      "v2222",
      "v2727",
      "v32",
    ],
  },
  {
    name: "IGT",
    slug: "igt",
    types: ["g20", "g22", "g23", "s2000-bonus-games", "s3000", "igt-video"],
  },
  { name: "Konami", slug: "konami", machines: [] },
  { name: "Williams", slug: "williams", machines: [] },
  {
    name: "Ainsworth",
    slug: "ainsworth",
    types: ["a560", "a640", "multigame"],
  },
  { name: "Aruze", slug: "aruze", types: ["cube-x", "innovator"] },
];

// generate mock manufacturers
export function getMockManufacturers(): Manufacturer[] {
  return MANUFACTURERS_DATA.map((mfg) => ({
    name: mfg.name,
    slug: mfg.slug,
    machine_count: Math.floor(Math.random() * 15) + 5, // 5-20 machines
    logo_path: `/manufacturers/${mfg.slug}.png`,
  }));
}

// generate mock classifications for a manufacturer
export function getMockClassifications(
  manufacturer: string
): { name: string; count: number }[] {
  const mfg = MANUFACTURERS_DATA.find(
    (m) => m.name.toLowerCase() === manufacturer.toLowerCase()
  );

  if (mfg?.types) {
    return mfg.types.map((type) => ({
      name: type.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      count: Math.floor(Math.random() * 5) + 2,
    }));
  }

  // default classifications if no specific types
  return [
    { name: "Video Slots", count: Math.floor(Math.random() * 10) + 3 },
    { name: "Reel Slots", count: Math.floor(Math.random() * 8) + 2 },
    { name: "Bonus Games", count: Math.floor(Math.random() * 5) + 1 },
  ];
}

// generate mock machines for a manufacturer
export function getMockMachines(
  manufacturer: string,
  classification?: string
): SlotInventory[] {
  const mfg = MANUFACTURERS_DATA.find(
    (m) => m.name.toLowerCase() === manufacturer.toLowerCase()
  );
  const machineCount = Math.floor(Math.random() * 10) + 8; // 8-18 machines
  const machines: SlotInventory[] = [];

  for (let i = 0; i < machineCount; i++) {
    const isFeatured = i < 3; // first 3 are featured
    const isOnSale = Math.random() > 0.7;
    const price = Math.floor(Math.random() * 2000) + 800; // $800-$2800
    const condition = ["Excellent", "Good", "Like New"][
      Math.floor(Math.random() * 3)
    ];

    // determine image path based on manufacturer structure
    let imagePath = "/placeholder.jpeg";
    if (mfg) {
      if (mfg.machines && mfg.machines.length > 0) {
        const randomMachine = mfg.machines[i % mfg.machines.length];
        imagePath = `/slots-images/${mfg.slug}/${randomMachine}.jpeg`;
      } else if (mfg.types && mfg.types.length > 0) {
        const randomType = mfg.types[i % mfg.types.length];
        imagePath = `/slots-images/${mfg.slug}/${randomType}/machine-${
          (i % 3) + 1
        }.jpeg`;
      }
    }

    const machineClassification =
      classification ||
      mfg?.types?.[i % (mfg.types.length || 1)]
        ?.replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()) ||
      "Video Slots";

    machines.push({
      id: `mock-${mfg?.slug || manufacturer}-${i + 1}`,
      title: `${mfg?.name || manufacturer} ${machineClassification} ${i + 1}`,
      image_path: imagePath,
      description: `Premium ${condition.toLowerCase()} condition ${
        mfg?.name || manufacturer
      } slot machine. Fully tested and certified. Features include bonus rounds, free spins, and progressive jackpot capabilities.`,
      is_featured: isFeatured,
      provider: mfg?.name || manufacturer,
      classification: machineClassification,
      min_bet: 0.01,
      max_bet: Math.floor(Math.random() * 10) + 5,
      price: price,
      slug: `${mfg?.slug || manufacturer.toLowerCase()}-${machineClassification
        .toLowerCase()
        .replace(/\s+/g, "-")}-${i + 1}`,
      condition: condition,
      is_on_sale: isOnSale,
      sale_price: isOnSale ? Math.floor(price * 0.85) : null,
      reels: [3, 5][Math.floor(Math.random() * 2)],
      paylines: [20, 25, 30, 40, 50][Math.floor(Math.random() * 5)],
      features: [
        "Bonus Round",
        "Free Spins",
        "Wild Symbols",
        "Scatter Pays",
        "Multipliers",
      ].slice(0, Math.floor(Math.random() * 3) + 2),
      specifications: {
        "Cabinet Type": ["Upright", "Slant Top", "Bartop"][
          Math.floor(Math.random() * 3)
        ],
        "Screen Size": `${[19, 22, 27, 32][Math.floor(Math.random() * 4)]}"`,
        Voltage: "110V",
        Weight: `${Math.floor(Math.random() * 100) + 150} lbs`,
      },
      stock_quantity: Math.floor(Math.random() * 5) + 1,
      is_active: true,
      created_at: new Date(
        Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000
      ).toISOString(),
      updated_at: new Date().toISOString(),
    });
  }

  return machines;
}

// generate a single mock machine by slug
export function getMockMachineBySlug(slug: string): SlotInventory | null {
  const parts = slug.split("-");
  const manufacturerSlug = parts[0];
  const mfg = MANUFACTURERS_DATA.find((m) => m.slug === manufacturerSlug);

  if (!mfg) return null;

  const isOnSale = Math.random() > 0.7;
  const price = Math.floor(Math.random() * 2000) + 800;
  const condition = ["Excellent", "Good", "Like New"][
    Math.floor(Math.random() * 3)
  ];

  // determine image path
  let imagePath = "/placeholder.jpeg";
  if (mfg.machines && mfg.machines.length > 0) {
    imagePath = `/slots-images/${mfg.slug}/${mfg.machines[0]}.jpeg`;
  } else if (mfg.types && mfg.types.length > 0) {
    imagePath = `/slots-images/${mfg.slug}/${mfg.types[0]}/machine-1.jpeg`;
  }

  return {
    id: `mock-${slug}`,
    title: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    image_path: imagePath,
    description: `Premium ${condition.toLowerCase()} condition ${
      mfg.name
    } slot machine. Fully tested and certified. This machine features state-of-the-art graphics, engaging bonus rounds, and exciting gameplay. Perfect for home entertainment or commercial use.`,
    is_featured: Math.random() > 0.7,
    provider: mfg.name,
    classification:
      mfg.types?.[0]
        ?.replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()) || "Video Slots",
    min_bet: 0.01,
    max_bet: Math.floor(Math.random() * 10) + 5,
    price: price,
    slug: slug,
    condition: condition,
    is_on_sale: isOnSale,
    sale_price: isOnSale ? Math.floor(price * 0.85) : null,
    reels: [3, 5][Math.floor(Math.random() * 2)],
    paylines: [20, 25, 30, 40, 50][Math.floor(Math.random() * 5)],
    features: [
      "Bonus Round",
      "Free Spins",
      "Wild Symbols",
      "Scatter Pays",
      "Multipliers",
      "Progressive Jackpot",
    ].slice(0, Math.floor(Math.random() * 4) + 2),
    specifications: {
      "Cabinet Type": ["Upright", "Slant Top", "Bartop"][
        Math.floor(Math.random() * 3)
      ],
      "Screen Size": `${[19, 22, 27, 32][Math.floor(Math.random() * 4)]}"`,
      Voltage: "110V",
      Weight: `${Math.floor(Math.random() * 100) + 150} lbs`,
      Dimensions: '32" W x 24" D x 68" H',
      Year: `${2015 + Math.floor(Math.random() * 8)}`,
    },
    stock_quantity: Math.floor(Math.random() * 5) + 1,
    is_active: true,
    created_at: new Date(
      Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000
    ).toISOString(),
    updated_at: new Date().toISOString(),
  };
}

// generate mock recommended machines
export function getMockRecommendedMachines(
  currentMachineId: string,
  manufacturer: string,
  limit: number = 4
): SlotInventory[] {
  const machines = getMockMachines(manufacturer);
  return machines.filter((m) => m.id !== currentMachineId).slice(0, limit);
}

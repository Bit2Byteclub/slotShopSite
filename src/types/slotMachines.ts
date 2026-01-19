export interface SlotInventory {
  id: string; // uuid (primary key)
  title: string; // text (machine name)
  image_path: string | null; // text (relative path to image, e.g., "Konami/Video/african-diamond.jpg")
  description: string | null; // text (full product description)
  is_featured: boolean; // boolean (show on homepage)
  provider: string; // text (manufacturer name, Konami, IGT, etc.)
  classification: string | null; // text (machine type/category, Video, Reel, etc.)
  min_bet: number | null; // numeric (minimum bet amount)
  max_bet: number | null; // numeric (maximum bet amount)
  price: number; // real (regular price)
  slug: string; // text (URL-friendly identifier)
  condition: string; // text (Excellent, Good, Fair)
  is_on_sale: boolean; // boolean (currently on sale)
  sale_price: number | null; // real (discounted price if on sale)
  reels: number | null; // integer (number of reels)
  paylines: number | null; // integer (number of paylines)
  features: string[] | null; // text[] (array of feature descriptions)
  specifications: Record<string, string> | null; // jsonb (key-value specs)
  stock_quantity: number; // integer (available inventory)
  is_active: boolean; // boolean (show on website)
  created_at: string; // timestamp
  updated_at: string; // timestamp
}

export interface Manufacturer {
  name: string; // manufacturer name
  slug: string; // URL-friendly slug
  machine_count: number; // number of available machines
  logo_path: string | null; // path to manufacturer logo
}

export interface Classification {
  name: string; // classification name (Video, Reel, etc.)
  count: number; // number of machines in this category
}

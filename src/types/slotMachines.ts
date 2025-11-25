



export interface SlotInventory {
    // the | null just means that you can assign
    // null to the value, otherwise it requires one
  id: string;                 // uuid
  title: string;              // text
  image: string | null;       // text
  description: string | null; // text
  is_featured: boolean | null;
  provider: string | null;
  min_bet: number | null;     // numeric
  max_bet: number | null;     // numeric
  price: number;              // real
  slug: string | null;
  is_on_sale: boolean | null;
  sale_price: number | null;  // real
}
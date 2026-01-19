import { supabase } from "../lib/supabaseClient";
import { SlotInventory } from "../types/slotMachines";

export async function getSlotMachinesByPriceRange(
  minPrice: number,
  maxPrice: number | null
): Promise<SlotInventory[]> {
  try {
    if (maxPrice !== null && minPrice > maxPrice) {
      throw new Error("Minimum price cannot be greater than maximum price.");
    }

    let query = supabase
      .from("Slot_Inventory")
      .select("*")
      .gte("price", minPrice);

    if (maxPrice !== null) {
      query = query.lte("price", maxPrice);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(
        `Failed to fetch slot machines by price range: ${error.message}`
      );
    }

    return data || [];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "An unexpected error occurred while fetching slot machines by price"
    );
  }
}

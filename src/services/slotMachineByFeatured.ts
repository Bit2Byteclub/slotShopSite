import { supabase } from "../lib/supabaseClient";
import { SlotInventory } from "../types/slotMachines";

export async function getFeaturedSlotMachines(): Promise<SlotInventory[]> {
  try {
    const { data, error } = await supabase
      .from("Slot_Inventory")
      .select("*")
      .eq("is_featured", true);

    if (error) {
      throw new Error(
        `Failed to fetch featured slot machines: ${error.message}`
      );
    }

    return data || [];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "An unexpected error occurred while fetching featured slot machines"
    );
  }
}

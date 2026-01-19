import { supabase } from "../lib/supabaseClient";
import { SlotInventory } from "../types/slotMachines";

export async function getSlotMachinesByOnSale(): Promise<SlotInventory[]> {
  try {
    const { data, error } = await supabase
      .from("Slot_Inventory")
      .select("*")
      .eq("is_on_sale", true);

    if (error) {
      throw new Error(
        `Failed to fetch on sale slot machines: ${error.message}`
      );
    }

    return data || [];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "An unexpected error occurred while fetching on sale slot machines"
    );
  }
}

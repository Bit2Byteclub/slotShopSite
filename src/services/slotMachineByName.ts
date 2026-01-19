import { supabase } from "../lib/supabaseClient";
import { SlotInventory } from "../types/slotMachines";

export async function getSlotMachineByName(
  name: string
): Promise<SlotInventory | null> {
  try {
    const { data, error } = await supabase
      .from("Slot_Inventory")
      .select("*")
      .eq("title", name)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        // no rows returned (this is expected, not an error)
        return null;
      }
      throw new Error(`Failed to fetch slot machine by name: ${error.message}`);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred while fetching slot machine");
  }
}

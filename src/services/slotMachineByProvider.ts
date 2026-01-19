import { supabase } from "../lib/supabaseClient";
import { SlotInventory } from "../types/slotMachines";

export async function getSlotMachinesByProvider(
  provider: string
): Promise<SlotInventory[]> {
  try {
    const { data, error } = await supabase
      .from("Slot_Inventory")
      .select("*")
      .eq("provider", provider);

    if (error) {
      throw new Error(
        `Failed to fetch slot machines by provider: ${error.message}`
      );
    }

    return data || [];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(
      "An unexpected error occurred while fetching slot machines by provider"
    );
  }
}

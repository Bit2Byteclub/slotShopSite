import { supabase } from '../lib/supabaseClient';
import { SlotInventory } from '../types/slotMachines';

export async function getSlotMachinesByOnSale(): Promise<SlotInventory[]> {
  const { data, error } = await supabase
    .from('Slot_Inventory') // table name
    .select('*') // select all columns
    .eq('is_on_sale', true); // filter for on sale slots
    if (error) {
        console.error('Error fetching on sale slot machines:', error);
        return [];
    }
    return data as SlotInventory[] || [];
}
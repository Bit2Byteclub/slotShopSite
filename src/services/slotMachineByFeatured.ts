import { supabase } from '../lib/supabaseClient';
import { SlotInventory } from '../types/slotMachines';

// just call the function to access all featured slot machines
// so getFeaturedSlotMachines();
export async function getFeaturedSlotMachines(): Promise<SlotInventory[]> {
  const { data, error } = await supabase
    .from('Slot_Inventory') // table name
    .select('*') // select all columns
    .eq('is_featured', true); // filter for featured slots
    if (error) {
        console.error('Error fetching featured slot machines:', error);
        return [];
    }
    return data as SlotInventory[] || [];
}
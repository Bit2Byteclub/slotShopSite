import { supabase } from '../lib/supabaseClient';
import { SlotInventory } from '../types/slotMachines';

// Search slot machines by title, description, or provider
// Uses case-insensitive partial matching
export async function searchSlotMachines(query: string): Promise<SlotInventory[]> {
  if (!query.trim()) {
    return [];
  }

  const searchPattern = `%${query}%`;

  const { data, error } = await supabase
    .from('Slot_Inventory')
    .select('*')
    .or(`title.ilike.${searchPattern},description.ilike.${searchPattern},provider.ilike.${searchPattern}`);

  if (error) {
    console.error('Error searching slot machines:', error);
    return [];
  }

  return data as SlotInventory[] || [];
}

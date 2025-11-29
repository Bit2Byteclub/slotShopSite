import { supabase } from '../lib/supabaseClient';
import { SlotInventory } from '../types/slotMachines';


// will return a single slot machine by its name
// or null if not found
// could be useful for search functions, also can be used as example
// is meant to be called like getSlotMachineByName("Mega Moolah");
export async function getSlotMachineByName(name: string): Promise<SlotInventory | null> {
  const { data, error } = await supabase
    .from('Slot_Inventory')// table name
    .select('*') // select all columns
    .eq('title', name) // with the name provided
    .single(); // expect a single result
  if (error) {
    console.error('Error fetching slot machine by name:', error);
    return null;
  }
  return data;
}

import { supabase } from '../lib/supabaseClient';
import { SlotInventory } from '../types/slotMachines';

export async function getSlotMachinesByProvider(provider: string): Promise<SlotInventory[]> {
  const { data, error } = await supabase
    .from('Slot_Inventory') // table name
    .select('*') // select all columns
    .eq('provider', provider); // filter by provider
    if (error) {
        console.error('Error fetching slot machines by provider:', error);
        return [];
    }
    return data as SlotInventory[] || [];
}
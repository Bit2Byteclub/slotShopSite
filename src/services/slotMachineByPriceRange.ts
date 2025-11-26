import { supabase } from '../lib/supabaseClient';
import { SlotInventory } from '../types/slotMachines';

// this one will require you to put in a range, for the search function

export async function getSlotMachinesByPriceRange(minPrice: number, maxPrice: number | null): Promise<SlotInventory[]> {
    if (maxPrice !== null && minPrice > maxPrice) {
        console.error('Minimum price cannot be greater than maximum price.');
        return [];
    }

    if (maxPrice === null) {
        const { data, error } = await supabase
            .from('Slot_Inventory') // table name
            .select('*') // select all columns
            .gte('price', minPrice); // filter for minimum price
        if (error) {
            console.error('Error fetching slot machines by minimum price:', error);
            return [];
        }
        return data as SlotInventory[] || [];
    }
    // otherwise do both min and max
  const { data, error } = await supabase
    .from('Slot_Inventory') // table name
    .select('*') // select all columns
    .gte('price', minPrice) // filter for minimum price
    .lte('price', maxPrice); // filter for maximum price
    if (error) {
        console.error('Error fetching slot machines by price range:', error);
        return [];
    }
    return data as SlotInventory[] || [];
}
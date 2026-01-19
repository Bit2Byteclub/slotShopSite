import { supabase } from "@/lib/supabaseClient";
import { Manufacturer } from "@/types/slotMachines";
import {
  getMockManufacturers,
  getMockClassifications,
  getMockMachines,
} from "./mockData";

// get all manufacturers that have active machines in stock
// only returns manufacturers with at least 1 active machine
export async function getActiveManufacturers(): Promise<Manufacturer[]> {
  const { data, error } = await supabase
    .from("Slot_Inventory")
    .select("provider")
    .eq("is_active", true)
    .gt("stock_quantity", 0);

  if (error) {
    console.error("Error fetching manufacturers:", error);
    console.log("Using mock data for manufacturers");
    return getMockManufacturers();
  }

  // if no data from database, use mock data
  if (!data || data.length === 0) {
    console.log("No manufacturers found in database, using mock data");
    return getMockManufacturers();
  }

  // group by manufacturer and count machines
  const manufacturerMap = new Map<string, number>();

  data.forEach((item) => {
    if (item.provider) {
      const count = manufacturerMap.get(item.provider) || 0;
      manufacturerMap.set(item.provider, count + 1);
    }
  });

  // convert to array and create slugs
  return Array.from(manufacturerMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    machine_count: count,
    logo_path: `/manufacturers/${name.toLowerCase().replace(/\s+/g, "-")}.png`,
  }));
}

// get classifications (machine types) for a specific manufacturer
// only returns classifications with active machines in stock
export async function getManufacturerClassifications(
  manufacturer: string
): Promise<{ name: string; count: number }[]> {
  const { data, error } = await supabase
    .from("Slot_Inventory")
    .select("classification")
    .eq("provider", manufacturer)
    .eq("is_active", true)
    .gt("stock_quantity", 0);

  if (error) {
    console.error("Error fetching classifications:", error);
    console.log("Using mock data for classifications");
    return getMockClassifications(manufacturer);
  }

  // if no data from database, use mock data
  if (!data || data.length === 0) {
    console.log("No classifications found in database, using mock data");
    return getMockClassifications(manufacturer);
  }

  // group by classification and count
  const classificationMap = new Map<string, number>();

  data.forEach((item) => {
    const classification = item.classification || "Uncategorized";
    const count = classificationMap.get(classification) || 0;
    classificationMap.set(classification, count + 1);
  });

  return Array.from(classificationMap.entries()).map(([name, count]) => ({
    name,
    count,
  }));
}

// get machines by manufacturer with optional classification filter
export async function getMachinesByManufacturer(
  manufacturer: string,
  classification?: string
) {
  let query = supabase
    .from("Slot_Inventory")
    .select("*")
    .eq("provider", manufacturer)
    .eq("is_active", true)
    .gt("stock_quantity", 0)
    .order("created_at", { ascending: false });

  if (classification) {
    query = query.eq("classification", classification);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching machines:", error);
    console.log("Using mock data for machines");
    return getMockMachines(manufacturer, classification);
  }

  // if no data from database, use mock data
  if (!data || data.length === 0) {
    console.log("No machines found in database, using mock data");
    return getMockMachines(manufacturer, classification);
  }

  return data;
}

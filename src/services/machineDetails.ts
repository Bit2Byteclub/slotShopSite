import { supabase } from "@/lib/supabaseClient";
import { SlotInventory } from "@/types/slotMachines";
import { getMockMachineBySlug, getMockRecommendedMachines } from "./mockData";

// get a single machine by slug
export async function getMachineBySlug(
  slug: string
): Promise<SlotInventory | null> {
  const { data, error } = await supabase
    .from("Slot_Inventory")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Error fetching machine:", error);
    console.log("Using mock data for machine slug:", slug);
    return getMockMachineBySlug(slug);
  }

  if (!data) {
    console.log(
      "No machine found in database, using mock data for slug:",
      slug
    );
    return getMockMachineBySlug(slug);
  }

  return data;
}

// get recommended machines (same manufacturer, different machine)
export async function getRecommendedMachines(
  currentMachineId: string,
  manufacturer: string,
  limit: number = 4
): Promise<SlotInventory[]> {
  const { data, error } = await supabase
    .from("Slot_Inventory")
    .select("*")
    .eq("provider", manufacturer)
    .eq("is_active", true)
    .gt("stock_quantity", 0)
    .neq("id", currentMachineId)
    .limit(limit)
    .order("is_featured", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching recommendations:", error);
    console.log("Using mock data for recommendations");
    return getMockRecommendedMachines(currentMachineId, manufacturer, limit);
  }

  if (!data || data.length === 0) {
    console.log("No recommendations found in database, using mock data");
    return getMockRecommendedMachines(currentMachineId, manufacturer, limit);
  }

  return data;
}

// helper function to get the full image URL from image_path
// handles both local development and production
export function getImageUrl(imagePath: string | null): string {
  if (!imagePath) {
    return "/placeholder.jpeg";
  }

  // if it's already a full URL, return as-is
  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  // construct path to image in public/slot-images folder
  // path format: "Konami/Video/african-diamond.jpg"
  return `/slot-images/${imagePath}`;
}

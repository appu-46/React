import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("ERR" + error);
    throw new Error("Failed to fetch cabins");
  }
  return data;
}

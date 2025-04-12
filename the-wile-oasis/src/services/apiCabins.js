import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("ERR" + error);
    throw new Error("Failed to fetch cabins");
  }
  return data;
}

export async function deleteCabins(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error("ERR" + error);
    throw new Error("Failed to delete cabin");
  }
  return error;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random(8)}-${newCabin.image.name.replaceAll(
    "/",
    ""
  )}`;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`;

  // https://aqiwfmggzagkkkqkpqcp.supabase.co/storage/v1/object/public/cabin-images//cabin-002.jpg

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  const { error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (uploadError) {
    deleteCabins(newCabin.id);
    throw new Error(uploadError.message);
  }

  return data;
}

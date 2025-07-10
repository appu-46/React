import supabase from "./supabase";

export async function signUp({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) {
    throw (new Error(error.message), console.log(error));
  }
  console.log(data);
  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw (new Error(error.message), console.log(error));
  }
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw (new Error(error.message), console.log(error));
  }
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw (new Error(error.message), console.log(error));
  }
}

export async function updateCurrentUser({ fullName, password, avatar }) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const cabinBucketPath = `${supabaseUrl}${import.meta.env.VITE_AVATAR_PATH}`;

  // 1. Update fullName or password:
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error: updateError } = await supabase.auth.updateUser(
    updateData
  );

  if (updateError) {
    throw new Error(updateError.message);
  }

  if (!avatar) return data;

  // 2. Upload avatar image
  const fileName = `/avatar-${data.user.id}-${Math.random()}`;

  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  // 3. Update avatar image
  if (!uploadError) {
    const avatarPath = `${cabinBucketPath}${fileName}`;
    const { data: avatardata, error: avatarerror } =
      await supabase.auth.updateUser({ data: { avatarPath } });

    if (avatarerror) {
      throw new Error(avatarerror.message);
    }

    return avatardata;
  }
  return { data, updateError };
}

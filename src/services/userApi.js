import { config } from "../utils/config";

export async function fetchUserProfile(token) {
  try {
    const res = await fetch(`${config.BASE_URL}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Error loading your informations!");

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateUser({token, updatedInfos}) {
  try {
    const res = await fetch(`${config.BASE_URL}/profile`, {
      method: "PUT",
      body: JSON.stringify(updatedInfos),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Error: Update did not work!");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

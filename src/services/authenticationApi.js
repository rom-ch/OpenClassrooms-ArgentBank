import { config } from "../utils/config";

export async function login(userCredentials) {
  try {
    const res = await fetch(`${config.BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Error: User not found!");
    const data = await res.json();

    if (userCredentials.stayLoggedIn) {
      localStorage.setItem("user", JSON.stringify(data.body.token));
    }

    sessionStorage.setItem("user", JSON.stringify(data.body.token));

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

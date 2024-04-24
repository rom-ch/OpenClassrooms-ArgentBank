const API_URL = "http://localhost:3001/api/v1";

export async function login(token) {
  try {
    const res = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw Error("Login failed");
  }
}

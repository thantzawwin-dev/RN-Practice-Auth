import axios from "axios";

const API_KEY = "AIzaSyAM8TNwrYOskjZRByu6efbcmc48tzJS6Fc";

export async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

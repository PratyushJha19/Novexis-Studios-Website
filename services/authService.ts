import { User } from "../types";
import SHA256 from "crypto-js/sha256";

// This is the hash of ""
const ADMIN_HASH =
  "f1d20e726224847794cc5d14e5aab4e45bcfa889c3c0c36546f5d0cef1b30721";
const ADMIN_EMAIL = "novexisstudios@gmail.com";

export const login = (email: string, pass: string): User | null => {
  // 1. Hash the incoming password attempt
  const hashedAttempt = SHA256(pass).toString();

  // 2. Compare the email AND the hashed password
  if (email === ADMIN_EMAIL && hashedAttempt === ADMIN_HASH) {
    const user: User = { id: "admin_1", email, role: "admin" };
    localStorage.setItem("novexis_user", JSON.stringify(user));
    return user;
  }

  return null;
};

export const logout = () => {
  localStorage.removeItem("novexis_user");
};

export const getCurrentUser = (): User | null => {
  const data = localStorage.getItem("novexis_user");
  return data ? JSON.parse(data) : null;
};

import axios from "axios";

export const urlInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MARVEL_URL || "http://localhost:3000/api/",
});

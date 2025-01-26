import { User } from "@/types/user.type";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

// Function to fetch user data
export async function GETUsers() : Promise<User[]> {
  try {
    const response = await api.get(`/users`); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error; // Re-throw the error for handling in the calling code
  }
}
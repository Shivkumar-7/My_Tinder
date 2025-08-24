import axios from "axios";
import { BASE_URL } from "./constant";

// Helper to join URLs safely
const joinUrl = (path) => `${BASE_URL}/${path.replace(/^\/+/, "")}`;

// Axios instance
const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies for JWT auth
});

// ===== AUTH =====
export const signupUser = async (data) => API.post(joinUrl("signup"), data);
export const loginUser = async (data) => API.post(joinUrl("login"), data);
export const logoutUser = async () => API.post(joinUrl("logout"));

// ===== PROFILE =====
export const getProfile = async () => API.get(joinUrl("profile/view")); // <-- adjust if your backend path is /profile/view
export const updateProfile = async (data) => API.put(joinUrl("profile"), data);

// ===== FEED =====
export const getFeed = async () => API.get(joinUrl("feed"));

// ===== CONNECTIONS =====
export const getConnections = async () => API.get(joinUrl("connections"));
export const addConnection = async (userId) => API.post(joinUrl("connections"), { userId });

// ===== REQUESTS =====
export const getRequests = async () => API.get(joinUrl("requests"));
export const respondRequest = async (requestId, action) => 
  API.post(joinUrl(`requests/${requestId}`), { action });

export default API;

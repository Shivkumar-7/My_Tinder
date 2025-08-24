import axios from "axios";
import { BASE_URL } from "./constant";

// Axios instance
const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies for JWT auth
});

// ===== AUTH =====
export const signupUser = async (data) => API.post("signup", data);
export const loginUser = async (data) => API.post("login", data);
export const logoutUser = async () => API.post("logout");

// ===== PROFILE =====
export const getProfile = async () => API.get("profile");
export const updateProfile = async (data) => API.put("profile", data);

// ===== FEED =====
export const getFeed = async () => API.get("feed");

// ===== CONNECTIONS =====
export const getConnections = async () => API.get("connections");
export const addConnection = async (userId) => API.post("connections", { userId });

// ===== REQUESTS =====
export const getRequests = async () => API.get("requests");
export const respondRequest = async (requestId, action) => 
  API.post(`requests/${requestId}`, { action });

export default API;

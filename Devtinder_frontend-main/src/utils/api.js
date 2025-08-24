import axios from "axios";
import { BASE_URL } from "./constants";

// Ensure single slash
const joinUrl = (path) => `${BASE_URL}/${path.replace(/^\/+/, "")}`;

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // cookies are sent
});

// ===== AUTH =====
export const signupUser = (data) => API.post(joinUrl("signup"), data);
export const loginUser = (data) => API.post(joinUrl("login"), data);
export const logoutUser = () => API.post(joinUrl("logout"));

// ===== PROFILE =====
export const getProfile = () => API.get(joinUrl("profile/view")); 
export const updateProfile = (data) => API.put(joinUrl("profile"), data);

// ===== FEED =====
export const getFeed = () => API.get(joinUrl("feed"));

// ===== CONNECTIONS =====
export const getConnections = () => API.get(joinUrl("connections"));
export const addConnection = (userId) => API.post(joinUrl("connections"), { userId });

// ===== REQUESTS =====
export const getRequests = () => API.get(joinUrl("requests"));
export const respondRequest = (requestId, action) => API.post(joinUrl(`requests/${requestId}`), { action });

export default API;

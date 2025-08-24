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

// ===== USER =====
export const getUsers = () => API.get(joinUrl("user")); // ✅ matches backend /user

// ===== REQUESTS =====
export const getRequests = () => API.get(joinUrl("request")); // ✅ backend has /request (singular)
export const sendRequest = (data) => API.post(joinUrl("request"), data);
export const respondRequest = (requestId, action) =>
  API.put(joinUrl(`request/${requestId}`), { action }); // ✅ use PUT or whatever backend expects

export default API;

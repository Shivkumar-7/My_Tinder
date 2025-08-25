// src/utils/api.js
import axios from "axios";
import { BASE_URL } from "./constants";

// ✅ Axios instance with base URL
const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies (important for auth)
});

// ===== AUTH =====
export const signupUser = (data) => API.post("/signup", data);
export const loginUser = (data) => API.post("/login", data);
export const logoutUser = () => API.post("/logout");

// ===== PROFILE =====
export const getProfile = () => API.get("/profile/view");
export const updateProfile = (data) => API.patch("/profile/edit", data);

// ===== FEED =====
export const getFeed = () => API.get("/feed");

// ===== CONNECTIONS =====
export const getConnections = () => API.get("/user/connections");

// ===== REQUESTS =====
export const getRequests = () => API.get("/user/requests/recieved");
export const sendRequest = (status, toUserId) =>
  API.post(`/request/send/${status}/${toUserId}`);
export const reviewRequest = (status, requestId) =>
  API.post(`/request/review/${status}/${requestId}`);

export default API;

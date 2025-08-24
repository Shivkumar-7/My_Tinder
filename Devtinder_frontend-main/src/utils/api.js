import axios from "axios";
import { BASE_URL } from "./constants";

// ✅ Helper to avoid double slashes
const joinUrl = (path) => `${BASE_URL}/${path.replace(/^\/+/, "")}`;

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies
});

// ===== AUTH =====
export const signupUser = (data) => API.post(joinUrl("signup"), data);
export const loginUser = (data) => API.post(joinUrl("login"), data);
export const logoutUser = () => API.post(joinUrl("logout"));

// ===== PROFILE =====
export const getProfile = () => API.get(joinUrl("profile/view"));
export const updateProfile = (data) => API.patch(joinUrl("profile/edit"), data);

// ===== FEED =====
export const getFeed = () => API.get(joinUrl("feed"));

// ===== CONNECTIONS =====
export const getConnections = () => API.get(joinUrl("user/connections"));

// ===== REQUESTS =====
export const getRequests = () => API.get(joinUrl("user/requests/recieved"));
export const sendRequest = (status, toUserId) =>
  API.post(joinUrl(`request/send/${status}/${toUserId}`));
export const reviewRequest = (status, requestId) =>
  API.post(joinUrl(`request/review/${status}/${requestId}`));

export default API;

// Remove trailing slash to prevent double-slash issues
export const BASE_URL = (import.meta.env.VITE_BASEURL || "https://withme-or-not.onrender.com").replace(/\/$/, "");

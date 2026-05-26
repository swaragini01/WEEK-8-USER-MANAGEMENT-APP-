const apiBaseUrl = (import.meta.env.VITE_API_URL || "/user-api").replace(/\/$/, "");

export function apiFetch(path, options) {
  return fetch(`${apiBaseUrl}${path}`, options);
}

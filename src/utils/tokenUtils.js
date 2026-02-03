export function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const payload = JSON.parse(atob(token.split(".")[1]));
  return {
    email: payload.sub,
    role: payload.role,
    name: payload.name, // if present
  };
}

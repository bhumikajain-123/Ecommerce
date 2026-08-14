const API_URL = "http://localhost:5000";

export const api = async (url, options = {}) => {
  const token = localStorage.getItem("token");
  const adminToken = localStorage.getItem("adminToken");

  const { admin, ...fetchOptions } = options;

  const authToken = admin ? adminToken : token;

  const response = await fetch(`${API_URL}${url}`, {
    ...fetchOptions,

    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,

      ...(authToken && {
        Authorization: `Bearer ${authToken}`,
      }),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};

import axiosClient from "./axiosClient";

export const fetchMe = async () => {
  const response = await axiosClient.get("/api/menu");
  return response.data;
};

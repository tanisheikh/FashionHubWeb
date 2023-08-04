import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const getData = async () => {
  const response = await axios.get(`${baseUrl}/products?limit=2`);
  return response.data;
};


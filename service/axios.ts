import axios from "axios";

const API_URL = "https://6644e4d6b8925626f8905be1.mockapi.io/api/portofolio";

export async function fetchPortfolio() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching portfolio data");
  }
}

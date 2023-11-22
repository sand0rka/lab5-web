import { baseHttp } from "./setup";

export const getTrolleybuses = async (query) => {
  try {
    console.log(`/trolleybuses/${query ? query : ""}`);
    const response = await baseHttp.get(`/trolleybuses/${query ? query : ""}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
import axios from "axios";

axios.defaults.headers.common["Content-Type"] =
  "application/json; charset=UTF-8";

export const baseHttp = axios.create({
  baseURL: "http://localhost:8000",
});
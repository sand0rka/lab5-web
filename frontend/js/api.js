import { displayTrolleybuses } from "./domUtils.js";

export let data = [];

export async function fetchTrolleybuses() {
  try {
    const response = await fetch("http://127.0.0.1:8000/trolleybuses/");
    data = await response.json();
    displayTrolleybuses(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
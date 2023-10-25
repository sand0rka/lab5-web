import { data } from "./api.js";
import { displayTrolleybuses } from "./domUtils.js";

const counterOutput = document.querySelector(".counterOutput p");
const searchInput = document.querySelector(".searchInput");

export function sortByMaxSpeed() {
  const sortedData = [...data];
  sortedData.sort((a, b) => a.max_speed - b.max_speed);
  displayTrolleybuses(sortedData);
}

export function countTotalCapacity() {
  const totalCapacity = data.reduce((acc, trolleybus) => {
    return acc + parseFloat(trolleybus.capacity);
  }, 0);
  counterOutput.textContent = `Summary capacity: ${totalCapacity} people`;
}

export function searchByRoute() {
  const foundTrolleybuses = data.filter(
    (trolleybus) => trolleybus.route_number === parseInt(searchInput.value)

  );
  displayTrolleybuses(foundTrolleybuses);
}
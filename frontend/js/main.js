import { fetchTrolleybuses, data } from "./api.js";
import {
  sortByMaxSpeed,
  searchByRoute,
  countTotalCapacity,
} from "./methods.js";
import { overlay, openModal, closeModal, closeEditModal } from "./modals.js";

document.addEventListener("DOMContentLoaded", function () {
  const sortToggle = document.querySelector(".sort-toggle");
  const countButton = document.querySelector(".count");
  const searchButton = document.querySelector(".searchButton"); 
  const openModalBtn = document.querySelector(".open");
  const closeModalBtn = document.querySelector(".close");
  const editTrolleybusForm = document.getElementById("editTrolleybusForm");
  const createTrolleybusForm = document.getElementById("createTrolleybusForm");

  createTrolleybusForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const createData = new FormData(createTrolleybusForm);

		const trolleybusNumber = createData.get("trolleybus_number");

    const trolleybusExists = data.some(trolleybus => trolleybus.trolleybus_number === parseInt(trolleybusNumber));

    if (trolleybusExists) {
        alert("Trolleybus number already exists. Please enter a unique trolleybus number.");
        return;
    }


    try {
      const response = await fetch(
        "http://127.0.0.1:8000/trolleybuses/",
        {
          method: "POST",
          body: createData,
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      closeModal();

    } catch (error) {
      console.error(error);
    }
  });

  var selectedTrolleybus = null;

  const editCloseButton = document.querySelector(".edit-close");
  editCloseButton.addEventListener("click", closeEditModal);

  function openEditModal(trolleybus) {
    const editModal = document.querySelector(".edit-modal");
    document.getElementById("editRouteNumber").value = trolleybus.route_number;
    document.getElementById("editTrolleybusNumber").value = trolleybus.trolleybus_number;
    document.getElementById("editCapacity").value = trolleybus.capacity;
    document.getElementById("editMaxSpeed").value = trolleybus.max_speed;
    

    editModal.classList.remove("hidden");
    selectedTrolleybus = trolleybus;
  }

  document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("edit-button")) {
      const trolleybusId = event.target.getAttribute("data-id");
      const selectedTrolleybus = data.find((t) => t.id == trolleybusId);
      openEditModal(selectedTrolleybus);
    }
  });

  editTrolleybusForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const editData = new FormData(editTrolleybusForm);

		const trolleybusNumber = editData.get("trolleybus_number");
    const id = selectedTrolleybus.id;

    const trolleybusExists = data.some(trolleybus => trolleybus.trolleybus_number === parseInt(trolleybusNumber) && trolleybus.id !== id);

    if (trolleybusExists) {
        alert("Trolleybus number already exists. Please enter a unique trolleybus number.");
        return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/trolleybuses/${selectedTrolleybus.id}/`,
        {
          method: "PUT",
          body: editData,
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      const editModal = document.querySelector(".edit-modal");
      editModal.classList.add("hidden");

      fetchTrolleybuses();
    } catch (error) {
      console.log(error);
    }
  });

  fetchTrolleybuses();

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  sortToggle.addEventListener("click", sortByMaxSpeed);
  countButton.addEventListener("click", countTotalCapacity);
  searchButton.addEventListener("click", searchByRoute);
});
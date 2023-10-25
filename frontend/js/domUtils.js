const trolleybusList = document.getElementById("trolleybus-list");

export const displayTrolleybuses = (dataToDisplay) => {
  trolleybusList.innerHTML = "";
  let currentRow;

  dataToDisplay.forEach((trolleybus, index) => {
    if (index % 3 === 0) {
      currentRow = document.createElement("div");
      currentRow.classList.add("containerRows");
      trolleybusList.appendChild(currentRow);
    }

    const trolleybusItem = document.createElement("div");
    trolleybusItem.classList.add("trolleybus-item");

    trolleybusItem.innerHTML = `
    <img src="https://d1c4d7gnm6as1q.cloudfront.net/Pictures/1024x536/0/3/1/28031_ualvivelectrontrolleybuses_422333.jpg">
      <h3>Trolleybus ${trolleybus.route_number}</h4>
      <p>Trolleybus number; : ${trolleybus.trolleybus_number}</p>
      <p>Capacity: ${trolleybus.capacity}</p>
      <p>Max Speed: ${trolleybus.max_speed}</p>
      <button class="edit-button" data-id="${trolleybus.id}">Edit</button>
    `;

    currentRow.appendChild(trolleybusItem);
  });
};
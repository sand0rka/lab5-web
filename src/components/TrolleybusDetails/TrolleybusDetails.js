import React, { useEffect, useState } from "react";
import "./TrolleybusDetails.css";
import { NavLink, useParams } from "react-router-dom";
import trolleybus1 from "../../Icons/trolleybus1.webp";
import { getTrolleybus } from "../../services/trolleybuses";

const TrolleybusDetails = () => {
  const { trolleybusId } = useParams();
  const [trolleybus, setTrolleybus] = useState(null);

  const cardItems = [
    {
      id: 1,
      model: "Trolleybus Model 1",
      capacity: 120,
      description:
        "A modern and comfortable trolleybus for everyday commuting.",
      max_speed: 100,
      trolleybus_number: 1,
      price: "100 000",
    },
    {
      id: 2,
      trolleybus_number: 2,
      model: "Trolleybus Model 2",
      capacity: 120,
      max_speed: 100,
      description:
        "A classic and vintage trolleybus with a touch of nostalgia.",
      price: "120 000",
    },
    {
      id: 3,
      trolleybus_number: 3,
      model: "Trolleybus Model 3",
      capacity: 120,
      description:
        "An eco-friendly and efficient trolleybus for sustainable transportation.",
      max_speed: 100,
      price: "200 000",
    },
    {
      id: 4,
      trolleybus_number: 4,
      model: "Trolleybus Model 4",
      capacity: 120,
      description: "Another fantastic trolleybus option.",
      max_speed: 100,
      price: "150 000",
    },
  ];

  useEffect(() => {
    const selectedTrolleybus = cardItems.find(
      (trolleybus) => trolleybus.id === parseInt(trolleybusId)
    );
    setTrolleybus(selectedTrolleybus);
  }, [trolleybusId]);

  return (
    <div className="modal-overlay">
      {trolleybus ? (
        <>
          <img src={trolleybus1} alt="Trolleybus" />
          <div className="trolleybus-details-info">
            <h2>{trolleybus.model}</h2>
            <p>Trolleybus Number: {trolleybus.trolleybus_number}</p>
            <p>Capacity: {trolleybus.capacity}</p>
            <p>Max Speed: {trolleybus.max_speed}</p>
            <p>Price: ${trolleybus.price}</p>
            <select>
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
            <select>
              <option value="">Select a кількість</option>
              <option value="red">1</option>
              <option value="blue">2</option>
              <option value="green">3</option>
            </select>
          </div>
          <div className="modal-buttons">
            <NavLink className="link_to_catalog" to="/catalog">
              Back
            </NavLink>
            <button>Add to Cart</button>
          </div>
        </>
      ) : (
        <div className="loader">Loading...</div>
      )}
    </div>
  );
};

export default TrolleybusDetails;

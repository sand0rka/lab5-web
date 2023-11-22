import React, { useState } from 'react';
import './TrolleybusItem.css';
import trolleybus1 from '../../Icons/trolleybus1.webp';
import TrolleybusDetails from '../TrolleybusDetails/TrolleybusDetails'; 
import { NavLink } from "react-router-dom";


const TrolleybusItem = (trolleybus) => {
  const { model,
    trolleybus_number,
    capacity,
    max_speed,
    price,  } = trolleybus;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <img src={trolleybus1} alt="Product" className="card-image" />
      <h3 className="card-title">{model}</h3>
      <p className="card-price">${price}</p>
      <p>Max Speed: {max_speed}</p>
      <button className="view-more-button" onClick={openModal}>
        View More
      </button>
      <NavLink exact to={`/Catalog/${model}`}> View more</NavLink>

      {isModalOpen && (
        <TrolleybusDetails
          closeModal={closeModal}
          trolleybus = {trolleybus}
        />
      )}
    </div>
  );
};

export default TrolleybusItem;

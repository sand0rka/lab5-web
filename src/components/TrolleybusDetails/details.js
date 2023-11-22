import React, { useState } from 'react';
import './TrolleybusDetails.css';

const TrolleybusDetails = () => {
  const {model} = useState();
  
  return (
    <div className="modal-overlay">
        <div className="trolleybus-details-info">
          <h2>{model}</h2>
          <p>Trolleybus Number: {trolleybus_number}</p>
          <p>Capacity: {capacity}</p>
          <p>Max Speed: {max_speed}</p>
          <p>Price: ${price}</p>
        </div>
        <div className="modal-buttons">
          <button onClick={closeModal}>Go Back</button>
          <button>Add to Cart</button>
        </div>
      </div>
      

  );
};

export default TrolleybusDetails;

import React from 'react';
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import CardItem from '../../components/CardItem/CardItem';
import './Catalog.css';
import trolleybus1 from '../../Icons/trolleybus1.webp';
import trolleybus2 from '../../Icons/trolleybus2.webp';
import trolleybus3 from '../../Icons/trolleybus3.jpg';

const Catalog = () => {
	const cardItems = [
    { title: 'Trolleybus Model 1', description: 'A modern and comfortable trolleybus for everyday commuting.', price: '100 000', imageSrc: trolleybus1 },
    { title: 'Trolleybus Model 2', description: 'A classic and vintage trolleybus with a touch of nostalgia.', price: '120 000', imageSrc: trolleybus2 },
		{ title: 'Trolleybus Model 3', description: 'An eco-friendly and efficient trolleybus for sustainable transportation.', price: '200 000', imageSrc: trolleybus3 },
		{ title: 'Trolleybus Model 4', description: 'An eco-friendly and efficient trolleybus for sustainable transportation.', price: '150 000', imageSrc: trolleybus3 },
  ];

  return (
    <div className="container">
			<CatalogFilter />
        <div className="cards-container">
          {cardItems.map((item, index) => (
            <CardItem
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              imageSrc={item.imageSrc} 
            />
          ))}
        </div>
      </div>
  );
};

export default Catalog;

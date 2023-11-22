import React, { useState } from 'react';
import './Home.css';
import CardItem from '../../components/CardItem/CardItem';
import shopImage from '../../Icons/shop-image.jpg';
import trolleybus1 from '../../Icons/trolleybus1.webp';
import trolleybus2 from '../../Icons/trolleybus2.webp';
import trolleybus3 from '../../Icons/trolleybus3.jpg';

const Home = () => {
  const textConstants = {
    welcome: 'Welcome to our Trolleybus Shop!',
    description:
      'Explore our exceptional collection of premium trolleybuses, meticulously designed and crafted to provide the utmost comfort and convenience for your everyday commute. From sleek and modern designs to classic and vintage models, our shop offers a diverse range of options to cater to every taste and preference. Delve into our catalog to discover the latest arrivals and exclusive deals on state-of-the-art trolleybuses and accessories. Let us redefine your commuting experience with our top-notch products and unparalleled customer service.',
  };

  const initialDisplayCount = 3;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const cardItems = [
    { title: 'Trolleybus Model 1', description: 'A modern and comfortable trolleybus for everyday commuting.', price: '100 000', imageSrc: trolleybus1 },
    { title: 'Trolleybus Model 2', description: 'A classic and vintage trolleybus with a touch of nostalgia.', price: '120 000', imageSrc: trolleybus2 },
    { title: 'Trolleybus Model 3', description: 'An eco-friendly and efficient trolleybus for sustainable transportation.', price: '200 000', imageSrc: trolleybus3 },
    { title: 'Trolleybus Model 4', description: 'Another fantastic trolleybus option.', price: '150 000', imageSrc: trolleybus3 },
  ];

  const visibleCardItems = cardItems.slice(0, displayCount);

  const handleViewMoreClick = () => {
    setDisplayCount(displayCount + 1);
  };

  return (
    <div className="home-container">
      <div className="top-row">
        <div className="image-container">
          <img src={shopImage} alt="Shop" className="shop-image" />
        </div>
        <div className="text-container">
          <h2>{textConstants.welcome}</h2>
          <p>{textConstants.description}</p>
        </div>
      </div>
      <div className="cards-container">
        {visibleCardItems.map((item, index) => (
          <CardItem
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
      {displayCount < cardItems.length && (
        <button className="view-more-button" onClick={handleViewMoreClick}>
          View More
        </button>
      )}
    </div>
  );
};

export default Home;

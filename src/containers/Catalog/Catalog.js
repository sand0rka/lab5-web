import React, { useState, useEffect, useMemo } from "react";
import TrolleybusItem from "../../components/TrolleybusItem/TrolleybusItem";
import Loader from "../../components/Loader/Loader";
import { getTrolleybuses } from "../../services/trolleybuses";

const Catalog = () => {
  const [trolleybuses, setTrolleybuses] = useState([]);
  const [visibleRows, setVisibleRows] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cardItems = [
      {
        id: 1,
        model: "Trolleybus Model 1",
        capacity: 120,
        description:
          "A modern and comfortable trolleybus for everyday commuting.",
        max_speed: 70,
        trolleybus_number: 1,
        price: 100000,
      },
      {
        id: 2,
        trolleybus_number: 2,
        model: "Trolleybus Model 2",
        capacity: 120,
        max_speed: 100,
        description:
          "A classic and vintage trolleybus with a touch of nostalgia.",
        price: 120000,
      },
      {
        id: 3,
        trolleybus_number: 3,
        model: "Trolleybus Model 3",
        capacity: 120,
        description:
          "An eco-friendly and efficient trolleybus for sustainable transportation.",
        max_speed: 100,
        price: 200000,
      },
      {
        id: 4,
        trolleybus_number: 4,
        model: "Trolleybus Model 4",
        capacity: 120,
        description: "Another fantastic trolleybus option.",
        max_speed: 100,
        price: 150000,
      },
    ];
    setLoading(false);
    setTrolleybuses(cardItems);
  }, []);

  const originalTrolleybuses = trolleybuses.slice();
  const filteredTrolleybuses = useMemo(() => {
    let result = originalTrolleybuses;

    if (selectedFilter && filterValue) {
      result = result.filter(
        (item) => item[selectedFilter] === parseInt(filterValue, 10)
      );
    }

    if (searchQuery) {
      result = result.filter((item) =>
        item.model.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result;
  }, [originalTrolleybuses, selectedFilter, filterValue, searchQuery]);

  const totalRows = Math.ceil(filteredTrolleybuses.length / 3);

  const visibleTrolleybuses = filteredTrolleybuses.slice(0, visibleRows * 3);

  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 1);
  };

  const handleSearch = (search) => {
    setSearchQuery(search);
  };


  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="filtersAndSearch">
            <div className="filtersContainer">
              <div className="filterValueContainer">
                <input
                  type="text"
                  placeholder="Filter Value"
                  onChange={(e) => setFilterValue(e.target.value)}
                />
                <select onChange={(e) => setSelectedFilter(e.target.value)}>
                  <option value="capacity">Capacity</option>
                  <option value="max_speed">Max Speed</option>
                  <option value="price">Price</option>
                </select>
              </div>
            </div>
            <input
              className="search"
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="cards-container">
            {visibleTrolleybuses.map((item) => (
              <TrolleybusItem key={item.id} item={item} />
            ))}
          </div>
          {visibleRows < totalRows && (
            <button className="view-more-button" onClick={handleViewMoreClick}>
              View More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Catalog;

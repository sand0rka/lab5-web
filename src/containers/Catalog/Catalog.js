import { useCallback, useEffect, useState } from "react";
import TrolleybusItem from "../../components/TrolleybusItem/TrolleybusItem";
import Loader from "../../components/Loader/Loader";
import "./Catalog.css";
import { getTrolleybuses } from "../../services/trolleybuses";

const Catalog = () => {
  const [trolleybuses, setTrolleybuses] = useState([]);
  const [visibleRows, setVisibleRows] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(true);

  const handleFilterChange = useCallback((filterType, filterVal) => {
    console.log(filterType, filterVal);
    setSelectedFilter(filterType);
    setFilterValue(filterVal);
  }, []);

  const getQuery = () => {
    if (searchQuery) {
      return `?model=${searchQuery}${
        selectedFilter && filterValue ? `&${selectedFilter}=${filterValue}` : ""
      }`;
    }
    return `${
      selectedFilter && filterValue ? `?${selectedFilter}=${filterValue}` : ""
    }`;
  };

  useEffect(() => {
    console.log("Effect triggered");
    const query = getQuery();

    async function fetchTrolleybusesData(query) {
      try {
        const data = await getTrolleybuses(query);
        setTrolleybuses(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchTrolleybusesData(query);
  }, [searchQuery, selectedFilter, filterValue, handleFilterChange]);

  const totalRows = Math.ceil(trolleybuses.length / 3);

  const visibleTrolleybuses = trolleybuses.slice(0, visibleRows * 3);

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
              <button
                className="applyFiltersButton"
                text="Apply filter"
                onClick={() => handleFilterChange(selectedFilter, filterValue)}
              />
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
            {visibleTrolleybuses.map((item, index) => (
              <TrolleybusItem
                key={index}
                model={item.model}
                price={item.price}
                max_speed={item.max_speed}
                capacity={item.capacity}
                route_number={item.route_number}
                trolleybus_number={item.trolleybus_number}
                imageSrc={item.imageSrc}
              />
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

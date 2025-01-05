import React, { useState, useEffect } from "react";
import "./CruiseSearchPage.css";

const CruiseSearchPage = () => {
  const [itineraries, setItineraries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDestination, setFilterDestination] = useState("");
  const itinerariesPerPage = 10;

  useEffect(() => {
    // Fetch itineraries from the database (simulated here)
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          title: "3 Night Bahamas",
          ship: "MSC Divina",
          departing: "Miami, Florida",
          ports: "Freeport, Grand Bahama Island, Ocean Cay Marine Reserve",
          dates: "January 2025 - February 2025 - March 2026",
          image: "https://source.unsplash.com/800x400/?cruise,ship",
        },
        {
          id: 2,
          title: "7 Night Caribbean",
          ship: "Royal Caribbean Oasis",
          departing: "Fort Lauderdale, Florida",
          ports: "Labadee, Jamaica, Cozumel",
          dates: "April 2025 - May 2025 - June 2025",
          image: "https://source.unsplash.com/800x400/?caribbean,ship",
        },
        // Add more dummy data as needed
      ];
      setItineraries(data);
    };

    fetchData();
  }, []);

  // Pagination
  const indexOfLastItinerary = currentPage * itinerariesPerPage;
  const indexOfFirstItinerary = indexOfLastItinerary - itinerariesPerPage;
  const currentItineraries = itineraries
    .filter((itinerary) =>
      filterDestination
        ? itinerary.title.toLowerCase().includes(filterDestination.toLowerCase())
        : true
    )
    .slice(indexOfFirstItinerary, indexOfLastItinerary);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="cruise-search-page">
      {/* Header */}
      <header className="header">Header Component Placeholder</header>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filter-inputs">
          <select
            onChange={(e) => setFilterDestination(e.target.value)}
            value={filterDestination}
          >
            <option value="">All Destinations</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Caribbean">Caribbean</option>
          </select>
          <input type="date" />
          <input type="range" min="100" max="800" />
          <button>More Filters</button>
        </div>
        <div className="applied-filters">
          <button className="applied-filter">Luxury</button>
          <button className="applied-filter">Family</button>
          <button className="applied-filter">Ocean View</button>
        </div>
      </div>

      {/* Cruise Results */}
      <h2>Cruise Search Results ({itineraries.length})</h2>
      <div className="itinerary-list">
        {currentItineraries.length > 0 ? (
          currentItineraries.map((itinerary) => (
            <div className="itinerary-card" key={itinerary.id}>
              <img src={itinerary.image} alt={itinerary.title} />
              <div className="itinerary-info">
                <h3>{itinerary.title}</h3>
                <p>{itinerary.ship}</p>
                <p>
                  <strong>Departing:</strong> {itinerary.departing}
                </p>
                <p>
                  <strong>Ports of Call:</strong> {itinerary.ports}
                </p>
                <p>
                  <strong>Sailing Dates:</strong> {itinerary.dates}
                </p>
                <button className="view-itinerary">View Itinerary</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No itineraries match your search.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "disabled" : ""}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastItinerary >= itineraries.length}
          className={
            indexOfLastItinerary >= itineraries.length ? "disabled" : ""
          }
        >
          Next
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">Footer Component Placeholder</footer>
    </div>
  );
};

export default CruiseSearchPage;

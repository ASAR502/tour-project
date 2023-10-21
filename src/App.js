import React, { useEffect, useState } from "react";
import Tours from "./Tours.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const url = "https://course-api.com/react-tours-project";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours((prev) => [data]);
      console.log(tours);
      setLoading(false);
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const removeTour = (id) => {
    const updatedTours = tours[0].filter((tour, i) => i !== id);
    setTours(updatedTours);
    console.log("hello");
  };

  return (
    <div>
      {loading ? (
        <div>Loading data...</div>
      ) : (
        <>
          {tours.length === 0 ? (
            <>
              <div>There are no tours left</div>
              <button onClick={fetchData}>Refresh</button>
            </>
          ) : (
            <Tours tours={tours} removeTour={removeTour} />
          )}
        </>
      )}
    </div>
  );
}
export default App;

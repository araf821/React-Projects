import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [data, setData] = useState([]);
  const [savedData, setSavedData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const tourList = await response.json();
        setLoading(false);
        setData(tourList);
        setSavedData(tourList)
        console.log(tourList);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  const deleteItem = (id) => {
    const newData = data.filter((tour) => tour.id !== id);
    setData(newData);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2 className="title">404 - Resource Not Found :(</h2>;
  }

  return (
    <main>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {data.length ? (
        <Tours data={data} deleteItem={deleteItem} />
      ) : (
        <button className="btn refresh-btn" onClick={() => setData(savedData)}>
          Refresh Tours
        </button>
      )}
    </main>
  );
}

export default App;

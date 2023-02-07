import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const tourList = await response.json();
        setLoading(false);
        setData(tourList);
        console.log(tourList);
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>404 - Resource Not Found :(</h2>;
  }

  return (
    <main>
      <h1 className="title underline">Our Tours</h1>
    </main>
  );
}

export default App;

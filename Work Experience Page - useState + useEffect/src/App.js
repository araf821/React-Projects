import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Buttons from "./Buttons";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const fetchedData = await res.json();
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  } else if (error) {
    return <h2>Sorry, something's gone wrong! Please don't try again.</h2>;
  } else {
    return (
      <div className="section">
        {/* ---------TITLE------- */}
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>

        {/* --------JOBS SECTION-------- */}
        <section className="jobs-center">
          {/* ------- BUTTONS -------- */}
          <Buttons jobs={data} />
        </section>
        
      </div>
    );
  }
}

export default App;

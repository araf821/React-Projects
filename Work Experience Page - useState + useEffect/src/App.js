import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Job from "./Job";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [selectedJob, setSelectedJob] = useState();

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const fetchedData = await res.json();
      setData(fetchedData);
      setLoading(false);
      setSelectedJob(data[0].id);
    } catch (error) {
      setLoading(false);
      // setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function jobToDisplay(id) {
    const selected = data.filter((job) => job.id === id);
    setSelectedJob(selected[0].id);
  }

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
          <Buttons
            jobs={data}
            jobToDisplay={jobToDisplay}
            selectedJob={selectedJob}
          />

          {/* -------------JOB INFO-------------- */}
          <Job data={data} jobToDisplay={selectedJob} />
        </section>
      </div>
    );
  }
}

export default App;

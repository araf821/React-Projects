const Buttons = ({ jobs, jobToDisplay, selectedJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((job) => {
        if (selectedJob === job.id) {
          return (
            <button
              key={job.id}
              onClick={() => jobToDisplay(job.id)}
              className="job-btn active-btn"
            >
              {job.company}
            </button>
          );
        }
        return (
          <button
            key={job.id}
            onClick={() => jobToDisplay(job.id)}
            className="job-btn"
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;

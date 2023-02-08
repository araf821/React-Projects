const Buttons = ({ jobs, jobToDisplay }) => {
  return (
    <div className="btn-container">
      {jobs.map((job) => {
        return <button onClick={() => jobToDisplay(job.id)} className="job-btn">{job.company}</button>;
      })}
    </div>
  );
};
export default Buttons;

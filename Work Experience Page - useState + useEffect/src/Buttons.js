const Buttons = ({ jobs }) => {
  return (
    <div className="btn-container">
      {jobs.map((job) => {
        const { company } = job;
        return <button className="job-btn">{company}</button>;
      })}
    </div>
  );
};
export default Buttons;

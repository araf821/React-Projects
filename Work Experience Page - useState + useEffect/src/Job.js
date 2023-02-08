import { FaAngleDoubleRight } from "react-icons/fa";

const Job = ({ data, jobToDisplay }) => {
  return (
    <>
      {data.map((job) => {
        if (jobToDisplay === job.id) {
          const { title, dates, duties, company } = job;
          return (
            <article key={job.id} className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>

              {duties.map((duty, index) => {
                return (
                  <section key={index} className="job-desc">
                    <span className="job-icon">
                      <FaAngleDoubleRight />
                    </span>
                    <p>{duty}</p>
                  </section>
                );
              })}
            </article>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
export default Job;

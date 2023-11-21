import Dots from "./Dots";

function Experience() {
  return (
    <div className="Experience">
      <div className="reveal">
        <h1 id="experience-header">Experience</h1>
      </div>
      <div id="full-experience-container">
        <div id="experience-graph-container">
          <div id="experience-graph">
            <div id="graph-dots">
              <div className="reveal gc graph-circle-current"></div>
              <Dots />
              <div className="reveal gc graph-circle"></div>
              <Dots />
              <div className="reveal gc graph-circle"></div>
            </div>
          </div>
          <div id="experience-info">
            <div className="reveal" id="info">
              <h2>Daily Printing</h2>
              <p>2021 - Current</p>
              <p>HTML, CSS, JavaScript, Python</p>
            </div>
            <br />
            <br />
            <div className="reveal" id="info">
              <h2>Online Tutoring</h2>
              <p>2019 - 2021</p>
              <p>HTML, CSS, JavaScript</p>
            </div>
            <br />
            <br />
            <div className="reveal" id="info">
              <h2>Anoka Technical College</h2>
              <p>2019 - 2021</p>
              <p>HTML, CSS, JavaScript, Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

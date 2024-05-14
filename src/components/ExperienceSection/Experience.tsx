import Dots from "./Dots";

function Experience() {
  return (
    <div className="Experience">
      <div className="reveal experience-header-container">
        <h1 id="experience-header">Work Experience</h1>
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
              <Dots />
              <div className="reveal gc graph-circle"></div>
              <Dots />
              <div className="reveal gc graph-circle"></div>
            </div>
          </div>
          <div className="experience-info">
          <div className="info reveal">
              <h2>Midwest Veterinary Supply Company</h2>
              <p>Junior Web Developer</p>
              <p>2024 - Current</p>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
            <div className="info reveal">
              <h2>Daily Printing</h2>
              <p>Storefront Administrator & Variable Data Programmer</p>
              <p>2021 - Current</p>
              <p>HTML, CSS, JavaScript, Python</p>
            </div>
            <div className="info reveal">
              <h2>Online Tutoring</h2>
              <p>Tutor</p>
              <p>2019 - 2021</p>
              <p>HTML, CSS, JavaScript</p>
            </div>
            <div className="info reveal">
              <h2>Anoka Technical College</h2>
              <p>Student</p>
              <p>2019 - 2021</p>
              <p>HTML, CSS, JavaScript, Python</p>
            </div>
            <div className="info reveal">
              <h2>US Army</h2>
              <p>Specialist (25Q)</p>
              <p>2015 - 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

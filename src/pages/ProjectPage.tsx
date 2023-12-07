import { useLocation } from "react-router-dom";
import SkillBadge from "../components/ProjectSection/SkillBadge";
import Footer from "../components/Footer";

function ProjectPage() {
  window.scrollTo(0, 0);

  const location = useLocation();
  const data = location.state.data;
  let name = data.name;
  let languages = data.languages;
  let imgSrc = data.src;
  let projectdesc = data.projectdesc;
  let allLanguages = languages.map((x: any) => {
    return <SkillBadge text={x} />;
  });
  let wireframeurl = data.wireframeurl;
  let codeurl = data.codeurl;
  let siteurl = data.siteurl;

  let allUrls = [wireframeurl, codeurl, siteurl];

  let projectbutton = allUrls.map((url: any) => {
    let buttonlabel = "";

    if (url != undefined) {
      if (url.includes("github.io") === true) {
        buttonlabel = "View Site";
      } else if (url.includes("github.com")) {
        buttonlabel = "View Code";
      } else if (url.includes("figma")) {
        buttonlabel = "View Wireframe";
      } else {
        buttonlabel = "Button";
      }
      return (
        <a href={url} className="project-button" target="_blank">
          {buttonlabel}
        </a>
      );
    }
  });

  const goBack = () => {
    history.back();
  };

  return (
    <div className="ProjectPage">
      <div className="project-hero">
        <div className="project-hero-image">
          <img src={imgSrc} alt="" />
        </div>
        <div className="project-page-content">
          <h1>{name}</h1>
          <div className="skill-badge-container">
            <p>Languages used</p>
            <div className="skill-badge-languages">{allLanguages}</div>
          </div>
          <div className="project-description-container">
            <p>{projectdesc}</p>
          </div>
        </div>
      </div>
      <div className="project-buttons">
        {projectbutton}
        <a className="return-button" onClick={goBack}>Return To Projects</a>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;

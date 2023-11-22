import Project from "./Project";
//Images
import PortfolioThumbnail from "../../assets/Images/Project Thumbnails/Portfolio_Thumbnail.png";
import ComingSoon from "../../assets/Images/Project Thumbnails/Coming Soon_Thumbnail.png";

function ProjectSection() {
  return (
    <div className="ProjectSection">
      <h1 id="project-section-header">Projects</h1>
      <Project
        projectName={"Portfolio Website"}
        projectText={
          "This project is the website you are currently viewing, my Portfolio Website!\
           If you're interested in the inner workings of this website, please click the\
            button below."
        }
        languages={["HTML", "CSS", "JS", "React"]}
        projectDescription={"This project is the website you are currently viewing, my Portfolio Website!\
        If you're interested in the inner workings of this website, please click the\
         button below. This is an extended description that is located inside if the actual\
         page itself."}
        src={PortfolioThumbnail}
        alt={"Portfolio Website Thumbnail"}
      />
      <Project
      projectDescription={""}
        projectName={"Project Coming Soon"}
        languages={["HTML", "CSS", "JS", "React"]}
        projectText={"Project Coming Soon"}
        src={ComingSoon}
        alt={"Project Coming Soon"}
      />
      <Project
      projectDescription={""}
        projectName={"Project Coming Soon"}
        languages={["HTML", "CSS", "JS", "React"]}
        projectText={"Project Coming Soon"}
        src={ComingSoon}
        alt={"Project Coming Soon"}
      />
      <Project
      projectDescription={""}
        projectName={"Project Coming Soon"}
        languages={["HTML", "CSS", "JS", "React"]}
        projectText={"Project Coming Soon"}
        src={ComingSoon}
        alt={"Project Coming Soon"}
      />
    </div>
  );
}

export default ProjectSection;

import Project from "./Project";
//Images
import PortfolioThumbnail from "../../assets/Images/Project Thumbnails/Portfolio_Thumbnail.png";
import JillsPortfolio from '../../assets/Images/Project Thumbnails/Jill Johnson_Thumbnail.png';
import JoshDollar from '../../assets/Images/Project Thumbnails/JoshDollar_Thumbnail.png'
import ComingSoon from "../../assets/Images/Project Thumbnails/Coming Soon_Thumbnail.png";

function ProjectSection() {
  return (
    <div className="ProjectSection">
      <h1 id="project-section-header">Projects</h1>
      <Project
      projectDescription={"This website is a fictional photography portfolio website for a fake photographer named Jill Johnson. This website includes a contact  form, services page, and more. Check it out!"}
        projectName={"Jill Johnsons Portfolio"}
        languages={["HTML", "CSS", "TS", "REACT"]}
        projectText={"A fictional website of a photographer's portfolio website."}
        src={JillsPortfolio}
        alt={"Jill Johnsons Portfolio"}
        wireframeurl={"https://www.figma.com/file/g0AIZB8YDcAx1aDvLbLsUD/Jill-Johnson's-Portfolio?type=design&node-id=0%3A1&mode=design&t=7hicfErmzi2FbK7R-1"}
        siteurl={"https://joshuatsmith96.github.io/Jill-Johnsons-Portfolio/"}
        codeurl={"https://github.com/joshuatsmith96/Jill-Johnsons-Portfolio"}
      />
      <Project
      projectDescription={"This is my take on BitCoins website, but instead I've named it Josh Dollar (I bet you'll never guess why I named it that)!"}
        projectName={"Joshdollar"}
        languages={["HTML", "CSS", "TS", "REACT"]}
        projectText={"This is my take on BitCoins website, but instead I've named it Josh Dollar (I bet you'll never guess why I named it that)! "}
        src={JoshDollar}
        alt={"Josh Dollar"}
        wireframeurl={"https://www.figma.com/file/5x9l6jxuWAETBXSntJ9OeA/Joshdollar?type=design&node-id=0%3A1&mode=design&t=YmaNt3dfXWXI4oIe-1"}
        siteurl={"https://joshuatsmith96.github.io/JoshDollars/"}
        codeurl={"https://github.com/joshuatsmith96/JoshDollars"}
      />
      <Project
      projectDescription={""}
        projectName={"Project Coming Soon"}
        languages={["None"]}
        projectText={"Project Coming Soon"}
        src={ComingSoon}
        alt={"Project Coming Soon"}
      />
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
        wireframeurl={"https://www.figma.com/file/RLCgF49HXPyokTPcSnpjlG/Portfolio?type=design&mode=design&t=7hicfErmzi2FbK7R-1"}
        codeurl={"https://github.com/joshuatsmith96/Portfolio-Website-V3"}
      />
    </div>
  );
}

export default ProjectSection;

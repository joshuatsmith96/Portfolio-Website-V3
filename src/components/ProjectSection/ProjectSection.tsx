import Project from "./Project";
//Images
import PortfolioThumbnail from "../../assets/Images/Project Thumbnails/Portfolio_Thumbnail.png";
import JillsPortfolio from '../../assets/Images/Project Thumbnails/Jill Johnson_Thumbnail.png';
import JoshDollar from '../../assets/Images/Project Thumbnails/JoshDollar_Thumbnail.png';
import Biggies from '../../assets/Images/Project Thumbnails/Biggies Pizza.png'
import OldPortfolio1 from '../../assets/Images/Project Thumbnails/OldPortfolio1.png'
// import ComingSoon from "../../assets/Images/Project Thumbnails/Coming Soon_Thumbnail.png";
import RoofSmith from '../../assets/Images/Project Thumbnails/Roof_Smith_Thumbnail.png';

function ProjectSection() {
  return (
    <div className="ProjectSection">
      <h1 id="project-section-header">Projects</h1>
      <Project
      lastUpdate={"Last update: 1/22/2024"}
        projectName={"Portfolio Website"}
        projectText={
          "This project is the website you are currently viewing, my Portfolio Website!"
        }
        languages={["HTML", "CSS", "TS", "React.ts"]}
        projectDescription={"This project is the website you are currently viewing, my Portfolio Website!\
        If you're interested in the inner workings of this website, please check out the wireframe and code \
         buttons below. Otherwise, go back and view my other projects."}
        src={PortfolioThumbnail}
        alt={"Portfolio Website Thumbnail"}
        wireframeurl={"https://www.figma.com/file/RLCgF49HXPyokTPcSnpjlG/Portfolio?type=design&mode=design&t=7hicfErmzi2FbK7R-1"}
        codeurl={"https://github.com/joshuatsmith96/Portfolio-Website-V3"}
      />
      <Project
      lastUpdate={"Last update: 1/22/2024"}
      projectDescription={"Roof Smith is an informational website for a fictional roofing company. Currently still in development, but feel free to see where I am at with it right now by checking the wireframe and GitHub pages! This site is special in the sense that I have added custom animations using 0 animation frameworks."}
        projectName={"Roof Smith"}
        languages={["HTML", "CSS", "TS", "React.ts"]}
        projectText={"Roof Smith is an informational website for a fictional roofing company. This website is currently still in development, but viewable to the public."}
        src={RoofSmith}
        alt={"Roof Smith"}
        siteurl={"https://joshuatsmith96.github.io/Roof-Smith/"}
        wireframeurl={"https://www.figma.com/file/oGz3nxXJDSNjdvMZhJrFlc/Roof-Smith?type=design&node-id=0%3A1&mode=design&t=auzWTecXIlFm3hpc-1"}
      />
      <Project
      lastUpdate={"Last update: 12/28/2023"}
      projectDescription={"This website is a fictional photography portfolio website for a fake photographer named Jill Johnson. This website includes a contact  form, services page, and more. Check it out!"}
        projectName={"Jill Johnsons Portfolio"}
        languages={["HTML", "CSS", "TS", "React.ts"]}
        projectText={"A fictional website of a photographer's portfolio website."}
        src={JillsPortfolio}
        alt={"Jill Johnsons Portfolio"}
        wireframeurl={"https://www.figma.com/file/g0AIZB8YDcAx1aDvLbLsUD/Jill-Johnson's-Portfolio?type=design&node-id=0%3A1&mode=design&t=7hicfErmzi2FbK7R-1"}
        siteurl={"https://joshuatsmith96.github.io/Jill-Johnsons-Portfolio/"}
        codeurl={"https://github.com/joshuatsmith96/Jill-Johnsons-Portfolio"}
      />
      <Project
      lastUpdate={"Last update: 12/28/2023"}
      projectDescription={"This is my take on BitCoins website, but instead I've named it Josh Dollar (I bet you'll never guess why I named it that)!"}
        projectName={"Joshdollar"}
        languages={["HTML", "CSS", "TS", "React.ts"]}
        projectText={"This is my take on BitCoins website, but instead I've named it Josh Dollar (I bet you'll never guess why I named it that)! "}
        src={JoshDollar}
        alt={"Josh Dollar"}
        wireframeurl={"https://www.figma.com/file/5x9l6jxuWAETBXSntJ9OeA/Joshdollar?type=design&node-id=0%3A1&mode=design&t=YmaNt3dfXWXI4oIe-1"}
        siteurl={"https://joshuatsmith96.github.io/JoshDollars/"}
        codeurl={"https://github.com/joshuatsmith96/JoshDollars"}
      />
      <Project
      lastUpdate={"Last update: 12/16/2023"}
      projectDescription={"This website was my take on a restaurant that serves pizza, burgers, and more! A simple design that, like all of my other projects, demonstrates my ability to follow a design."}
        projectName={"Biggies Pizza"}
        languages={["HTML", "CSS", "TS", "React.ts"]}
        projectText={"This website was my take on a restaurant that serves pizza, burgers, and more!"}
        src={Biggies}
        alt={"Biggies Pizza"}
        wireframeurl={"https://www.figma.com/file/YjuHmdXjszFXwRwyGeCEsB/Biggies-Pizza?type=design&node-id=44%3A759&mode=design&t=elcRp4vZAtbNxbTP-1"}
        siteurl={"https://joshuatsmith96.github.io/Biggies-Pizza/"}
        codeurl={"https://github.com/joshuatsmith96/Biggies-Pizza"}
      />
      <Project
      lastUpdate={"Last update: 8/12/2023"}
      projectDescription={"View my old portfolio website with some (outdated) projects of mine."}
        projectName={"Joshuas Portfolio 2022 - 2023"}
        languages={["HTML", "CSS", "JS", "React.js"]}
        projectText={"My old portfolio website from mid 2022."}
        src={OldPortfolio1}
        alt={"Old Portfolio"}
        siteurl={"https://joshuatsmith96.github.io/Portfolio-Website-V2/"}
        codeurl={"https://github.com/joshuatsmith96/Portfolio-Website-V2"}
      />
    </div>
  );
}

export default ProjectSection;

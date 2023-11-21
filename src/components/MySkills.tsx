import SkillTile from "./SkillTile";

//Import Skills
import html from "../assets/Images/html.png";
import css from "../assets/Images/css.png";
import javascript from "../assets/Images/javascript.png";
import python from "../assets/Images/Python.png";
import react from "../assets/Images/react logo.png";
import github from "../assets/Images/GitHub.png";
import photoshop from "../assets/Images/Photoshop.png";
import illustrator from "../assets/Images/Illustrator.png";
import indesign from "../assets/Images/InDesign.png";


function MySkills() {
  return (
    <div className="MySkills">
      <section>
        <div className="reveal aboutMe">
          <h1>My Skills</h1>
          <div className="Skills">
            <SkillTile src={html} alt={"html"} />
            <SkillTile src={css} alt={"css"} />
            <SkillTile src={javascript} alt={"javascript"} />
            <SkillTile src={python} alt={"python"} />
            <SkillTile src={react} alt={"react"} />
            <SkillTile src={github} alt={"git hub"} />
            <SkillTile src={photoshop} alt={"Photoshop"} />
            <SkillTile src={illustrator} alt={"illustrator"} />
            <SkillTile src={indesign} alt={"indesign"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MySkills;

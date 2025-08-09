import style from "./Skills.module.css"
import WinSkillsBox from "../../components/WinSKillsBox/WinSkillsBox";
import skillsData from "../../Data/skillsData";

function Skills(){
    return(<>
    <div id="skills" className={style.skillscontainer}>
        <h1 className="SectionTitleMain">What <span>I Know</span></h1>
        <WinSkillsBox
          title={"Key Skills & Tools"}
          skills={skillsData}
        />
    </div>
    </>);
}


export default Skills;
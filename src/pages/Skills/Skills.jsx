import style from "./Skills.module.css"
import WinSkillsBox from "../../components/WinSKillsBox/WinSkillsBox";
import skillsData from "../../Data/skillsData";
import Animate from "../../components/Animate";

function Skills(){
    return(<>
    <div id="skills" className={style.skillscontainer}>
      <Animate mode="words">
        <header className="SectionTitleMain">What <span>I Know</span></header>
      </Animate>
        <WinSkillsBox
          title={"Key Skills & Tools"}
          skills={skillsData}
        />
    </div>
    </>);
}


export default Skills;
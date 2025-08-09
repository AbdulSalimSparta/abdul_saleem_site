import style from "./ProjectCard.module.css";
import List from "../List/List";
import Animate from "../Animate";

function ProjectCard(props) {
  return (
    <>
      <div className={style.ProjectItem} onClick={props.onClick}>
        <div className={style.projectSno}>
          <h3>{props.sno}</h3>
        </div>
        <div className={style.projectTitle}>
          <Animate mode="words">
          <h1>{props.title}</h1>
          </Animate>
        </div>
        <div className={style.projectTech}>
          <ul>
            {props.tech.map((item, index) => {
              return <List key={index} value={item} />;
            })}
          </ul>
        </div>
        <div className={style.projectImg}>
          {[...Array(6)].map((_, index) => (
            <img key={index} src={props.image} alt={`Project ${props.title}`} />
          ))}
        </div>
        <div className={style.projectTimeline}>
          <h3>{props.timeline}</h3>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;

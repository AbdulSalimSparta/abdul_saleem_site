import style from "./ProjectCard.module.css";
import List from "../List/List";

function ProjectCard(props) {
  return (
    <>
      <div className={style.ProjectItem} onClick={props.onClick}>
        <div className={style.projectSno}>
          <h6>{props.sno}</h6>
        </div>
        <div className={style.projectTitle}>
          <h1>{props.title}</h1>
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
          <h1>{props.timeline}</h1>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;

import style from "./IndivProjects.module.css";
import projects from "../../Data/projects";
import FlipButton from "../../components/FlipButton/FlipButton";
import AnimatedList from "../../components/AnimatedList/AnimatedList";
import { useParams } from "react-router-dom";
import TitleBox from "../../components/TitleBox/TitleBox";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function IndivProjects() {
  const { id } = useParams();
  const project = projects[parseInt(id, 10) - 1];
  const nextProject = projects[parseInt(id, 10) % projects.length];

  if (!project) {
    return <div className={style.Notfound}>Project not found</div>;
  }

  const handleCardClick = (id) => {
    window.location.href = `/projects/${id}`;
  };

  return (
    <>
      <section id="projecthero">
        <div className={style.projhero}>
          <div className={style.herocentercontent}>
            <h5 className={style.projindi}>Project Name</h5>
            <h1 className={style.projectname}>{project.title}</h1>
          </div>
        </div>

        <div className={style.projectbImg}>
          <img
            src={project.image}
            alt={`Project ${project.title}`}
          />
        </div>

        <div className={style.projectDetailsBox}>
          <div className={style.proDescription}>
            <TitleBox title="Project Description" />
          </div>
          <div className={style.proDescriptionText}>
            <p>
              {project.description}
            </p>
          </div>

          <div className={style.projecttimeline}>
            <TitleBox title="Project Timeline" />
          </div>
          <div className={style.projecttimelineText}>
            <p>{project.timeline}</p>
          </div>

          <div className={style.projectTechtitle}>
            <TitleBox title="Technologies Used" />
          </div>

          <div className={style.projectTechver}>
            <ul>
              {project.tech.map((item, index) => (
                <AnimatedList key={index} value={item} />
              ))}
            </ul>
          </div>
          <div className={style.projectLinks}>
            <FlipButton label="Visit Website" />
          </div>
        </div>

        <div className={style.nextProject}>
          <h1 className="SectionTitleMain">
            Up <span>Next</span>
          </h1>
          <ProjectCard
            className={style.projectCard}
            key={nextProject.id}
            sno={nextProject.sno}
            title={nextProject.title}
            timeline={nextProject.timeline}
            tech={nextProject.tech}
            image={nextProject.image}
            onClick={() => handleCardClick(nextProject.id)}
          />
        </div>
      </section>
    </>
  );
}

export default IndivProjects;

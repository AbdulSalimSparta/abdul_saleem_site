import style from "./Projects.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../Data/projects";
function Projects() {

  const handleCardClick = (id) => {
    window.location.href = `/projects/${id}`;
  };

  return (
    <section id="projects" >
      <div className={style.container}>
      <h1 className="SectionTitleMain">
        My <span>Projects</span>
      </h1>
      <div className={style.projectBox}>
        {projects.map((project) => {
          return (
            <ProjectCard
              className={style.projectCard}
              key={project.id}
              sno={project.sno}
              title={project.title}
              timeline={project.timeline}
              tech={project.tech}
              image={project.image}
              onClick={() => handleCardClick(project.id)}
            />
          );
        })}
      </div>
      </div>
    </section>
  );
}

export default Projects;

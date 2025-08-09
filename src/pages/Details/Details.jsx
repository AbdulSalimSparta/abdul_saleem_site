import { courses, awards, achievements, internships } from "../../Data/aboutMe";
import style from "./Details.module.css";
import AnimatedList from "../../components/AnimatedList/AnimatedList";
import TitleBox from "../../components/TitleBox/TitleBox";
import { profileData } from "../../Data/aboutMe";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Details() {

useGSAP(() => {
  const contentCol = document.querySelector(`.${style.contentCol}`);
  const imageCol = document.querySelector("#salimimages");

  if (!contentCol || !imageCol) return;

  // How slow relative to content scroll (0.2 = 20% speed)
  const speedFactor = 0.2;

  gsap.fromTo(
    imageCol,
    { y: 0 },
    {
      y: () => -(contentCol.scrollHeight - imageCol.offsetHeight) * speedFactor,
      ease: "none",
      scrollTrigger: {
        trigger: contentCol,
        start: "top top",      
        end: "bottom bottom", 
        scrub: true,
        pin: imageCol,         
        pinSpacing: false,
        invalidateOnRefresh: true
      }
    }
  );
}, []);






  return (
    <section className={style.DetailSection}>
      <h1 className={style.name}>Abdul Saleem</h1>

      <div className={style.mainContent}>
        <div id="salimimages" className={style.imageCol}></div>
        <div className={style.contentCol}>
          <p>
            Hi, I’m <strong>{profileData.name}</strong>, a {profileData.age}
            -year-old {profileData.status} from{" "}
            <strong>{profileData.education.college.name}</strong>.
          </p>

          <p>{profileData.summary}</p>

          <h3>Education</h3>
          <div className={style.verticalTimeline}>
            <div className={style.timelineItem}>
              <span className={style.circle}></span>
              <p>
                <strong>College:</strong> {profileData.education.college.name}
              </p>
              <p>{profileData.education.college.degree}</p>
              <p>
                {"Batch : "}
                {profileData.education.college.year_of_passing}
              </p>
              <p>
                {"CGPA : "}
                {profileData.education.college.cgpa}
              </p>
            </div>

            <div className={style.timelineItem}>
              <span className={style.circle}></span>
              <p>
                <strong>School:</strong> {profileData.education.school.name}
              </p>
              <p>
                10th: {profileData.education.school.marks["10th_percentage"]} |
                12th: {profileData.education.school.marks["12th_percentage"]}
              </p>
            </div>
          </div>


          <h3>Internships</h3>
          <div className={style.verticalTimeline}>
            {profileData.internships.map((internship, index) => (
              <div key={index} className={style.timelineItem}>
                <span className={style.circle}></span>
                <p>
                  <strong>{internship.role}</strong>
                </p>
                <p>{internship.company}</p>
                <p><u>Duration :</u>{internship.duration}</p>
                <p><u>Project:</u> {internship.project}</p>
                <p><u>Tech Stack:</u> {internship.tech_stack.join(", ")}</p>
              </div>
            ))}
          </div>


          <h3>Work / Freelance Experience</h3>
          <div className={style.verticalTimeline}>
            {profileData.freelance_experience.map((exp, index) => (
              <div key={index} className={style.timelineItem}>
                <span className={style.circle}></span>
                <p>
                  <strong>{exp.company}</strong> - {exp.role} ({exp.duration})
                </p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>

          <h3>Hobbies</h3>
          <ul>
            {profileData.hobbies.map((hobby, index) => (
              <AnimatedList key={index} value={hobby} />
            ))}
          </ul>
        </div>
      </div>

      <div className={style.detailssection}>
        <div className={style.courses}>
          <TitleBox title="Courses" />
          <ul>
            {courses.map((item, index) => (
              <AnimatedList
                key={index}
                value={item.title}
                date={item.platform}
                image={item.image}
              />
            ))}
          </ul>
        </div>
        <div className={style.awards}>
          <TitleBox title="Awards" />
          <ul>
            {awards.map((item, index) => (
              <AnimatedList
                key={index}
                value={item.title}
                date={item.date}
                image={item.image}
              />
            ))}
          </ul>
        </div>
        <div className={style.achivements}>
          <TitleBox title="Achievements" />
          <ul>
            {achievements.map((item, index) => (
              <AnimatedList
                key={index}
                value={item.title}
                date={item.date}
                image={item.image}
              />
            ))}
          </ul>
        </div>

        <div className={style.internships}>
          <TitleBox title="Internships" />
          <ul>
            {internships.map((item, index) => (
              <AnimatedList
                key={index}
                value={item.title}
                date={item.duration}
                image="https://media.licdn.com/dms/image/v2/D5622AQHXiysqOBwxvQ/feedshare-shrink_2048_1536/B56ZbKVVKlGoAs-/0/1747151312526?e=1756944000&v=beta&t=Z54Kyl12A675BHu2NLZIutyqsugw_AgkocYuHfAljNg"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Details;

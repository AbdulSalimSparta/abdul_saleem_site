import style from "./About.module.css";
import FlipButton from "../../components/FlipButton/FlipButton";
import Indicator from "../../components/Indicator/Indicator";
import Animate from "../../components/Animate";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    const tween = gsap.to("#salimimage img", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: "#salimimage",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="about" className={style.abt}>
      <Animate mode="words">
      <header className="SectionTitleMain">
        About <span>Me</span>
      </header>
      </Animate>

      <div className={style.abtmain}>
        {/* Left Details */}
        <div className={style.details}>
          <Indicator message="Seeking full-time roles" />
          <Animate>
            <h1 className={style.Role}>A Web Developer based in India</h1>
          </Animate>
        </div>

        {/* Parallax Image */}
        <div className={style.imgWrapper}>
          <div id="salimimage" className={style.myimg}>
            <img
              src={require("../../images/abdul_saleem.jpg")}
              alt="Abdul Saleem"
            />
          </div>
          <Animate mode="words">
            <h1 id="name" className={style.myname}>
              Abdul Saleem
            </h1>
          </Animate>
        </div>

        {/* Right Details */}
        <div className={style.details}>
          <div className={style.compactbtnbox}>
            <FlipButton
              label="Download CV"
              url={require("../../Data/saleemcv.pdf")}
            />
          </div>
          <Animate>
            <p id="name" className={style.abtdescription}>
              I’m Abdul Saleem T.A., a full-stack developer who transforms
              real-world ideas into clean, scalable web applications. I focus on
              building user-friendly, responsive interfaces backed by reliable
              backend systems — turning vision into working products.
            </p>
          </Animate>
        </div>
      </div>

      <div className={style.btnbox}>
        <FlipButton label="Want to know More about me ?" url={"Details"} />
      </div>
    </section>
  );
}

export default About;

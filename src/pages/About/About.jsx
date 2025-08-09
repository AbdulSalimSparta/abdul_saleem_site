
import style from "./About.module.css";
import FlipButton from "../../components/FlipButton/FlipButton";
import Indicator from "../../components/Indicator/Indicator";
import Animate from "../../components/Animate";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// this is image parallax effect gsap code
function About() {
  useGSAP(() => {
    gsap.to("#salimimage", {
      backgroundPosition: "center 10%",
      ease: "none",
      scrollTrigger: {
        trigger: "#salimimage",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
});
  }, []);

  return (
    <div id="about" className={style.abt}>
      <h1 className="SectionTitleMain">
        About <span>Me</span>
      </h1>

      <div className={style.abtmain}>
        <div className={style.details}>
          <Indicator message="Seeking full-time roles" />
          <Animate>
          <h1 className={style.Role}>A Web Developer based in India</h1>
          </Animate>
        </div>

        <div className={style.imgWrapper}>
          <div
            id="salimimage"
            className={style.myimg}
            // image is given in css
          />
          <Animate>
            <h1 id="name" className={style.myname}>
              Abdul Saleem
            </h1>
          </Animate>
        </div>

        <div className={style.details}>
          <div className={style.compactbtnbox}>
            <FlipButton
              label="Download CV"
              url={require("../../Data/saleemcv.pdf")}
            />
          </div>
          <Animate>
            <p id="name" className={style.abtdescription}>
              I’m Abdul Saleem T.A., a full‑stack developer who transforms
              real‑world ideas into clean, scalable web applications. I focus on
              building user‑friendly, responsive interfaces backed by reliable
              backend systems — turning vision into working products.
            </p>
          </Animate>
        </div>
      </div>
      <div className="btnbox">
        <FlipButton label="Who I am ?" url={"Details"}/>
      </div>
    </div>
  );
}

export default About;

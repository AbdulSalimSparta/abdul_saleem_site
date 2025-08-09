import React from "react";
import style from "./Home.module.css";
import FlipButton from "../../components/FlipButton/FlipButton";
import useDate from "../../components/useDate";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import Animate from "../../components/Animate";

function Home() {
  
  return (
    <section >
      <div className={style.home}>
        <div className={style.container}>
          <Animate>
          <p className={style.HeroTxt}>
            Hi, I'm Saleem,a
            <br />
            <span  className={style.creative}>
              creative
            </span>{" "}
            developer
          </p>
          
          <p className={style.HeroSub}>
            I bring value to web development projects by merging
            <br /> technical expertise with creativity and aesthetics.
          </p>
          </Animate>
          <FlipButton
            label="Let's Work Together"
            url="mailto:abdulsalim232004@gmail.com"
          />
        </div>

        <div className={style.ScrollBox}>
          <div className={style.datetimebox}>
            <p>
              {useDate().wish}
              {useDate().time} , {useDate().date}
            </p>
          </div>
          <div className={style.scrolltext}>SCROLL</div>
          <div className={style.socialbox}>
              <SocialMediaIcons />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Home;

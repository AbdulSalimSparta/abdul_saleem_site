import React from "react";
import style from "./Home.module.css";
import Header from "../../components/Header/Header";
import FlipButton from "../../components/FlipButton/FlipButton";
import useDate from "../../components/useDate";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import { useLocation, Link } from 'react-router-dom';
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
          </Animate>
          <p className={style.HeroSub}>
            I bring value to web development projects by merging
            <br /> technical expertise with creativity and aesthetics.
          </p>
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

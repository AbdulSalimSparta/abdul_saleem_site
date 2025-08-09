import { useRef, useEffect } from "react";
import style from "./FlipButton.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FlipButton(props) {
  const btnRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(
      btnRef.current,
      { scaleX: 0 },         
      {
        scaleX: 1,
        duration: 0.6,
        ease: "power3.out",
        transformOrigin: "center"
      }
    )
    .fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power1.out" },
    );
  }, []);

  return (
    <a
      ref={btnRef}
      href={props.url}
      className={`${style.hiremebtn} ${style.flipbtn}`}
      aria-label={props.label}
      data-button-text={props.label}
    >
      <span ref={textRef}>{props.label}</span>
    </a>
  );
}

export default FlipButton;

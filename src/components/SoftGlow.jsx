import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SoftGlow() {
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    gsap.to(leftRef.current, {
      y: -200, // move upward
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(rightRef.current, {
      y: 200, // move downward
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div ref={leftRef} className="circle left" />
      <div ref={rightRef} className="circle right" />
    </>
  );
}

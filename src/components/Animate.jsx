import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

function Animate({ 
  children, 
  animateOnScroll = true, 
  delay = 0, 
  mode = "lines" // "lines", "words", "chars", "words,chars"
}) {
  const containerRef = useRef(null);
  const splitRef = useRef([]);         
  const animationRef = useRef(null);   
  const targets = useRef([]);          

  useGSAP(() => {
    if (!containerRef.current) return;

    const createSplitAndAnimate = () => {
      // Cleanup old animation & SplitText
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      splitRef.current.forEach(split => split && split.revert());
      splitRef.current = [];
      targets.current = [];

      const elements = containerRef.current.hasAttribute("data-copy-wrapper")
        ? Array.from(containerRef.current.children)
        : [containerRef.current];

      elements.forEach((element) => {
        const split = new SplitText(element, {
          type: mode, // Dynamic mode
          // linesClass: "split-line",
          // wordsClass: "split-word",
          // charsClass: "split-char",
          mask: mode
        });

        splitRef.current.push(split);

        // Pick targets based on mode
        if (mode.includes("chars")) {
          targets.current.push(...split.chars);
        } else if (mode.includes("words")) {
          targets.current.push(...split.words);
        } else {
          targets.current.push(...split.lines);
        }
      });

      // Initial state
      gsap.set(targets.current, { y: "100%", opacity: 0 });

      const animationProps = {
        y: "0%",
        opacity: 1,
        duration: mode === "chars" || mode.includes("chars") ? 0.6 : 1,
        stagger: mode === "chars" || mode.includes("chars") ? 0.03 : 0.1,
        ease: "power4.out",
        delay,
      };

      if (animateOnScroll) {
        animationRef.current = gsap.to(targets.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });
      } else {
        animationRef.current = gsap.to(targets.current, animationProps);
      }
    };

    // Wait for fonts
    document.fonts.ready.then(() => {
      createSplitAndAnimate();
    });

    // Handle resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        createSplitAndAnimate();
      }, 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) animationRef.current.kill();
      splitRef.current.forEach(split => split && split.revert());
    };
  }, {
    scope: containerRef,
    dependencies: [animateOnScroll, delay, mode],
  });

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}

export default Animate;
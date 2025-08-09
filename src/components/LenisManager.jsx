import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

function LenisManager() {
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;
    window.lenis = lenis; // optional: control from console if needed

    const raf = (time) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };
    rafIdRef.current = requestAnimationFrame(raf);

    const handleResize = () => lenis.resize();
    window.addEventListener("resize", handleResize);

    // Pause RAF when tab is hidden
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafIdRef.current);
      } else {
        rafIdRef.current = requestAnimationFrame(raf);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      lenis.destroy();
      lenisRef.current = null;
      window.lenis = null;
    };
  }, []);

  return null;
}

export default LenisManager;

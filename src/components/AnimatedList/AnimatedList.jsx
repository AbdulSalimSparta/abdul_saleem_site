import { useRef, useEffect } from "react";
import style from "./AnimatedList.module.css";

function AnimatedList(props) {
  const listRef = useRef(null);
  const iconRef = useRef(null);

  const targetPos = useRef({ x: 0, y: 0 }); // mouse target position
  const currentPos = useRef({ x: 0, y: 0 }); // smoothed position

  useEffect(() => {
    let animationFrameId;

    const update = () => {
      // Lerp to smooth: adjust factor (e.g., 0.1 for slower, 0.2 for faster)
      currentPos.current.x +=
        (targetPos.current.x - currentPos.current.x) * 0.05;
      currentPos.current.y +=
        (targetPos.current.y - currentPos.current.y) * 0.05;

      if (iconRef.current) {
        iconRef.current.style.left = `${currentPos.current.x}px`;
        iconRef.current.style.top = `${currentPos.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e) => {
    const rect = listRef.current.getBoundingClientRect();

    const imageWidth = 360;
    const imageHeight = 200;

    const rawX = e.clientX - rect.left - imageWidth / 2;
    const rawY = e.clientY - rect.top - imageHeight / 2;

    const maxX = rect.width - imageWidth;
    const maxY = rect.height - imageHeight;

    // Clamp the target position so it stays inside list boundaries
    const mouseX = Math.max(0, Math.min(rawX, maxX));
    const mouseY = Math.max(0, Math.min(rawY, maxY));

    // First time: jump instantly to avoid sliding in from top-left
    if (currentPos.current.x === 0 && currentPos.current.y === 0) {
      currentPos.current = { x: mouseX, y: mouseY };
    }

    targetPos.current = { x: mouseX, y: mouseY };
  };

  return (
    <li ref={listRef} className={style.ListLine} onMouseMove={handleMouseMove}>
      <span className={style.value}>{props.value}</span>
      <span style={{ color: "grey" }}>{props.date}</span>
      {props.image && (
        <img
          ref={iconRef}
          className={style.icon}
          src={props.image}
          alt={props.value + "image"}
        />
      )}
    </li>
  );
}

export default AnimatedList;

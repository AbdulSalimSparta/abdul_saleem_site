import React, { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 10); 
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={styles.preloader}>
      <div className={styles.counter}>{progress}%</div>
    </div>
  );
}

export default Preloader;

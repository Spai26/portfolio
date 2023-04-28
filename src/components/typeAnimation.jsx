import { useEffect, useRef } from "react";
import Typed from "typed.js";
const TypeAnimation = ({ styles }) => {
  const element = useRef();

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Freelancer",
        "Web Developer Frontend",
        "Web Developer Backend",
      ], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <span className={styles} ref={element}></span>
    </>
  );
};

export default TypeAnimation;

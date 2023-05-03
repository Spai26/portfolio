import { useEffect, useState } from "react";
import { navigations } from "../utils/data";
import styles from "./Header.module.css";

const MenuItems = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActive = (value) => {
    setActiveLink(value);
  };
  return (
    <ul className={`${styles.nav_menu} ${scrolled ? "scrolled" : ""}`}>
      {navigations.map((items) => (
        <li key={items.id}>
          <a
            className={`${styles.nav_link} ${
              activeLink === items.href ? styles.active : ""
            }`}
            onClick={() => updateActive(items.href)}
            href={items.href}
          >
            {items.icon}
            <span>{items.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;

import { useEffect, useState } from "react";
import { navigations } from "../utils/data";
import styles from "./Header.module.css";

const MenuItems = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = sectionTop + section.offsetHeight / 3;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const id = section.getAttribute("id");
          setActiveLink(id);
        }
      });

      if (scrollPosition > 50) {
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
    <ul className={`${styles.nav_menu} ${scrolled ? "scrolled" : ""} `}>
      {navigations.map((items) => (
        <li key={items.id}>
          <a
            className={`${styles.nav_link} ${
              activeLink === items.href.substring(1) ? styles.active : ""
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

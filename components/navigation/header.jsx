import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import icon from "../assets/flat,128x128,075,t.jpg";
import MenuItems from "./itemsNav";

import { socials } from "../utils/data";

export default function Header({ blog }) {
  const [sideBarToogle, setSideBarToogle] = useState(false);
  /*  useEffect(() => {
    if (!blog) {
      activeSection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <Fragment>
      {/* nav movile */}
      <div className={styles.mov_header}>
        <div className={styles.c_flex}>
          <div className={styles.navbar}>
            <Link href="/">SergioAi</Link>
          </div>
          {/* toogle button */}
          <button
            className={`${styles.toogle_menu} ${sideBarToogle ? "open" : ""}`}
            onClick={() => setSideBarToogle(!sideBarToogle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* end nav movile */}

      {/* navbar */}
      <header
        className={`${styles.header_left} ${
          sideBarToogle ? `${styles.menu_open}` : ""
        }`}
      >
        <div className={styles.scroll_bar}>
          <div className={styles.hl_top}>
            <div className={styles.hl_logo}>
              <div className={styles.img}>
                <Image
                  src={icon}
                  alt="me icon"
                  unoptimized={true}
                  priority={true}
                />
              </div>
              <h5>SergioAi</h5>
            </div>
          </div>
          {blog ? "" : <MenuItems />}
        </div>

        <div className={styles.socials_icon}>
          {socials.map((social, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={social.url}
            >
              {social.svg}
            </a>
          ))}
        </div>
      </header>
    </Fragment>
  );
}
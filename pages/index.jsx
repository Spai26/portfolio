import Image from "next/image";
import RootLayout from "../src/components/layout/Layout";
import portada from "../src/components/assets/solo-leveling-fi-750x392.jpg";

import About from "./about";
import Porfolio from "./portfolio";
import Services from "./services";
import Contact from "./contact";
import styles from "../src/components/pagesStyles/Home.module.css";
import TypeAnimation from "@/src/components/typeAnimation";
import { life } from "@/src/components/utils/home";
export default function Home() {
  return (
    <RootLayout>
      <section id="home" className="pp-section pp-scrollable">
        <div className={styles.home_banner}>
          <div className="container">
            <div className={styles.content}>
              <div className={styles.a}>
                <div className={styles.type_box}>
                  <h6>Hello, I am</h6>
                  <h1>{life.name}</h1>
                  <p className={styles.lead}>
                    Soy un apasionado <TypeAnimation styles={styles.typed} />
                  </p>
                  <p className={styles.des}>{life.bio}</p>
                  <div className={styles.btn_bar}>
                    <a
                      className="btn"
                      href="/Sergio_Avalos_CV.pdf"
                      target="_blank"
                    >
                      Visualizar CV
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.b}>
                <div className={styles.hb_img}>
                  <Image src={portada} title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Porfolio />
      <Services />
      <Contact />
    </RootLayout>
  );
}

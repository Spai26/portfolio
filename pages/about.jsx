import style from "@/src/components/pagesStyles/About.module.css";
import { aboutme } from "@/src/components/utils/home";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiReact,
  SiPhp,
  SiMongodb,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
const About = () => {
  return (
    <section id="about" className="pp-section pp-scrollable section">
      <div className="container">
        <div className={style.content_data}>
          <div className={style.image_info}>
            <div className={style.earth}>
              <SiReact />
              <SiPhp />
              <FaHtml5 />
              <FaCss3Alt />
              <SiJavascript />
              <SiMongodb />
              <SiPostgresql />
              <SiMysql />
              <SiNextdotjs />
              <SiNodedotjs />
              <SiExpress />
            </div>
          </div>
          <div className={style.about_info}>
            <h3>{aboutme.title}</h3>
            <div className={style.about_text}>
              <h3>{aboutme.subtitle}</h3>
              <p>{aboutme.description}</p>
              <div className={style.btn_content}>
                <a className="btn" href="#portfolio">
                  Portfolio
                </a>
                <a className="btn" href="#contact">
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

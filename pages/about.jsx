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
import { experience } from "@/src/components/utils/home";
import Image from "next/image";

const About = () => {
  return (
    <section id="aboutme" className="pp-section pp-scrollable section">
      <div className="container">
        <div className={style.data}>
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
          <div className="separated"></div>
          <div className={style.exp_info}>
            <h3>{experience.title}</h3>
          </div>
          <div className={style.exp_box}>
            {experience.works?.map((work, index) => (
              <div key={index} className={style.box_content}>
                <div className={style.box_left}>
                  <Image src={work.icon} alt={work.title} />
                </div>
                <div className={style.box_rigth}>
                  <div className={style.rigth_detail}>
                    <h6>{work.cargo}</h6>
                    <p>{work.date}</p>
                    <div className={style.rigth_type}>{work.type}</div>
                    {work.description.map((d, index) => (
                      <p key={index}>{d.text}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

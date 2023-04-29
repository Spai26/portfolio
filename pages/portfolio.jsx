import style from "@/src/components/pagesStyles/Portfolio.module.css";
import { porftfolio } from "@/src/components/utils/home";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Portfolio = () => {
  return (
    <section id="portfolio" className="pp-section pp-scrollable ">
      <div className="container">
        <div className={style.data}>
          <div className={style.text}>
            <h3>{porftfolio.title}</h3>
          </div>
          {/* grid */}
          <div className={style.box}>
            {porftfolio.works.map((work, index) => (
              <div key={index} className={style.work}>
                <div className={style.work_det}>
                  <div>{work.icon}</div>
                  <div className={style.detail}>
                    <h5>{work.title}</h5>
                    <TolsList tols={work.tols} />
                    <p>{work.description}</p>
                    <div>
                      <a href={work.repo} target="_blank">
                        <FaGithub />
                      </a>
                      {work.page && (
                        <a href={work.page} target="_blank">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
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

export default Portfolio;

function TolsList({ tols }) {
  return (
    <div className={style.icons}>
      {tols.map((tol, index) => {
        return <span key={index}>{tol.icon}</span>;
      })}
    </div>
  );
}

import styles from "./Skills.module.css";
import programsNew from "../../images/newPrograms.png";
import ConstructionIcon from "@mui/icons-material/Construction";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
function Skills({ showNav }) {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  useEffect(() => {
    showNav(inView);
  }, [inView, showNav]);
  return (
    <section id="skills" className={styles.skills}>
      <div ref={ref} className={styles.skillsWrapper}>
        <div className={styles.skillsLeft}>
          <div className={styles.imgWrapper}>
            <img alt="" className={styles.techImg} src={programsNew}></img>
          </div>
        </div>
        <div className={styles.skillsRight}>
          <div className={styles.rightWrapper}>
            <div className={styles.header}>
              <h3 className={styles.skillsHeader}>MY SKILLS</h3>
              <ConstructionIcon
                className={styles.headerIcon}
              ></ConstructionIcon>
            </div>
            <p className={styles.desc}>
              During my learning process I learned the following:{" "}
              <span className={styles.list}>
                HTML, CSS, JAVASCRIPT, NODE.JS, MONGODB, REACT.JS AND NEXT.JS.
              </span>
              Everything I know I learned over courses on Udemy spending over a
              thousend hours listening, coding and practicing. Now I'm looking
              for new challenges and new opportunities to learn and develope my
              skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

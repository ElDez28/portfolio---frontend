import styles from "./Intro.module.css";

import { HashLink } from "react-router-hash-link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import ReorderIcon from "@mui/icons-material/Reorder";
import RateReviewIcon from "@mui/icons-material/RateReview";
import eldin from "../../images/eldin.png";

function Intro(props) {
  return (
    <>
      <div className={`${styles.navbar} `}>
        <div onClick={props.openBar} className={styles.listSideItem}>
          <ReorderIcon className={styles.sidebarIcon}></ReorderIcon>
        </div>

        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <HashLink
              to="#home"
              className={`${styles.link} ${
                props.skillVis
                  ? styles.skillLink
                  : props.reviewVis
                  ? styles.reviewLink
                  : ""
              }`}
            >
              <HomeOutlinedIcon className={styles.navIcon}></HomeOutlinedIcon>
            </HashLink>
          </li>
          <li className={styles.listItem}>
            <HashLink
              to={"#skills"}
              className={`${styles.link} ${
                props.skillVis
                  ? styles.skillLink
                  : props.reviewVis
                  ? styles.reviewLink
                  : ""
              }`}
            >
              <ConstructionOutlinedIcon
                className={styles.navIcon}
              ></ConstructionOutlinedIcon>
              My Skills
            </HashLink>
          </li>
          <li className={styles.listItem}>
            <HashLink
              to={"#projects"}
              className={`${styles.link} ${
                props.skillVis
                  ? styles.skillLink
                  : props.reviewVis
                  ? styles.reviewLink
                  : ""
              }`}
            >
              <BuildCircleOutlinedIcon
                className={styles.navIcon}
              ></BuildCircleOutlinedIcon>
              Projects
            </HashLink>
          </li>
          <li className={styles.listItem}>
            <HashLink
              to={"#feedback"}
              className={`${styles.link} ${
                props.skillVis
                  ? styles.skillLink
                  : props.reviewVis
                  ? styles.reviewLink
                  : ""
              }`}
            >
              <RateReviewIcon className={styles.navIcon}></RateReviewIcon>
              Feedback
            </HashLink>
          </li>
          <li className={styles.listItem}>
            <HashLink
              to={"#contact"}
              className={`${styles.link} ${
                props.skillVis
                  ? styles.skillLink
                  : props.reviewVis
                  ? styles.reviewLink
                  : ""
              }`}
            >
              <PhoneEnabledOutlinedIcon
                className={styles.navIcon}
              ></PhoneEnabledOutlinedIcon>
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
      <div id="home" className={styles.intro}>
        <div className={styles.iLeft}>
          <div className={styles.iLeftWrapper}>
            <h2 className={styles.iIntro}>Hello, My name is </h2>
            <h1 className={styles.iName}>Eldin</h1>
            <div className={styles.title}>
              <div className={styles.titleWrapper}>
                <div className={styles.titleItem}>Web Developer</div>
                <div className={styles.titleItem}>Designer</div>
                <div className={styles.titleItem}>Content Creator</div>
                <div className={styles.titleItem}>Coding Enthusiast</div>
              </div>
            </div>
            <div className={styles.iDesc}>
              I enjoy building functional web pages with both backend and
              frontend. Here you can see some of my projects, my skills and how
              to contact me so that we can build amazing projects together
            </div>
          </div>
        </div>
        <div className={styles.iRight}>
          {/* <div className="profileImgBackground"></div> */}
          <img alt="" src={eldin} className={styles.profilePic}></img>
        </div>
      </div>
    </>
  );
}

export default Intro;

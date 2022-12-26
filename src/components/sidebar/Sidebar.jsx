import styles from "./Sidebar.module.css";
import { HashLink } from "react-router-hash-link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import RateReviewIcon from "@mui/icons-material/RateReview";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AnimatePresence, motion } from "framer-motion";
function Sidebar(props) {
  return (
    <AnimatePresence exitBeforeEnter>
      {props.isOpen && (
        <motion.div
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          exit={{ x: "-100vh", opacity: 0 }}
          transition={{ duration: 0.3, type: "tween" }}
          className={styles.sidebar}
        >
          <div className={styles.sidebarWrapper}>
            <ul className={styles.navList}>
              <li className={styles.listItem}>
                <HashLink
                  onClick={() => props.closeBar()}
                  to="#home"
                  className={styles.link}
                >
                  <HomeOutlinedIcon
                    className={styles.navIcon}
                  ></HomeOutlinedIcon>
                </HashLink>
              </li>
              <li className={styles.listItem}>
                <HashLink
                  onClick={() => props.closeBar()}
                  to={"#skills"}
                  className={styles.link}
                >
                  <ConstructionOutlinedIcon
                    className={styles.navIcon}
                  ></ConstructionOutlinedIcon>
                  My Skills
                </HashLink>
              </li>

              <li className={styles.listItem}>
                <HashLink
                  onClick={() => props.closeBar()}
                  to={"#projects"}
                  className={styles.link}
                >
                  <BuildCircleOutlinedIcon
                    className={styles.navIcon}
                  ></BuildCircleOutlinedIcon>
                  My Projects
                </HashLink>
              </li>
              <li className={styles.listItem}>
                <HashLink
                  onClick={() => props.closeBar()}
                  to={"#feedback"}
                  className={styles.link}
                >
                  <RateReviewIcon className={styles.navIcon}></RateReviewIcon>
                  Feedback
                </HashLink>
              </li>
              <li className={styles.listItem}>
                <HashLink
                  onClick={() => props.closeBar()}
                  to={"#contact"}
                  className={styles.link}
                >
                  <PhoneEnabledOutlinedIcon
                    className={styles.navIcon}
                  ></PhoneEnabledOutlinedIcon>
                  Contact
                </HashLink>
              </li>
            </ul>
            <div onClick={props.closeBar}>
              <HighlightOffIcon className={styles.closeIcon}></HighlightOffIcon>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;

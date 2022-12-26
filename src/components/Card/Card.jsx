import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img alt="project" className={styles.projectImg} src={props.url}></img>
      <div className={styles.desc}>{props.desc}</div>
      <div className={styles.buttons}>
        <a
          className={`${styles.btn} ${styles.btnDownload}`}
          href={props.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Download code
        </a>
        <a
          className={`${styles.btn} ${styles.btnVisit}`}
          href={props.pageLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Visit Page
        </a>
      </div>
    </div>
  );
}

export default Card;

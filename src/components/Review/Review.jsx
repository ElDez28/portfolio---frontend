import styles from "./Review.module.css";

function Review(props) {
  return (
    <div className={styles.review}>
      <div className={styles.reviewText}>{props.text}</div>
      <div className={styles.author}>🖊️ {props.user}</div>
    </div>
  );
}

export default Review;

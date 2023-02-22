import Review from "../Review/Review";
import styles from "./Feedback.module.css";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import reviewSchema from "../../schema/schema";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useInView } from "react-intersection-observer";

function Feedback({ showNav }) {
  const [error, setError] = useState("");
  const [newReview, setNewReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const initialValues = {
    user: "",
    review: "",
  };
  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  useEffect(() => {
    showNav(inView);
  }, [inView, showNav]);
  useEffect(() => {
    (async () => {
      try {
        const data = await axios({
          method: "get",
          url: process.env.REACT_APP_BACKEND_URL,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        });

        setReviews((prev) => data.data.data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch reviews");
      }
    })();
  }, [newReview]);

  const sendData = async (values, actions) => {
    const review = {
      user: values.user,
      review: values.review,
    };
    try {
      const data = await axios({
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL,
        data: review,
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setNewReview(data.data.data._id);
      formik.resetForm();
    } catch (err) {
      console.log(err);
      setError("Failed to post review");
    }
  };
  const formik = useFormik({
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: true,
    initialValues,
    validationSchema: reviewSchema,
    onSubmit: sendData,
  });

  return (
    <section ref={ref} id="feedback" className={styles.feedback}>
      <div>
        <h3 className={styles.header}>Here you can write your opinion</h3>
      </div>
      <div className={styles.feedbackWrapper}>
        <div className={styles.left}>
          <input
            id="user"
            name="user"
            value={formik.values.user}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              formik.errors.user && formik.touched.user && styles.error
            } ${styles.username}`}
            type="text"
            placeholder={
              formik.errors.user && formik.touched.user
                ? "You must enter your name"
                : "Your name"
            }
          ></input>
          <textarea
            id="review"
            name="review"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.review}
            placeholder={
              formik.errors.review && formik.touched.review
                ? "Your review must have text"
                : "Write your review here"
            }
            className={`${
              formik.errors.review && formik.touched.review && styles.error
            } ${styles.review}`}
          ></textarea>
          <button
            type="button"
            onClick={formik.handleSubmit}
            className={styles.btn}
          >
            {formik.isSubmitting ? (
              <LoadingSpinner className="lds-dual-ring"></LoadingSpinner>
            ) : (
              `Submit`
            )}
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.allReviews}>
            {reviews.length === 0 && (
              <div className={styles.noReviews}>
                <h3>Be first to write a review 😊</h3>
              </div>
            )}
            {reviews.length > 0 &&
              reviews.map((review, i) => {
                return (
                  <Review
                    key={i}
                    text={review.review}
                    user={review.user}
                  ></Review>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;

import * as yup from "yup";

const reviewSchema = yup.object().shape({
  user: yup.string().required("This field is required!"),
  review: yup.string().required("This field is required!"),
});

export default reviewSchema;

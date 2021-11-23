import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadOneBusiness } from "../../store/business";
import { updateReview } from "../../store/reviews";
import { deleteReview } from "../../store/reviews";
import "./ReviewCard.css";
import * as yup from "yup";
import { useFormik } from "formik";

function ReviewCard({ review }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  // const [editReview, setEditReview] = useState(review.review);
  // const [editRating, setEditRating] = useState(review.rating);
  // const [errors, setErrors] = useState([]);

  const currentUserId = useSelector((state) => state.session.user.id);
  const businessId = useSelector((state) => state.business.id);

  // const handleEdit = (e) => {
  //     e.preventDefault();
  //     const err = [];

  //     if (editReview.length < 2) {
  //         const error = "Your review must be at least 2 characters long";
  //         err.push(error);
  //     }
  //     if (errors.length === 0) {
  //         const editedReview = {
  //             review: editReview,
  //             rating: editRating,
  //         };
  //         dispatch(updateReview(review.id, editedReview));
  //         setEdit(false);
  //     }
  //     setErrors(err);
  // };

  const formik = useFormik({
    initialValues: {
      review: "",
      rating: "",
      business_id: businessId,
    },
    validationSchema: yup.object({
      review: yup
        .string()
        .min(10)
        .max(2000)
        .required("Review must be between 10-2000 characters!"),
      rating: yup
        .number()
        .min(1)
        .max(5)
        .required("Street must be between 1-5!"),
    }),
    onSubmit: async (values) => {
      dispatch(updateReview(review.id, values));
      setEdit(false);
    },
  });

  const handleDelete = () => {
    dispatch(deleteReview(review.id));
  };

  if (edit) {
    return (
      <div className="editCard">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <textarea
              name="review"
              value={formik.values.review}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="Edit_review_Input"
              placeholder="Edit your Review!"
            />
            {formik.touched.review && formik.errors.review ? (
            <div className="errorText">{formik.errors.review}</div>
            ) : null}
          </div>
          <div>
            <select
              name="rating"
              value={formik.values.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rating_select"
            >
              <option value="" disabled>
                --Rating--
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {formik.touched.rating && formik.errors.rating ? (
            <div className="errorText">{formik.errors.rating}</div>
            ) : null}
          </div>
          <div>
            <button className="update_button" type="submit">Update</button>
            <button className="update_button" onClick={() => setEdit(false)}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="card_container">
      <div className="review">{review.review}</div>
      <div>{review.rating}</div>
      {review.user_id === currentUserId ? (
        <div className="buttonWrapper">
          <button className="reviewButtons" onClick={() => setEdit(true)}>
            Edit
          </button>
          <button className="reviewButtons" onClick={handleDelete}>
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ReviewCard;

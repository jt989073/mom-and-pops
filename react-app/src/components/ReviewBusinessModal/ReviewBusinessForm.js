
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createReview } from "../../store/reviews";
import "./ReviewBusinessForm.css"
import { loadBusinesses } from "../../store/businesses";
import { loadOneBusiness } from "../../store/business";
import * as yup from "yup";
import {useFormik} from "formik"

function ReviewBusinessForm({SetBusinessModal}) {
    const dispatch = useDispatch();
    const businessId = useSelector(state => state.business.id)
    const userId = useSelector(state => state.session.user.id)

    const formik = useFormik({
        initialValues: {
          review: "",
          rating: "",
          user_id: userId,
          business_id: businessId
        },
        validationSchema: yup.object({
            review: yup.string().min(10).max(2000).required("Review must be between 10-2000 characters!"),
            rating: yup.number().min(1).max(5).required("Street must be between 1-5!"),
        }),
        onSubmit: async (values) => {
            dispatch(createReview(values)).then(()=>dispatch(loadOneBusiness(businessId)))
            SetBusinessModal(false)
        }
    })
    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //     if (review) {
    //         const new_review = {
    //             review: review,
    //             rating: rating,
    //             user_id: userId,
    //             business_id: businessId,
    //         };
    //         dispatch(createReview(new_review)).then(() =>
    //             dispatch(loadOneBusiness(businessId))
    //         )
    //     }
    //     SetBusinessModal(false)
    // };

    return (
      <div className="reviewContainer">
        <div className="reviewFormHeader">
          <h1 className="reviewModalTitle">Review</h1>
        </div>
        <form className="reviewForm" onSubmit={formik.handleSubmit}>
          <div className="formSection">
            <label className="reviewLabel">Review</label>
            <textarea
              name="review"
              value={formik.values.review}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Leave A review for this business"
              className="reviewText"
              rows={4}
              />
            {formik.touched.review && formik.errors.review ? (
            <div className="errorText">{formik.errors.review}</div>
            ) : null}
          </div>
          <div>
            <div>
              <label className="reviewLabelTwo">Rating</label>
              <select
                className="reviewSelect"
                name="rating"
                value={formik.values.street}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                <option value="">--Rating--</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              {formik.touched.rating && formik.errors.rating ? (
              <div className="errorText">{formik.errors.rating}</div>
              ) : null}

            </div>
          </div>
            <button
                type="submit"
              className="reviewButton"
              >
              Review
            </button>
        </form>
        </div>
    );
}
export default ReviewBusinessForm;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createReview } from "../../store/reviews";
import styles from "./ReviewBusinessForm.module.css"
import { loadBusinesses } from "../../store/businesses";
import { loadOneBusiness } from "../../store/business";

function ReviewBusinessForm({SetBusinessModal}) {
    const dispatch = useDispatch();

    const [errors, setErrors] = useState([]);
    const [review, setReview] = useState("");
    const [rating, setRating] = useState();

    const businessId = useSelector(state => state.business.id)
    const userId = useSelector(state => state.session.user.id)



    const onSubmit = async (e) => {
        e.preventDefault();

        if (review) {
            const new_review = {
                review: review,
                rating: rating,
                user_id: userId,
                business_id: businessId,
            };
            dispatch(createReview(new_review)).then(() =>
                dispatch(loadOneBusiness(businessId))
            )
        }
        SetBusinessModal(false)
    };

    return (
      <div className={styles.reviewContainer}>
        <div className={styles.reviewFormHeader}>
          <h1 className={styles.reviewModalTitle}>Review</h1>
        </div>
        <form className={styles.reviewForm} onSubmit={onSubmit}>
          <ul>
            {errors.length > 0
              ? errors.map((valError) => <li key={valError}>{valError}</li>)
              : null}
          </ul>
          <div className={styles.formSection}>
            <label className={styles.reviewLabel}>Review</label>
            <textarea
              name="review"
              required
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Leave A review for this business"
              className={styles.reviewText}
              rows={4}
            />
          </div>
          <div>
            <div>
              <label className={styles.reviewLabelTwo}>Rating</label>
              <select
                className={styles.reviewSelect}
                name="rating"
                value={rating}
                required
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">--Rating--</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
          </div>
          <div className={styles.reviewButtonWrap}>
            <button
              disabled={errors.length > 0}
              className={styles.reviewButton}
            >
              Review
            </button>
          </div>
        </form>
      </div>
    );
}
export default ReviewBusinessForm;

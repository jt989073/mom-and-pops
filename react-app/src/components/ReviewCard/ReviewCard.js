import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/reviews";
import styles from './ReviewCard.module.css'

function ReviewCard({review}) {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false);
    const [editReview, setEditReview] = useState(review.review);
    const [editRating, setEditRating] = useState(review.rating);
    const [errors, setErrors] = useState([]);

    const currentUserId = useSelector(state => state.session.user.id)

    const handleEdit = (e) => {
        e.preventDefault();
        const err = [];

        if (editReview.length < 2) {
            const error = "Your review must be at least 2 characters long";
            err.push(error);
        }
        if (errors.length === 0) {
            const editedReview = {
                review: editReview,
                rating: editRating,
            };
            dispatch(updateReview(review.id, editedReview));
            setEdit(false);
        }
        setErrors(err);
    };

    const deleteReview = () => {
        dispatch(deleteReview(review.id))
    }

    if (edit){
        return (
            <div className={styles.editCard}>
                <form onSubmit={handleEdit}>
                    <ul>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    <div>
                        <label>Review</label>
                        <textarea
                            name="review"
                            value={editReview}
                            onChange={(e) => setEditReview(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Rating</label>
                        <select
                            name="rating"
                            value={editRating}
                            onChange={(e) => setEditRating(e.target.value)}>
                            <option value="" disabled>
                                --Rating--
                            </option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        );
    }


    return (
        <div className={styles.card_container}>
            <div>{review.review}</div>
            <div>{review.rating}</div>
            {review.user_id === currentUserId ? (
                <div className={styles.buttonWrapper}>
                    <button
                        className={styles.reviewButtons}
                        onClick={() => setEdit(true)}>
                        Edit
                    </button>
                    <button
                        className={styles.reviewButtons}
                        onClick={deleteReview}>
                        Delete
                    </button>
                </div>
            ): null}
        </div>
    )
}

export default ReviewCard

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './ReviewCard.module.css'

function ReviewCard({review}) {



    return (
        <div className={styles.card_container}>
            <div>{review.review}</div>
            <div>{review.rating}</div>
        </div>
    )
}

export default ReviewCard

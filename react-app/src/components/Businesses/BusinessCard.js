import React from "react";
import { Link } from "react-router-dom";
import styles from "./BusinessCard.module.css";

const BusinessCard = ({ business }) => {
    return (
        <div className={styles.businessContainer}>
            <div className={styles.name}>
                <Link
                    className={styles.link}
                    to={`/businesses/${business.id}`}>
                    {business.name}
                </Link>
            </div>
            <div className={styles.street}>{business.street}</div>
            <div className={styles.imgContainer}>
                <Link to={`/businesses/${business.id}`}>
                    <img
                        className={styles.img}
                        src={business.image}
                        alt="business image"
                    />
                </Link>
            </div>
        </div>
    );
};

export default BusinessCard;

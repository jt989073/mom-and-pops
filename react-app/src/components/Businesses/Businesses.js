import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loadBusinesses} from "../../store/businesses"
import BusinessCard from "./BusinessCard";
// import CreateBusiness from "../CreateBusiness";
import styles from "./Businesses.module.css";
import CreateBusinessModal from "../CreateBusinessModal";
import InternalFooter from "../footer";

const Businesses = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(state => state.businesses)




    useEffect(() => {
        dispatch(loadBusinesses());
    }, [dispatch]);

    if (!businesses) {
        return null;
    }

    return (
        <div className={styles.businesses_container}>
            <div className={styles.createButton}><CreateBusinessModal /></div>
            <div className={styles.feedWrapper}>
                {businesses &&
                    Object.values(businesses).map((business, idx) => (
                        <div key={idx} className={styles.businessCard}>
                            <BusinessCard
                                key={business.id}
                                business={business}
                                />
                        </div>
                    )).reverse()}
            </div>
            <InternalFooter />
        </div>
    );
};
export default Businesses;

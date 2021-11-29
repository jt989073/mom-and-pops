import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { loadOneBusiness } from "../../store/business";
import { deleteBusiness } from "../../store/businesses";
import { loadReviews } from "../../store/reviews";
import EditBusinessModal from "../EditBusinessModal";
import InternalFooter from "../footer";
import ReviewBusinessModal from "../ReviewBusinessModal/ReviewBusinessModal";
import ReviewCard from "../ReviewCard/ReviewCard";
import styles from './SingleBusiness.module.css'

const SingleBusiness = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {businessId} = useParams()

    const business = useSelector(state => state.business)
    const currentUser = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews)


    useEffect(()=>{
        dispatch(loadOneBusiness(businessId))
        dispatch(loadReviews())
    }, [dispatch])



    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteBusiness(businessId))
        history.push("/businesses")
    }


    if(!currentUser){
        history.push('/login')
    }

    let reviewCards;
    if (reviews){
        reviewCards = Object.values(reviews).map((review) => {
            // console.log(review, "this the review")
            if (business.review_ids?.includes(review.id)) {
                return <ReviewCard key={review.id} review={review} />
            }
            return reviewCards
        })
        .reverse()
    }




    return (
        <div className={styles.single_business_container}>
            {currentUser?.id === business.user_id ?(
            <div className={styles.button_container}>
                <div>
                    <button className={styles.delete_button} onClick={handleDelete}>Delete Business</button>
                </div>
                <div>
                    <EditBusinessModal />
                </div>
            </div>
        ) : null
        }
            <div className={styles.business_name}>{business.name}</div>
            <div>
                <img src={business.image} alt="business" />
            </div>
            <div className={styles.business_street}>{business.street}</div>
            <div className={styles.business_city}>{business.city}</div>
            <div className={styles.business_state}>{business.state}</div>
                <div className={styles.review_button_container}>
                    <ReviewBusinessModal />
                </div>
            <div className={styles.business_reviews}>{reviewCards}</div>
            <InternalFooter />
        </div>
    )
}

export default SingleBusiness

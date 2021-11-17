import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { loadOneBusiness } from "../../store/business";
import { deleteBusiness } from "../../store/businesses";
import { loadReviews } from "../../store/reviews";
import EditBusinessModal from "../EditBusinessModal";
import ReviewBusinessModal from "../ReviewBusinessModal/ReviewBusinessModal";
import ReviewCard from "../ReviewCard/ReviewCard";

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



    let reviewCards;
    if (reviews){
        reviewCards = Object.values(reviews).map((review) => {
            // console.log(review, "this the review")
            if (business.review_ids.includes(review.id)) {
                return <ReviewCard key={review.id} review={review} />
            }
            return reviewCards
        })
        .reverse()
    }




    return (
        <>
            {currentUser.id === business.user_id ?(
            <>
                <div>
                    <button onClick={handleDelete}>Delete Business</button>
                </div>
                <div>
                    <EditBusinessModal />
                </div>
                <div>
                    <ReviewBusinessModal />
                </div>
            </>
        ) : null
        }
            <div>
                <img src={business.image} alt="business" />
            </div>
            <div>{business.name}</div>
            <div>{business.street}</div>
            <div>{business.city}</div>
            <div>{business.state}</div>
            <div>{reviewCards}</div>
        </>
    )
}

export default SingleBusiness

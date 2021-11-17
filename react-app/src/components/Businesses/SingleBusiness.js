import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { loadOneBusiness } from "../../store/business";
import { deleteBusiness } from "../../store/businesses";
import EditBusinessModal from "../EditBusinessModal";

const SingleBusiness = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {businessId} = useParams()
    const business = useSelector(state => state.business)
    const currentUser = useSelector(state => state.session.user)

    useEffect(()=>{
        dispatch(loadOneBusiness(businessId))
    }, [dispatch])

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteBusiness(businessId))
        history.push("/businesses")
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
        </>
    )
}

export default SingleBusiness

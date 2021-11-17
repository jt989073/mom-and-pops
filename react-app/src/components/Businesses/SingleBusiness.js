import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { loadOneBusiness } from "../../store/business";

const SingleBusiness = () => {
    const dispatch = useDispatch()
    const {businessId} = useParams()
    console.log("business Id", businessId)

    useEffect(()=>{
        dispatch(loadOneBusiness(businessId))
    })

    return (
        <h1>hello from single business page</h1>
    )
}

export default SingleBusiness

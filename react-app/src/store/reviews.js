/*-------------ACTION.TYPES-------------*/
const LOAD_REVIEWS = "review/LOAD_REVIEWS"
const CREATE_REVIEW = "review/CREATE_REVIEW"
const UPDATE_REVIEW = "review/UPDATE_REVIEW"
const DELETE_REVIEW = "review/DELETE_BUSINESS"
/*-------------ACTIONS-------------*/
const load = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
})

const create = (review) => ({
    type: CREATE_REVIEW,
    review
})

const update = (review) => ({
    type: UPDATE_REVIEW,
    review
})

const remove = (review) => ({
    type: DELETE_REVIEW,
    review
})
/*-------------THUNKS-------------*/
export const loadReviews = () => async (dispatch) => {
    const res = await fetch("/api/reviews")
    if (res.ok) {
        const reviews = await res.json()
        dispatch(load(reviews))
    }
}

export const createReview = (review) => async (dispatch) => {
    const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(review)
    })
    if (res.ok){
        const review = await res.json()
        dispatch(create(review))
        return review
    }
}

export const updateReview = (reviewId, payload) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })
    if(res.ok) {
        const review = await res.json()
        dispatch(update(review))
        return review
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    })
    if (res.ok){
        const review = await res.json()
        dispatch(remove(review))
    }
}

/*-------------REDUCER-------------*/
const initialState = {}
const reviews = (state=initialState, action) => {
    switch (action.type){
        case LOAD_REVIEWS:
            return {
                ...state,
                ...action.reviews
            }
        case CREATE_REVIEW:
        case UPDATE_REVIEW:
            return {
                ...state,
                [action.review.id]: action.review
            }
        case DELETE_REVIEW:
            const newState = {...state}
            delete newState[action.review.id]
            return newState
        default:
            return state
    }
}

export default reviews

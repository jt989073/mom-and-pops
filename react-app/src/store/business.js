/*-------------ACTION.TYPES-------------*/
const LOAD_ONE_BUSINESS = "business/LOAD_ONE_BUSINESS"
/*-------------ACTIONS-------------*/
const loadOne = (business) => ({
    type: LOAD_ONE_BUSINESS,
    business
})
/*-------------THUNKS-------------*/
export const loadOneBusiness = (id) => async (dispatch) => {
    const res = await fetch(`/api/businesses/${id}`)
    if (res.ok){
        const business = await res.json()
        dispatch(loadOne(business))
    }
}
/*-------------REDUCER-------------*/
const initialState = {}
const business = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ONE_BUSINESS:
            return {
                ...state,
                ...action.business
            }
        default:
            return state;
    }
}

export default business

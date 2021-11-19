/*-------------ACTION.TYPES-------------*/
const GET_BUSINESSES = "search/GET_BUSINESSES"
/*-------------ACTIONS-------------*/
const getBusinesses = (businesses) => ({
    type: GET_BUSINESSES,
    businesses
})
/*-------------THUNKS-------------*/
export const searchBusinesses = (input) => async (dispatch) => {
    const obj = {
        input
    }
    const res = await fetch(`/api/businesses/search`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(obj)
    })
    const data = await res.json()
    dispatch(getBusinesses(data))
}
/*-------------REDUCER-------------*/
const initialState = {}
const search = (state=initialState, action) => {
    switch (action.type){
        case GET_BUSINESSES:
            return {...state, ...action.businesses}
        default:
            return state
    }
}

export default search

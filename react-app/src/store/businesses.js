/*-------------ACTION.TYPES-------------*/
const LOAD_BUSINESSES = "business/LOAD_BUSINESSES";
const CREATE_BUSINESS = "business/CREATE_DISTILLERY";
const UPDATE_BUSINESS = "business/UPDATE_DISTILLERY"
const DELETE_BUSINESS = "business/DELETE_BUSINESS"
/*-------------ACTIONS-------------*/
const load = (businesses) => ({
  type: LOAD_BUSINESSES,
  businesses,
});

const create = (business) => ({
  type: CREATE_BUSINESS,
  business,
});

const update = (business) => ({
    type: UPDATE_BUSINESS,
    business
})

const remove = (business) => ({
    type: DELETE_BUSINESS,
    business
})
/*-------------THUNKS-------------*/
export const loadBusinesses = () => async (dispatch) => {
  const res = await fetch("/api/businesses");
  if (res.ok) {
    const businesses = await res.json();
    dispatch(load(businesses));
  }
};



export const createBusiness = (business) => async (dispatch) => {
  const res = await fetch("/api/businesses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(business),
  });
  if (res.ok) {
    const business = await res.json();
    dispatch(create(business));
    return business;
  }
};

export const updateBusiness = (businessId, payload) => async (dispatch) => {
    const res = await fetch(`/api/businesses/${businessId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    if(res.ok) {
        const business = await res.json()
        dispatch(update(business))
    }
}

export const deleteBusiness = (businessId) => async (dispatch) => {
    const res = await fetch(`/api/businesses/${businessId}`, {
        method: "DELETE"
    })
    if (res.ok){
        const business = await res.json()
        dispatch(remove(business))
    }
}
/*-------------REDUCER-------------*/
const initialState = {};
export default function businesses(state = initialState, action) {
  switch (action.type) {
    case LOAD_BUSINESSES:
      return {
        ...state,
        ...action.businesses,
      };
    case CREATE_BUSINESS:
    case UPDATE_BUSINESS:
        return {
            ...state,
            [action.business.id]: action.business
        }
    case DELETE_BUSINESS:
        const newState = {...state}
        delete newState[action.business.id]
        return newState
    default:
      return state;
  }
}

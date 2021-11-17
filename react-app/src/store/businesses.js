/*-------------ACTION.TYPES-------------*/
const LOAD_BUSINESSES = "business/LOAD_BUSINESSES";
const CREATE_BUSINESS = "business/CREATE_DISTILLERY";
/*-------------ACTIONS-------------*/
const load = (businesses) => ({
  type: LOAD_BUSINESSES,
  businesses,
});

const create = (business) => ({
  type: CREATE_BUSINESS,
  business,
});
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
        return {
            ...state,
            [action.business.id]: action.business
        }
    default:
      return state;
  }
}

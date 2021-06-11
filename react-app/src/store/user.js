/* -----action verbs--------------------------------------------- */
const LOAD_USER = "user/LOAD_USER";

/* -----action creator------------------------------------------- */
const loadUser = (user) => ({
  type: LOAD_USER,
  user
});

/* -----thunk---------------------------------------------------- */
// GET one user
export const getOneUser = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}`, {
    headers: { "Content-Type": "application/json" }
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();
  dispatch(loadUser(data));
  return data;
}

/* -----reducer-------------------------------------------------- */
const initialState = {};
const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_USER: {
      newState = {}
      // newState[action.user.id] = action.user
      newState["profile"] = action.user
      return {
        ...newState
      }
    }

    default:
      return state;
  }
}

export default userReducer;
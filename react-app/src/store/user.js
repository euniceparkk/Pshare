/* -----action verbs--------------------------------------------- */
const LOAD_USER = "user/LOAD_USER";
const UPDATE_USER = "user/UPDATE_USER";

/* -----action creator------------------------------------------- */
const loadUser = (user) => ({
  type: LOAD_USER,
  user
});

const updateUser = (user) => ({
  type: UPDATE_USER,
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

// UPDATE one user
export const updateOneUser = (id, info) => async (dispatch) => {
  const { first_name, last_name, bio, location } = info;

  const response = await fetch(`/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      first_name: first_name,
      last_name: last_name,
      bio: bio,
      location: location
    })
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();
  dispatch(updateUser(data));
  return data;
};

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

    case UPDATE_USER: {
      newState = {
        ...state,
        [action.user.id]: action.user
      };
      return newState;
    }

    default:
      return state;
  }
}

export default userReducer;
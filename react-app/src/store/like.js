/* -----action verbs--------------------------------------------- */
const LOAD_LIKES = "likes/LOAD_LIKES";

/* -----action creator------------------------------------------- */
const loadLikes = (likes) => ({
  type: LOAD_LIKES,
  likes
});

/* -----thunk---------------------------------------------------- */
// GET all likes
export const loadAllLikes = (likes) => async (dispatch) => {
  const response = await fetch(`/api/likes/`, {
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();
  dispatch(loadLikes(data));
  return data;
}

/* -----reducer-------------------------------------------------- */
const initialState = {};

const likesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_LIKES: {
      newState = {}
      action.likes.forEach((like) => {
        newState[like.id] = like
      })
      return {
        ...newState, ...state
      }
    }

    default:
      return state;
  }
}

export default likesReducer;
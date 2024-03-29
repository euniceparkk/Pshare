/* -----action verbs--------------------------------------------- */
const LOAD_LIKES = "likes/LOAD_LIKES";
const ADD_LIKE = "likes/ADD_LIKE";
const REMOVE_LIKE = "likes/REMOVE_LIKE";

/* -----action creator------------------------------------------- */
const loadLikes = (likes) => ({
  type: LOAD_LIKES,
  likes
});

const addLike = (like) => ({
  type: ADD_LIKE,
  like
});

const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like
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

// POST one like
export const addOneLike = (like) => async (dispatch) => {
  const { user_id, tweet_id } = like;

  const response = await fetch(`/api/likes/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user_id, tweet_id
    })
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();
  dispatch(addLike(data));
  return data;
}

// DELETE one like
export const removeOneLike = (like_id) => async (dispatch) => {
  // const { user_id, tweet_id } = like;

  const response = await fetch(`/api/likes/${like_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  })

  if (!response.ok) {
    throw response
  }

  dispatch(removeLike(like_id));
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

    case ADD_LIKE:
      newState = {
        ...state,
        [action.like.id]: action.like
      };
      return newState;

    case REMOVE_LIKE:
      newState = { ...state }
      delete newState[action.like]
      return newState

    default:
      return state;
  }
}

export default likesReducer;
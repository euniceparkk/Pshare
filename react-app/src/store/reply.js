/* -----action verbs------------------------------------------ */
const LOAD_REPLIES = "tweets/LOAD_REPLIES";

/* -----action creator---------------------------------------- */
const loadReplies = (replies) => ({
  type: LOAD_REPLIES,
  replies
});

/* -----thunk-------------------------------------------------- */
// GET all replies
export const loadAllReplies = (replies) => async (dispatch) => {
  const response = await fetch(`/api/replies/`, {
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();
  dispatch(loadReplies(data));
  return data;
}

/* -----reducer------------------------------------------------ */
const initialState = {};

const repliesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_REPLIES: {
      newState = {}
      action.replies.forEach((reply) => {
        newState[reply.id] = reply
      })
      return {
        ...newState, ...state
      }
    }

    default:
      return state;
  }
}

export default repliesReducer;
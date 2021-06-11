/* -----action verbs------------------------------------------ */
const LOAD_REPLIES = "replies/LOAD_REPLIES";
const ADD_REPLY = "replies/ADD_REPLY";

/* -----action creator---------------------------------------- */
const loadReplies = (replies) => ({
  type: LOAD_REPLIES,
  replies
});

const addReply = (reply) => ({
  type: ADD_REPLY,
  reply
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

// POST one reply
export const addOneReply = (reply) => async (dispatch) => {
  const { user_id, tweet_id, content } = reply;

  const response = await fetch(`/api/replies/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user_id, tweet_id, content
    })
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();
  dispatch(addReply(data));
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

    case ADD_REPLY:
      newState = {
        ...state,
        [action.reply.id]: action.reply
      };
      return newState;

    default:
      return state;
  }
}

export default repliesReducer;
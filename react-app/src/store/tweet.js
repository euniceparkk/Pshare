/* -----action verbs-------------------------------------------------- */
const LOAD_TWEETS = "tweets/LOAD_TWEETS";

/* -----action creator-------------------------------------------------- */
const loadTweets = (tweets) => ({
  type: LOAD_TWEETS,
  tweets
});

/* -----thunk-------------------------------------------------- */
// GET all tweets
export const loadAllTweets = (tweets) => async (dispatch) => {
  const response = await fetch(`/api/tweets`, {
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();

  dispatch(loadTweets(data));
  return data;
}

/* -----reducer-------------------------------------------------- */
const initialState = {};
const tweetsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_TWEETS: {
      newState = {}
      action.tweets.forEach((tweet) => {
        newState[tweet.id] = tweet
      })
      return {
        ...newState, ...state
      }
    }
    default:
      return state;
  }
}

export default tweetsReducer;

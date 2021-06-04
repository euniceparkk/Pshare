/* -----action verbs-------------------------------------------------- */
const LOAD_TWEETS = "tweets/LOAD_TWEETS";
const ADD_TWEET = "tweets/ADD_TWEET"

/* -----action creator-------------------------------------------------- */
const loadTweets = (tweets) => ({
  type: LOAD_TWEETS,
  tweets
});

const addTweet = (tweet) => ({
  type: ADD_TWEET,
  tweet
});

/* -----thunk-------------------------------------------------- */
// GET all tweets
export const loadAllTweets = (tweets) => async (dispatch) => {
  const response = await fetch(`/api/tweets/`, {
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();

  dispatch(loadTweets(data));
  return data;
}

// POST one tweet
export const addOneTweet = (tweet) => async (dispatch) => {
  const { user_id, content } = tweet;

  const response = await fetch(`/api/tweets/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user_id, content
    })
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();
  dispatch(addTweet(data));
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

    case ADD_TWEET:
      newState = {
        ...state,
        [action.tweet.id]: action.tweet
      };
      return newState;

    default:
      return state;
  }
}

export default tweetsReducer;

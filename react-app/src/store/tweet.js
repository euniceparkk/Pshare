/* -----action verbs------------------------------------------ */
const LOAD_TWEETS = "tweets/LOAD_TWEETS";
const ADD_TWEET = "tweets/ADD_TWEET";
const REMOVE_TWEET = "tweets/REMOVE_TWEET";
const LOAD_TWEET = "tweets/LOAD_TWEET";

/* -----action creator---------------------------------------- */
const loadTweets = (tweets) => ({
  type: LOAD_TWEETS,
  tweets
});

const addTweet = (tweet) => ({
  type: ADD_TWEET,
  tweet
});

const removeTweet = (tweet) => ({
  type: REMOVE_TWEET,
  tweet
});

const loadTweet = (tweet) => ({
  type: LOAD_TWEET,
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

// GET one tweet
export const loadOneTweet = (id) => async (dispatch) => {
  const response = await fetch(`/api/tweets/${id}`, {
    headers: { "Content-Type": "application/json" }
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();
  dispatch(loadTweet(data));
  return data;
}

// POST one tweet
export const addOneTweet = (tweet) => async (dispatch) => {
  const { user_id, content, image } = tweet;
  const formData = new FormData();
  formData.append("user_id", user_id);
  formData.append("content", content);

  if (image !== "") {
    formData.append("image", image);
  } else {
    formData.append("image", null)
  }

  const response = await fetch(`/api/tweets/add`, {
    method: "POST",
    body: formData
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();
  dispatch(addTweet(data));
  return data;
}

// DELETE one tweet
export const removeOneTweet = (tweet) => async (dispatch) => {
  const response = await fetch(`/api/tweets/${tweet}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  })

  if (!response.ok) {
    throw response
  }

  dispatch(removeTweet(tweet));
}

/* -----reducer------------------------------------------------ */
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

    case REMOVE_TWEET: {
      newState = { ...state };
      delete newState[action.tweet];
      return newState;
    }

    case LOAD_TWEET: {
      newState = {}
      newState["tweet"] = action.tweet
      return {
        ...newState
      }
    }

    default:
      return state;
  }
}

export default tweetsReducer;

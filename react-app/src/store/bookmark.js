/* -----action verbs--------------------------------------------- */
const LOAD_BOOKMARKS = "bookmarks/LOAD_BOOKMARKS";
const ADD_BOOKMARK = "bookmarks/ADD_BOOKMARK";
const REMOVE_BOOKMARK = "bookmarks/REMOVE_BOOKMARK";

/* -----action creator------------------------------------------- */
const loadBookmarks = (bookmarks) => ({
  type: LOAD_BOOKMARKS,
  bookmarks
});

const addBookmark = (bookmark) => ({
  type: ADD_BOOKMARK,
  bookmark
});

const removeBookmark = (bookmark) => ({
  type: REMOVE_BOOKMARK,
  bookmark
});

/* -----thunk---------------------------------------------------- */
// GET all bookmarks
export const loadAllBookmarks = (bookmarks) => async (dispatch) => {
  const response = await fetch(`/api/bookmarks/`, {
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    throw response
  }

  const data = await response.json();
  dispatch(loadBookmarks(data));
  return data;
}

// POST one bookmark
export const addOneBookmark = (bookmark) => async (dispatch) => {
  const { user_id, tweet_id } = bookmark;

  const response = await fetch(`/api/bookmarks/add`, {
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
  dispatch(addBookmark(data));
  return data;
}

// DELETE one bookmark
export const removeOneBookmark = (bookmark_id) => async (dispatch) => {
  const response = await fetch(`/api/bookmarks/${bookmark_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  })
  if (!response.ok) {
    throw response
  }
  dispatch(removeBookmark(bookmark_id));
}

/* -----reducer-------------------------------------------------- */
const initalState = {};

const bookmarksReducer = (state = initalState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_BOOKMARKS: {
      newState = {}
      action.bookmarks.forEach((bookmark) => {
        newState[bookmarksReducer.id] = bookmark
      })
      return {
        ...newState, ...state
      }
    }

    case ADD_BOOKMARK:
      newState = {
        ...state,
        [action.bookmark.id]: action.bookmark
      };
      return newState;

    case REMOVE_BOOKMARK:
      newState = { ...state }
      delete newState[action.bookmark]
      return newState

    default:
      return state;
  }
}

export default bookmarksReducer;
/* -----action verbs--------------------------------------------- */
const LOAD_BOOKMARKS = "bookmarks/LOAD_BOOKMARKS";

/* -----action creator------------------------------------------- */
const loadBookmarks = (bookmarks) => ({
  type: LOAD_BOOKMARKS,
  bookmarks
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

    default:
      return state;
  }
}

export default bookmarksReducer;
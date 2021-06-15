import axios from "axios";

// Get posts
export const getPages = (id) => async dispatch => {
    try {
        const res = await api.get('/api/bookmarks');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
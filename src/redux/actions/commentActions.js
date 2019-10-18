import * as types from "./actionTypes";
import * as commentApi from "../../api/commentApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCommentSuccess(comments) {
  return { type: types.LOAD_COMMENTS_SUCCESS, comments };
}

export function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, comment };
}

export function updateCommentSuccess(comment) {
  return { type: types.UPDATE_COMMENT_SUCCESS, comment };
}

export function deleteCommentOptimistic(comment) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, comment };
}

export function loadComments() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return commentApi
      .getComments()
      .then(comments => {
        dispatch(loadCommentSuccess(comments));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveComment(comment) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return commentApi
      .saveComment(comment)
      .then(savedComment => {
        comment.id
          ? dispatch(updateCommentSuccess(savedComment))
          : dispatch(createCommentSuccess(savedComment));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteComment(comment) {
  return function(dispatch) {
    dispatch(deleteCommentOptimistic(comment));
    return commentApi.deleteComment(comment.id);
  };
}

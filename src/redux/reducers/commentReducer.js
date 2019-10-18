import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function commentReducer(state = initialState.comments, action) {
  switch (action.type) {
    case types.CREATE_COMMENT_SUCCESS:
      return [...state, { ...action.comment }];
    case types.UPDATE_COMMENT_SUCCESS:
      return state.map(comment =>
        comment.id === action.comment.id ? action.comment : comment
      );
    case types.LOAD_COMMENTS_SUCCESS:
      return action.comments;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter(comment => comment.id !== action.comment.id);
    default:
      return state;
  }
}

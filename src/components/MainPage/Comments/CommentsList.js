import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../../../styles/Comments.css";

const CommentList = ({ comments, onDeleteClick }) => (
  <div className="Comments-page">
    <table className="table" align="center">
      <thead>
        <tr>
          <th>Title</th>
          <th>Comment</th>
          <th>Category</th>
          <th>Author</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {comments.map(comment => {
          return (
            <tr key={comment.id}>
              <td>
                <Link to={"/manageComments/" + comment.id}>
                  {comment.title}
                </Link>
              </td>
              <td>{comment.userComment}</td>
              <td>{comment.category}</td>
              <td>{comment.authorName}</td>
              <td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDeleteClick(comment)}
                  >
                    Delete
                  </button>
                </td>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CommentList;

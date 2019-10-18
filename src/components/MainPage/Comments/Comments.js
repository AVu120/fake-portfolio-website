import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as commentActions from "../../../redux/actions/commentActions";
import * as authorActions from "../../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CommentsList from "./CommentsList";
import { Link } from "react-router-dom";
import Spinner from "../../Common/Spinner";
import { toast } from "react-toastify";

function CommentsPage({ comments, authors, actions, loading }) {
  useEffect(() => {
    if (comments.length === 0) {
      actions.loadComments().catch(error => {
        alert("Loading comments failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);

  const handleDeleteCourse = async comment => {
    toast.success("Course delete!");
    try {
      await actions.deleteComment(comment);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  return (
    <>
      <h2>Comments</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/manageComments">
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-comment"
            >
              Add Comment
            </button>
          </Link>
          <CommentsList
            onDeleteClick={handleDeleteCourse}
            comments={comments}
          />
        </>
      )}
    </>
  );
}

CommentsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    comments:
      state.authors.length === 0
        ? []
        : state.comments.map(comment => {
            return {
              ...comment,
              authorName: state.authors.find(a => a.id === comment.authorId)
                .name
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadComments: bindActionCreators(commentActions.loadComments, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteComment: bindActionCreators(commentActions.deleteComment, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage);

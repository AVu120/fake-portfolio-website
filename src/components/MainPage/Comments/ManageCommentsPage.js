import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadComments,
  saveComment
} from "../../../redux/actions/commentActions";
import { loadAuthors } from "../../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import { newComment } from "../../../tools/mockData";
import Spinner from "../../Common/Spinner";
import { toast } from "react-toastify";

function ManageCommentPage({
  comments,
  authors,
  loadAuthors,
  loadComments,
  saveComment,
  history,
  ...props
}) {
  const [comment, setComment] = useState({ ...props.comment });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (comments.length === 0) {
      loadComments().catch(error => {
        alert("Loading comments failed" + error);
      });
    } else {
      setComment({ ...props.comment });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.comment]);

  function handleChange(event) {
    const { name, value } = event.target;
    setComment(prevComment => ({
      ...prevComment,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { title, category, userComment, authorId } = comment;
    const errors = {};

    if (!title) errors.title = "Title is required!";
    if (!category) errors.category = "Category is required!";
    if (!userComment) errors.comment = "Comment is required!";
    if (!authorId) errors.author = "Author is required!";

    setErrors(errors);
    // Form is valid if the errros object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveComment(comment)
      .then(() => {
        toast.success("Comment saved!");
        history.push("/comments");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return authors.length === 0 || comments.length === 0 ? (
    <Spinner />
  ) : (
    <CommentForm
      comment={comment}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageCommentPage.propTypes = {
  comment: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  loadComments: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveComment: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getCommentBySlug(comments, slug) {
  return comments.find(comment => comment.id === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.id;
  const comment =
    slug && state.comments.length > 0
      ? getCommentBySlug(state.comments, slug)
      : newComment;
  return {
    comment,
    comments: state.comments,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadComments,
  loadAuthors,
  saveComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCommentPage);

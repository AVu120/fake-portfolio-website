import React from "react";
import { connect } from "react-redux";
import * as commentActions from "../../../redux/actions/commentActions";
import * as authorActions from "../../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CommentsList from "./CommentsList";
import { Redirect } from "react-router-dom";

class CommentsPage extends React.Component {
  state = {
    redirectToAddCommentPage: false
  };

  componentDidMount() {
    const { comments, authors, actions } = this.props;

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
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCommentPage && (
          <Redirect to="/manageComments" />
        )}
        <h2>Comments</h2>

        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-comment"
          onClick={() => this.setState({ redirectToAddCommentPage: true })}
        >
          Add Comment
        </button>

        <CommentsList comments={this.props.comments} />
      </>
    );
  }
}

CommentsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadComments: bindActionCreators(commentActions.loadComments, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage);

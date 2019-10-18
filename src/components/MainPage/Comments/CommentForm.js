import React from "react";
import PropTypes from "prop-types";
import TextInput from "../../Common/TextInput";
import SelectInput from "../../Common/SelectInput";

const CommentForm = ({
  comment,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{comment.id ? "Edit" : "Add"} Comment</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={comment.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        name="category"
        label="Category"
        value={comment.category}
        onChange={onChange}
        error={errors.category}
      />

      <TextInput
        name="userComment"
        label="Comment"
        value={comment.userComment}
        onChange={onChange}
        error={errors.userComment}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={comment.authorId || ""}
        defaultOption="Select Author"
        options={authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

CommentForm.propTypes = {
  authors: PropTypes.array.isRequired,
  comment: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CommentForm;

import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const PostComments = (props) => {
  return (
    <React.Fragment>
      <CommentList
        comments={props.comments}
        handleSubmit={props.handleSubmit}
      />
      <CommentForm handleSubmit={props.handleSubmit} />
    </React.Fragment>
  );
};

export default PostComments;

import React, { useEffect } from "react";
import PostComments from "./PostComments";
import { Link, useParams } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import { addComment, getPost, updateComment } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const PostDetail = () => {
  const postDetail = useSelector((state) => state.postDetail);
  const dispatch = useDispatch();

  const { id } = useParams();

  const handleCommentSubmit = (event, comment, type = "add") => {
    event.preventDefault();
    if (type === "add") {
      dispatch(addComment(id, comment));
    } else {
      dispatch(updateComment(id, comment));
    }
  };

  useEffect(() => {
    dispatch(getPost(id));
  }, []);

  return (
    <React.Fragment>
      <h2 className="ui header">{postDetail.title}</h2>
      <p>{postDetail.created_at}</p>
      <div className="ui buttons">
        <Link className="ui blue button" to={`/posts/${postDetail.id}/edit`}>
          Düzenle
        </Link>
        <DeleteModal post={postDetail} />
      </div>
      <p>{postDetail.content}</p>
      <PostComments
        comments={postDetail.comments}
        handleSubmit={handleCommentSubmit}
      />
    </React.Fragment>
  );
};

export default PostDetail;

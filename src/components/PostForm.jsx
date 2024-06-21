import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../actions";

const PostForm = (props) => {
  const [post, setPost] = useState({
    title: "",
    content: ""
  });
  const [error, setError] = useState("");

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const onInputChange = (event) =>
    setPost({ ...post, [event.target.name]: event.target.value });

  const onFormSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (props.post) {
      dispatch(updatePost(id, post, history.push));
    } else {
      dispatch(addPost(post, history.push));
    }
  };

  useEffect(() => {
    if (props.post?.title && props.post?.content)
      setPost({ title: props.post.title, content: props.post.content });
  }, [props.post]);

  return (
    <React.Fragment>
      {error && (
        <div className="ui error message">
          <div className="header">Hata</div>
          <p>{error}</p>
        </div>
      )}
      <div className="ui form">
        <div className="field">
          <label>Yazı Başlığı</label>

          <input
            value={post.title}
            type="text"
            name="title"
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            value={post.content}
            rows="3"
            name="content"
            onChange={onInputChange}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={onFormSubmit}>
          Gönder
        </button>
        <button className="ui button">İptal Et</button>
      </div>
    </React.Fragment>
  );
};

export default PostForm;

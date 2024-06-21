import React, { useState } from "react";

const INITIAL_COMMENT = {
  display_name: "",
  body: ""
};

const CommentForm = (props) => {
  const [comment, setComment] = useState(INITIAL_COMMENT);

  const handleOnChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <h3>Yorum Yaz</h3>
      <form
        className="ui form"
        onSubmit={(event) => {
          props.handleSubmit(event, comment);
          setComment(INITIAL_COMMENT);
        }}
      >
        <div className="ui mini icon input">
          <input
            name="display_name"
            type="text"
            placeholder="Adınız"
            onChange={handleOnChange}
            value={comment.display_name}
          />
        </div>
        <textarea
          name="body"
          placeholder="Yorumunuz"
          rows="3"
          onChange={handleOnChange}
          value={comment.body}
        ></textarea>
        <button className="ui blue button" type="submit">
          Yorum Gönder
        </button>
      </form>
    </React.Fragment>
  );
};

export default CommentForm;

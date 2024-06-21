import axios from "axios";
import { api } from "../api";

export const getPostList = () => (dispatch) => {
  api()
    .get("/posts")
    .then((response) => {
      dispatch({ type: "GET_POST_LIST", payload: response.data });
    })
    .catch(() => {
      dispatch({
        type: "GET_POST_LIST_ERROR",
        payload: "Yazılar yüklenirken hata oluştu."
      });
    });
};

export const getPost = (id) => (dispatch) => {
  axios
    .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
    .then((responses) => {
      const payload = {
        ...responses[0].data,
        comments: responses[1].data
      };
      dispatch({ type: "GET_POST", payload });
    })
    .catch((error) => {
      dispatch({
        type: "GET_POST_ERROR",
        payload: "Yazı yüklenirken hata oluştu."
      });
    });
};

export const addPost = (post, push) => (dispatch) => {
  api()
    .post("/posts", post)
    .then((response) => {
      dispatch({ type: "ADD_POST", payload: response.data });
      push("/");
    })
    .catch((error) => {
      dispatch({
        type: "ADD_POST_ERROR",
        payload: "Başlık ve yazı içeriği alanları zorunludur."
      });
    });
};

export const updatePost = (id, post, push) => (dispatch) => {
  api()
    .put(`/posts/${id}`, post)
    .then((response) => {
      dispatch({ type: "UPDATE_POST", payload: response.data });
      push(`/posts/${id}`);
    })
    .catch((error) => {
      dispatch({
        type: "UPDATE_POST_ERROR",
        payload: "Başlık ve yazı içeriği alanları zorunludur."
      });
    });
};

export const addComment = (id, comment) => (dispatch) => {
  api()
    .post(`/posts/${id}/comments`, comment)
    .then((response) => {
      dispatch({ type: "ADD_COMMENT", payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: "ADD_COMMENT_ERROR",
        payload: "Yorum eklerken hata oluştu."
      });
    });
};

export const deletePost = (id, close, push) => (dispatch) => {
  api()
    .delete(`/posts/${id}`)
    .then(() => {
      dispatch({ type: "DELETE_POST", payload: id });
      close();
      push(`/`);
    })
    .catch(() => {
      dispatch({
        type: "DELETE_POST_ERROR",
        payload: "Yazıyı silerken hata oluştu."
      });
    });
};

export const updateComment = (id, comment) => (dispatch) => {
  api()
    .put(`/posts/${id}/comments/${comment.id}`, { body: comment.body })
    .then((response) => {
      dispatch({ type: "UPDATE_COMMENT", payload: response.data });
    })
    .catch(() => {
      dispatch({
        type: "UPDATE_COMMENT_ERROR",
        payload: "Yorumu düzenlerken hata oluştu."
      });
    });
};

export const deleteComment = (id, comment, close, resetForm) => (dispatch) => {
  api()
    .delete(`/posts/${id}/comments/${comment.id}`)
    .then((response) => {
      dispatch({ type: "DELETE_COMMENT", payload: comment });
      close();
      resetForm();
    })
    .catch(() => {
      dispatch({
        type: "DELETE_COMMENT_ERROR",
        payload: "Yorumu silerken hata oluştu."
      });
    });
};

const INITIAL_STATE = {
  postList: [],
  postListError: "",
  postDetail: {
    id: "",
    title: "",
    content: "",
    created_at: "",
    updated_at: "",
    comments: []
  },
  postDetailError: "",
  addCommentError: "",
  deletePostError: "",
  updatePostError: "",
  addPostError: "",
  updateCommentError: "",
  deleteCommentError: ""
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POST_LIST":
      return { ...state, postList: action.payload, postListError: "" };
    case "GET_POST_LIST_ERROR":
      return { ...state, postListError: action.payload };
    case "GET_POST":
      return { ...state, postDetail: action.payload, postDetailError: "" };
    case "GET_POST_ERROR":
      return { ...state, postDetailError: action.payload };
    case "ADD_COMMENT":
      return {
        ...state,
        postDetail: {
          ...state.postDetail,
          comments: [...state.postDetail.comments, action.payload]
        },
        addCommentError: ""
      };
    case "ADD_COMMENT_ERROR":
      return { ...state, addCommentError: action.payload };
    case "DELETE_POST":
      return {
        ...state,
        postList: state.postList.filter(
          (post) => post.id !== action.payload.id
        ),
        deletePostError: ""
      };
    case "DELETE_POST_ERROR":
      return { ...state, deletePostError: action.payload };
    case "UPDATE_POST":
      return {
        ...state,
        postDetail: { ...state.postDetail, ...action.payload },
        updatePostError: ""
      };
    case "UPDATE_POST_ERROR":
      return { ...state, updatePostError: action.payload };
    case "ADD_POST":
      return { ...state, addPostError: "" };
    case "ADD_POST_ERROR":
      return { ...state, addPostError: action.payload };
    case "UPDATE_COMMENT": {
      return {
        ...state,
        postDetail: {
          ...state.postDetail,
          comments: state.postDetail.comments.map((comment) =>
            comment.id === action.payload.id ? action.payload : comment
          )
        },
        updateCommentError: ""
      };
    }
    case "UPDATE_COMMENT_ERROR":
      return { ...state, updateCommentError: action.payload };
    case "DELETE_COMMENT":
      return {
        ...state,
        postDetail: {
          ...state.postDetail,
          comments: state.postDetail.comments.filter(
            (comment) => comment.id !== action.payload.id
          )
        },
        deleteCommentError: ""
      };
    case "DELETE_COMMENT_ERROR":
      return { ...state, deleteCommentError: action.payload };
    default:
      return state;
  }
};

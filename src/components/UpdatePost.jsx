import { useSelector } from "react-redux";
import PostForm from "./PostForm";

const UpdatePost = () => {
  const post = useSelector((state) => state.postDetail);

  return (
    <div>
      <h1>Yazi Duzenleme Formu</h1>
      <PostForm post={post} />
    </div>
  );
};

export default UpdatePost;

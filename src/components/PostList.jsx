import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostList } from "../actions";

const PostList = () => {
  const postList = useSelector((state) => state.postList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostList());
  }, []);

  return (
    <div className="ui relaxed divided list">
      <Link to="/addpost" className="ui primary button">
        Yazı Ekle
      </Link>
      {postList.map((post) => {
        return (
          <div className="item" key={post.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${post.id}`} className="header">
                {post.title}
              </Link>
              <div className="description">{post.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

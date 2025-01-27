//individual post component
import { lazy, Suspense } from "react";
import "../style/post.style.scss";
import usePost from "../hooks/usePost.tsx";
import { postType } from "../types/types.tsx";
import nopost from "../images/nopost.png";

const PostCards = lazy(() => import("../components/PostCards.tsx"));
const Post = () => {
  const { posts } = usePost();

  return (
    <>
      {Array.isArray(posts) && posts.length > 0 ? (
        <div className="post-main">
          <div className="post-view">
            <div className="post-cards">
              {/* post cards component rendering using map function */}
              {Array.isArray(posts) && posts.length > 0
                ? posts.map((post: postType, index: number) => (
                    <Suspense fallback={<div>Loading...</div>}>
                      <PostCards key={index} post={post} />
                    </Suspense>
                  ))
                : null}
            </div>
          </div>
        </div>
      ) : (
        // display no post image
        <div className="nopost-image">
          <img src={nopost} alt="post" />
        </div>
      )}
    </>
  );
};

export default Post;

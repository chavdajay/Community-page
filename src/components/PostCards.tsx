//post individual component
import React, { useState } from "react";
import { postType } from "../types/types";
import Comments from "./Comments.tsx";
import { LuMessageCircle } from "react-icons/lu";
import BottomDrawer from "./Drawer.tsx";

interface PostCardsProps {
  post: postType;
}
const PostCards: React.FC<PostCardsProps> = ({ post }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const toggleDrawer =
    (isOpenDrawer: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpenDrawer(isOpenDrawer);
    };
  return (
    <>
      <div className="post-card-main">
        <div className="post-card">
          <div className="post-card-title">
            <div>{post.title}</div>
            <div
              className="post-comments-responsive"
              onClick={toggleDrawer(true)}
            >
              <LuMessageCircle />
              {post?.comments?.length || 0}{" "}
            </div>
          </div>
          <img src={post.imgurl} alt="post" width={"100%"} />
        </div>
        <div className="post-comments-section">
          <Comments postId={post} />
        </div>
      </div>
      <BottomDrawer
        isOpenDrawer={isOpenDrawer}
        toggleDrawer={toggleDrawer}
        postId={post.id}
      />
    </>
  );
};

export default PostCards;

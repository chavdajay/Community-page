import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Comments from "./Comments";
import React from "react";
import usePost from "../hooks/usePost";
import { postType } from "../types/types";

// Define the interface for the props
interface BottomDrawerProps {
  isOpenDrawer: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  postId: string;
}

// Use the interface in your component
const BottomDrawer: React.FC<BottomDrawerProps> = ({
  isOpenDrawer,
  toggleDrawer,
  postId,
}) => {
  const { posts } = usePost();

  const postByid =
    posts?.length > 0
      ? posts.find((post: postType) => post.id === postId)
      : undefined;

  return (
    <div>
      <SwipeableDrawer
        anchor="bottom"
        open={isOpenDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Comments postId={postByid} />
      </SwipeableDrawer>
    </div>
  );
};

export default BottomDrawer;

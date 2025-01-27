import React, { useState } from "react";
import { postType } from "../types/types";
import "../style/comments.style.scss";
import usePost from "../hooks/usePost.tsx";
import NestedComments from "./NestedComments.tsx";
import { UsernameAvtar } from "../utils/utils.tsx";
import EmojiPicker from "emoji-picker-react";

interface CommentsProps {
  postId: postType | undefined;
}

const Comments: React.FC<CommentsProps> = ({ postId }) => {
  //call this function from the usepost hookes
  const { addComment, addNestedComment } = usePost();
  const [comment, setComment] = useState<string>("");
  const [parentCommentId, setParentCommentId] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  // Function to handle the selection of an emoji
  const handleEmojiClick = (emoji: { emoji: string }) => {
    setComment((prevComment) => prevComment + emoji.emoji); // Append emoji to the comment input
  };

  const handleComments = () => {
    if (comment.trim()) {
      if (parentCommentId) {
        // Add a nested comment using the usePost hook
        addNestedComment(postId?.id || "", parentCommentId, comment);
      } else {
        // Add a top-level comment using the usePost hook
        addComment(postId?.id || "", comment);
      }
      setComment(""); // Clear the input
      setParentCommentId(null); // Reset parent comment ID
    }
  };

  const handleReplyClick = (commentId: string) => {
    setParentCommentId(commentId); // Set the parent comment ID for replying
  };

  return (
    <div className="comments-main">
      <div className="comments-header">
        <div className="avtar">
          <UsernameAvtar username={postId?.username || "Unknown User"} />
          {postId?.username || "Unknown User"}
        </div>
        <div className="header-comments">
          {postId?.comments?.length || 0} Comments
        </div>
      </div>
      <hr />

      <div className="comments-section">
        <div className="comments">
          {/* comments section headers display to username and list of comments count */}
          <div className="post-content">
            <UsernameAvtar username={postId?.username || "Unknown User"} />
            {postId?.content || "No content available"}
          </div>
          {/* rerender nested comments */}
          <NestedComments
            comments={postId?.comments || []}
            onReply={(commentId: string) => handleReplyClick(commentId)}
          />
        </div>
        {/* cooments for the selected comments to comments or top-level comments input field */}
        <div className="comment-input-wrapper">
          <button
            className="emoji-button"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          >
            😊
          </button>
          <input
            type="text"
            placeholder={
              parentCommentId
                ? `Replying to comment ID: ${parentCommentId}`
                : "Type something here..."
            }
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleComments();
              }
            }}
          />

          {/* Emoji picker */}
          {showEmojiPicker && (
            <div className="emoji-picker-container">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;

import React, { useState } from "react";
import { commentType } from "../types/types";
import { FaReply } from "react-icons/fa";
import "../style/nestedComments.style.scss";
import { IoPersonCircleOutline } from "react-icons/io5";

interface NestedCommentsProps {
  comments: commentType[];
  onReply: (commentId: string) => void;
}

const NestedComments: React.FC<NestedCommentsProps> = ({
  comments,
  onReply,
}) => {
  const [openReplies, setOpenReplies] = useState<Set<string>>(new Set());

  const handleToggleReplies = (commentId: string) => {
    setOpenReplies((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  };

  // recursive function
  const renderComments = (comments: commentType[], level: number = 0) => {
    return comments.map((comment) => (
      <div className="nested-comments" key={comment.id}>
        <div className="nested-comments-content">
          <IoPersonCircleOutline size={40} color="#a2a2a2" />
          <div className="nested-comments-right">
            <div className="nested-comments-header">
              <div>{comment.id}</div>
              <div className="nested-comments-reply-icon">
                <FaReply
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    onReply(comment.id);
                    handleToggleReplies(comment.id);
                  }}
                />
              </div>
            </div>
            <hr />
            <div className="nested-comments-text">{comment.content}</div>
          </div>
        </div>

        {/* render comments recursively  */}
        {openReplies.has(comment.id) && comment.replies?.length > 0 && (
          <div className="nested-comments-replies">
            {renderComments(comment.replies, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return <div>{renderComments(comments)}</div>;
};

export default NestedComments;

import { useEffect } from "react";
import { api } from "../utils/utils.tsx";
import { commentType } from "../types/types";
import { useUIContext } from "../context/BasicProvider.tsx";
import { toast } from "react-toastify";

const usePost = () => {
  const { setComments, setIsopenModal, setPosts, posts } = useUIContext();

  //fetch posts function
  const fetchPosts = async () => {
    try {
      const response = await api.get("/posts");
      setPosts(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Failed to fetch posts: " + error.message);
      } else {
        toast.error("Failed to fetch posts: Unknown error");
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  //New post create Api function
  const addPost = async (
    title: string,
    content: string,
    username: string,
    imgurl: string
  ) => {
    try {
      const response = await api.post("/posts", {
        title,
        content,
        username,
        imgurl,
        comments: [],
      });
      //@ts-ignore
      setPosts((prev) => {
        const updatedPosts = [...prev, response.data];
        return updatedPosts;
      });
      fetchPosts();
      toast.success("Post upload successfully");
      setIsopenModal(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Failed to fetch posts: " + error.message);
      } else {
        toast.error("Failed to fetch posts: Unknown error");
      }
    }
  };

  //add top level comment function
  const addComment = async (postId: string, content: string) => {
    try {
      const post = posts.find((p: any) => p.id === postId);
      if (!post) {
        toast.error(`Post with id ${postId} not found.`);
        return;
      }

      const newComment = { id: Date.now().toString(), content, replies: [] };
      const updatedComments = [...post.comments, newComment];
      const response = await api.put(`/posts/${postId}`, {
        ...post,
        comments: updatedComments,
      });
      setComments(response.data.comments);
      // Refresh the posts after add new comments
      fetchPosts();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Failed to add comment: " + error.message);
      } else {
        toast.error("Failed to add comment: Unknown error");
      }
    }
  };
  //add nested comment function
  const addNestedComment = async (
    postId: string,
    parentCommentId: string | null,
    content: string
  ) => {
    try {
      // Fetch the selected post
      const post = posts.find((p) => p.id === postId);
      if (!post) {
        toast.error(`Post with id ${postId} not found.`);
        return;
      }
      const updateComments = (
        comments: commentType[],
        parentId: string | null,
        content: string
      ): commentType[] => {
        if (!parentId) {
          return [
            ...comments,
            { id: Date.now().toString(), content, replies: [] },
          ];
        }

        return comments.map((comment: commentType) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: updateComments(comment.replies, null, content),
              }
            : {
                ...comment,
                replies: updateComments(comment.replies, parentId, content),
              }
        );
      };

      // Update the comments function
      const updatedComments = updateComments(
        post.comments,
        parentCommentId,
        content
      );
      const updatedPost = { ...post, comments: updatedComments };

      // Update db.json Server file
      const response = await api.put(`/posts/${postId}`, updatedPost);
      setComments(response.data.comments);
      toast.success("Comment added successfully!");

      // Refresh the posts after add new comments
      await fetchPosts();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Failed to add nested comment: " + error.message);
      } else {
        toast.error("Failed to add nested comment: Unknown error");
      }
    }
  };

  return { posts, addPost, addComment, addNestedComment };
};

export default usePost;

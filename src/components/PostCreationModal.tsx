import React, { useState } from "react";
import "../style/postform.style.scss";
import usePost from "../hooks/usePost.tsx";
import { MdClose } from "react-icons/md";
import { useUIContext } from "../context/BasicProvider.tsx";
import { styled, TextField } from "@mui/material";

// Custom textfield style using MUI
const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "#fff", // custom textfield background color
  },
  "& .MuiInputLabel-root": {
    color: "#272164", // custom label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#272164", // Custom label color on focus
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#272164", // custom border color
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#272164", // custom border color on focus
  },
}));

const PostCreationModal = () => {
  const { addPost } = usePost();
  const { setIsopenModal } = useUIContext();

  const [newPost, setNewPost] = useState({
    username: "",
    title: "",
    content: "",
    imgurl: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    title: "",
    imgurl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handlePost = () => {
    let isValid = true;
    let newErrors = {
      username: "",
      title: "",
      imgurl: "",
    };

    //form Validation
    if (!newPost.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }
    if (!newPost.title.trim()) {
      newErrors.title = "Title is required";
      isValid = false;
    }

    if (!newPost.imgurl.trim()) {
      newErrors.imgurl = "Image URL is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      addPost(newPost.title, newPost.content, newPost.username, newPost.imgurl);
      setNewPost({
        username: "",
        title: "",
        content: "",
        imgurl: "",
      });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="postcreation-main">
        <div
          className="post-close-button"
          onClick={() => setIsopenModal(false)}
        >
          <MdClose className="button" />
        </div>
        <div className="post-form">
          <h2>Community Post Create</h2>

          <CustomTextField
            id="outlined-username"
            label="Username"
            variant="outlined"
            name="username"
            value={newPost.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
          />

          <CustomTextField
            id="outlined-title"
            label="Post Title"
            variant="outlined"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            error={!!errors.title}
            helperText={errors.title}
          />

          <CustomTextField
            id="outlined-imgurl"
            label="Upload img URL"
            variant="outlined"
            name="imgurl"
            value={newPost.imgurl}
            onChange={handleChange}
            error={!!errors.imgurl}
            helperText={errors.imgurl}
          />

          <CustomTextField
            label="Content"
            multiline
            rows={3}
            variant="outlined"
            placeholder="Content"
            name="content"
            onChange={handleChange}
            value={newPost.content}
          />

          <button onClick={handlePost}>Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostCreationModal;

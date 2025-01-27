import React from "react";
import { Avatar } from "@mui/material";
import axios from "axios";

//username first char avtar ui
export const UsernameAvtar = ({
  username,
}: {
  username: string | undefined;
}) => {
  return (
    <Avatar sx={{ bgcolor: "#272164" }}>
      {username?.charAt(0)?.toUpperCase() || ""}
    </Avatar>
  );
};

//user avtar image ui
export const UserAvtar = () => {
  return (
    <Avatar src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
  );
};

//bsic api call
export const api = axios.create({
  baseURL: "http://localhost:5000",
});

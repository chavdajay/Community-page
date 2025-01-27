import React from "react";
import "../style/sidebar.style.scss";
import { Link, NavLink } from "react-router-dom";
import { LuWalletCards } from "react-icons/lu";
import { CgAddR } from "react-icons/cg";
import { Badge } from "@mui/material";
import usePost from "../hooks/usePost.tsx";
import { useUIContext } from "../context/BasicProvider.tsx";

const Sidebar = () => {
  const { posts } = usePost();
  const { setIsopenModal, isOpenpostModal } = useUIContext();
  return (
    <>
      <div className="sidebar-main">
        <div className="sidebar-title">Community</div>
        <div className="sidebar-menu">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Badge badgeContent={posts?.length || 0} color="primary">
              <LuWalletCards color="action" size={30} />
            </Badge>
            Post
          </NavLink>
          <Link
            to={""}
            className={` ${isOpenpostModal ? "active" : ""}`}
            onClick={() => setIsopenModal(true)}
          >
            <CgAddR size={30} />
            Create Post
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuWalletCards } from "react-icons/lu";
import { CgAddR } from "react-icons/cg";
import { Badge } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import usePost from "../hooks/usePost.tsx";
import { useUIContext } from "../context/BasicProvider.tsx";

const MobileMenu = () => {
  const { posts } = usePost();
  const { setIsopenModal, isOpenpostModal } = useUIContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar-mobile">
      <div className="navbar-title">Community</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu size={30} />
      </div>

      <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          onClick={toggleMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Badge badgeContent={posts?.length} color="primary">
            <LuWalletCards color="action" size={30} />
          </Badge>
          Post
        </NavLink>
        <Link
          to="#"
          className={isOpenpostModal ? "active" : ""}
          onClick={() => {
            setIsopenModal(true);
            toggleMenu();
          }}
        >
          <CgAddR size={30} />
          Create Post
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;

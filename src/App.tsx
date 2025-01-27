import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../src/style/index.scss";
import { ToastContainer } from "react-toastify";
import { useUIContext } from "./context/BasicProvider.tsx";
import PostCreationModal from "./components/PostCreationModal.tsx";
import MobileMenu from "./appBar/MobileMenu.tsx";
import Sidebar from "./appBar/Sidebar.tsx";

const Post = lazy(() => import("./page/Post.tsx"));

function App() {
  const { isOpenpostModal } = useUIContext();
  const [isMobile, setIsMobile] = useState(false);
  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as necessary
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="main">
        {/* set appbar according to device size */}
        {isMobile ? <MobileMenu /> : <Sidebar />}
        {/* page redirect using react router */}
        <div className="dashboard">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Post />} />
            </Routes>
          </Suspense>
        </div>
      </div>
      {/* toast container for notification */}
      <ToastContainer />
      {isOpenpostModal && <PostCreationModal />}
    </>
  );
}

export default App;

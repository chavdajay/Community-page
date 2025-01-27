import React, { createContext, useContext, useState, ReactNode } from "react";
import { BasicContextType, commentType, postType } from "../types/types";

// Create the context with a default value (empty object)
export const BasicContext = createContext<BasicContextType | undefined>(
  undefined
);

// Custom hook to access the context
export const useUIContext = (): BasicContextType => {
  const context = useContext(BasicContext);
  if (!context) {
    throw new Error("useUIContext must be used within a BasicProvider");
  }
  return context;
};

// Define the props for the provider component
interface BasicProviderProps {
  children: ReactNode;
}

const BasicProvider: React.FC<BasicProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<postType[]>([]);
  const [comments, setComments] = useState<commentType[]>([]);
  const [nestedComments, setNestedComments] = useState<
    commentType[] | undefined
  >([]);
  const [isOpenpostModal, setIsopenModal] = useState<boolean>(false);

  return (
    <BasicContext.Provider
      value={{
        comments,
        setComments,
        nestedComments,
        setNestedComments,
        isOpenpostModal,
        setIsopenModal,
        posts,
        setPosts,
      }}
    >
      {children}
    </BasicContext.Provider>
  );
};

export default BasicProvider;

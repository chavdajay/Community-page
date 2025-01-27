//basic context interface
export interface BasicContextType {
  comments: commentType[];
  setComments: (comments: commentType[]) => void;
  nestedComments: commentType[] | undefined;
  setNestedComments: (nestedComments: commentType[]) => void;
  isOpenpostModal: boolean;
  setIsopenModal: (isOpenpostModal: boolean) => void;
  posts: postType[];
  setPosts: (posts: postType[]) => void;
}

//new post creation interface
export interface postType {
  id: string;
  content: string;
  title: string;
  username: string;
  imgurl: string;
  comments: commentType[];
}

//comment interface
export interface commentType {
  id: string;
  content: string;
  replies: commentType[];
}

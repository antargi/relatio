import React, { useState } from "react";
import PostItem from "./PostItem";
import { Post } from "../../../interfaces/post";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const [postList, setPostList] = useState(posts);

  const handleDelete = (postId: number) => {
    const updatedPosts = postList.filter((post) => post.id !== postId);
    setPostList(updatedPosts);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;

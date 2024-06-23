// PostView.tsx

import React from "react";
import { useParams } from "react-router-dom";
import { initialPosts } from "../../mock/post.mock";

const PostView: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  const posts = initialPosts;

  const post = posts.find((post) => post.id.toString() === postId);

  if (!post) {
    return <div>Post no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
        <p className="text-lg mb-4">{post.content}</p>
        <p className="text-gray-600">Fecha de Publicación: {post.date}</p>
      </div>
    </div>
  );
};

export default PostView;

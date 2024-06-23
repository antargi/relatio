import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../interfaces/post";
import imgExample from "../../../assets/img/realidad_aumentada.png";

interface PostItemProps {
  post: Post;
  onDelete: (postId: number) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onDelete }) => {
  const handleDelete = () => {
    onDelete(post.id); // Eliminar el post con el ID correspondiente
  };

  return (
    <div className="bg-transparent p-4 mb-4 rounded-lg shadow-md">
      <img className="w-1/2" src={imgExample}></img>
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="mb-2">{post.content}</p>
      <div className="w-1/2 m-2">
      </div>
      <p className="text-gray-600 mb-2">Fecha de Publicación: {post.date}</p>
      <div className="flex space-x-4">
        <button
          onClick={handleDelete}
          className="bg-red-500   px-4 py-2 rounded-md hover:bg-red-600"
        >
          Eliminar
        </button>
        {/* Agregar botón para ver el post individualmente */}
        <Link to={`/post/${post.id}`}>
          <button className="bg-gray-500   px-4 py-2 rounded-md hover:bg-gray-600">
            Ver Post
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;

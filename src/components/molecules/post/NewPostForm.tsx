import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../services/postService";

const NewPostForm: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const postId = await createPost(title, content, image);
      navigate(`/post/${postId}`);
    } catch (error) {
      console.error("Error al crear la publicación:", error);
    }
  };

  return (
    <div className="new-post-form bg-white rounded-md p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Nueva Publicación</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Título:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Contenido:</label>
          <textarea
            value={content}
            onChange={handleContentChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-md"
          />
        </div>
        {imagePreview && (
          <div className="mb-4">
            <label className="block mb-2">Vista previa de la imagen:</label>
            <img
              src={imagePreview}
              alt="Vista previa de la imagen"
              className="w-full rounded-md"
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;

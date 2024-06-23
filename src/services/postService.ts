import { environment } from "../environments/environment";

const apiUrl = environment.serverurl;

export const createPost = async (title: string, content: string, image: File | null): Promise<number> => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  if (image) {
    formData.append('image', image);
  }
  const response = await fetch(apiUrl + '/post', {
    method: 'POST',
    body: formData
  });
  if (response.ok) {
    const data = await response.json();
    return data.post.id;
  } else {
    throw new Error('Error al crear la publicación');
  }
};

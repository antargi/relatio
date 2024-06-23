import React from 'react';
import PostList from '../components/molecules/post/PostList';
import PrincipalPost from '../components/molecules/post/PrincipalPost';
import { initialPosts } from '../components/mock/post.mock';

const Home: React.FC = () => {
    const latestPosts = initialPosts;

    return (
      <div className="home py-8">
            <PrincipalPost/>
            <div className="container mx-auto px-4">
                <h2 className="text-2xl mb-4 text-center text-gray-400">Últimos artículos</h2>
                <div className="">
                    <PostList posts={latestPosts} />
                </div>
            </div>
        </div>
    );
};

export default Home;

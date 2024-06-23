// App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/molecules/shared/Header";
import Footer from "./components/molecules/shared/Footer";
import PostView from "./components/molecules/post/PostView";
import NewPostForm from "./components/molecules/post/NewPostForm";
import Navbar from "./components/molecules/shared/Navbar";

//Pages
import About from "./pages/About";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-light to-indigo-dark flex flex-col bg-slate-500 text-white">
    <Router>
        <Header />
        <Navbar />
        <div className="container mx-auto justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:postId" element={<PostView />} />
            <Route path="/new-post" element={<NewPostForm />} />
          </Routes>
        </div>
        <Footer />
    </Router>
    </div>
  );
};

export default App;

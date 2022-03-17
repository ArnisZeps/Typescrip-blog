import React, { useState } from "react";
import BlogPage from "./components/pages/blogPage";
import "./App.css";
import { debug } from "console";

interface IBlogItem {
  key: number;
  id: number;
  text: string;
  comments: string[];
}

function App() {
  const [posts, setPosts] = useState<IBlogItem[]>([]);
  const [newPost, setNewPost] = useState<string>("");
  
  const handleSetPost = (post: string) => {
    setPosts((old) => [...old, { key:posts.length, id: posts.length, text: post, comments: [] }]);
    setNewPost("");
  };

  const handleDeletePost = (id: number) =>{
    const newItems = posts.filter(item => item.id !== id)
    setPosts(newItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        {
          <BlogPage
            posts={posts}
            fieldValue={newPost}
            handleSetPost={handleSetPost}
            setNewPost={setNewPost}
            handleDeletePost={handleDeletePost}
          />
        }
      </header>
    </div>
  );
}

export default App;

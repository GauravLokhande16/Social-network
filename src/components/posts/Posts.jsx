import Post from "../post/Post";
import "./posts.scss";
import React, { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.products);
        setPosts(json.products);
      });
  }, []);
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

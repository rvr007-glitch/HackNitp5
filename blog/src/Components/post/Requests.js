import React from "react";
import PostsCard from "./PostsCard";
import axios from "axios";
import { useLocation } from "react-router-dom";


const Requests = () => {
    const [posts, setPosts] = React.useState([]);
  const { search } = useLocation();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/lawyers?sat=pending");
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {posts.map((_, index) => (
        <PostsCard key={index} posts={posts} />
      ))}
    </div>
  );
};

export default Requests;

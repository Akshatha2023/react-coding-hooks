import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </>
  );
};

export default FetchData;

// Normal data fetching using useEffect and returning the data and defining [] to make sure api call should happen only once

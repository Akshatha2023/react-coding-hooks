// import { useState, useEffect } from "react";
// import axios from "axios";

// const FetchData = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log(res.data);
//         setPosts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <>
//       <ol>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ol>
//     </>
//   );
// };

// export default FetchData;
// Above code is  Normal data fetching using useEffect and returning the data and defining [] to make sure api call should happen only once
// import { useState, useEffect } from "react";
// import axios from "axios";

// const FetchData = () => {
//   const [posts, setPosts] = useState({});
//   const [id, setId] = useState(1);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res) => {
//         console.log(res.data);
//         setPosts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);
//   return (
//     <>
//       <input type="number" onChange={(e) => setId(e.target.value)} />
//       <ol>
//         <li key={posts.id}>{posts.title}</li>
//       </ol>
//     </>
//   );
// };

// export default FetchData;
// above code -Here we are fetching data by id

import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <>
      <input type="number" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch data</button>
      <ol>
        <li key={posts.id}>{posts.title}</li>
      </ol>
    </>
  );
};

export default FetchData;
//In this above code we set value to id by button click ,and only when we click on that button we can fetch data

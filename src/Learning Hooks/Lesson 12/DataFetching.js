import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(0);
  const [requestState, setRequestState] = useState("initial");

  const searchPosts = () => {
    setRequestState("requesting");

    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${
          postId === 0 ? "" : postId
        }`
      )
      .then((data) => {
        setRequestState("done");

        setPosts([].concat(data.data));
      })
      .catch((err) => {
        setRequestState("error");

        console.log(err.message);
      });
  };

  useEffect(() => {
    searchPosts();
  }, [postId]);

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          name=""
          id=""
          value={postId === 0 ? "" : postId}
          onChange={(e) => {
            setRequestState("initial");
            if (e.target.value.length !== 0) {
              try {
                const possiblePostIdToSearch = Number(e.target.value);

                setPostId((prevState) => possiblePostIdToSearch);
              } catch (error) {
                console.log(error.message);
                setRequestState("error");
              }
            } else {
              setPostId((prevState) => 0);
            }
          }}
        />

        <button
          className="search-button"
          onClick={() => {
            searchPosts();
          }}
        >
          Search
        </button>
      </div>
      <h1>Posts</h1>
      <ul className="post-list" style={{ listStyle: "none" }}>
        {requestState === "initial" ||
          (requestState === "done" &&
            posts.map((post) => {
              return (
                <li>
                  <h2 className="post-title">{post.title}</h2>
                </li>
              );
            }))}
        {requestState === "requesting" && <h2>Searching...</h2>}
        {requestState === "error" && <h2>An error occurred</h2>}
      </ul>
    </div>
  );
}

export default DataFetching;

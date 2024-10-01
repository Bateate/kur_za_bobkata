import { useState } from "react";
import classes from "./PostsList.module.css";
import Post from "../Post/Post";

function PostsList({ posts }) {
  const postsList = (
    <ul className={classes.posts}>
      {posts.map((post, index) => (
        <Post key={index} author={post.author} body={post.body} />
      ))}
    </ul>
  );

  const noPosts = (
    <div style={{ textAlign: "center", color: "white" }}>
      <h2>There are no posts yet.</h2>
      <p>Start adding some!</p>
    </div>
  );

  return (
    <>
      {posts.length > 0 ? postsList : noPosts}
    </>
  );
}

export default PostsList;

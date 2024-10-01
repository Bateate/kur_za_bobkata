import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import * as server from "../../data-access/server";
import PostsList from "../../ui/PostsList/PostsList";
import NewPost from "../NewPost/NewPost";
import { useLoaderData } from "react-router-dom";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const posts = useLoaderData()

  function addPostHandler(postData) {
    console.log('Here');
    
    server.addPost(postData);
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <Outlet />
      <main>
        {modalIsVisible && (
          <NewPost onAddPost={addPostHandler} onCancel={hideModalHandler} />
        )}
        <PostsList posts={posts} />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const res = await fetch("http://localhost:8080/" + "posts");
  const resData = await res.json();
  return resData.posts
}
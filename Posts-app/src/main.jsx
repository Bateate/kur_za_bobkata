import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Posts, {loader as postLoader} from "./Posts/feature/Posts/Posts";
import PostsLayout from "./Posts/feature/PostsLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import NewPost from "./Posts/feature/NewPost/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [{ path: "/new-post", element: <NewPost /> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

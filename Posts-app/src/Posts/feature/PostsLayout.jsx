import { Outlet } from "react-router-dom";
import MainHeader from "../ui/MainHeader/MainHeader";

function PostsLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default PostsLayout;

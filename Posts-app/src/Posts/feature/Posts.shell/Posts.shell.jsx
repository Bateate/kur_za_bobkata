import Posts from '../Posts/Posts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


function PostsShell() {

  const router = createBrowserRouter([
    { path: '/', element: <Posts /> },
    { path: '/new-post', element: <Posts isModalVisible={true}/> }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default PostsShell;

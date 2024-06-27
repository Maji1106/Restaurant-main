import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Add from "../pages/Add.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default router;

import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Spinner from "../components/ui/Spinner";
import AddUser from "../components/UserActions/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch("http://localhost:3000/users"),
        Component: Home,
      },
      {
        path: '/addUser',
        Component: AddUser
      }
    ],
  },
]);

export default router;

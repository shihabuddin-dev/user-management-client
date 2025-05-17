import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Spinner from "../components/ui/Spinner";
import AddUser from "../components/UserActions/AddUser";
import EditUser from "../components/UserActions/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch("https://user-management-server-coral.vercel.app/users"),
        Component: Home,
      },
      {
        path: "/addUser",
        Component: AddUser,
      },
      {
        path: "/editUser/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`https://user-management-server-coral.vercel.app/users/${params.id}`),
        Component: EditUser,
      },
    ],
  },
]);

export default router;

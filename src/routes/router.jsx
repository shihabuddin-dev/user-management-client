import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            // { path: '/signin', Component: SignIn },
            // { path: '/signup', Component: SignUp },
            // { path: '/about', Component: About },
            // { path: '/blogs', Component: Blogs },

            // private routes 
            
            // {
            //     path: '/profile',
            //     element:
            //         <PrivateRoutes>
            //             <Profile />
            //         </PrivateRoutes>
            // },
            // {
            //     path: '/news',
            //     element:
            //         <PrivateRoutes>
            //             <News />
            //         </PrivateRoutes>
            // },
        ]
    },
]);

export default router;
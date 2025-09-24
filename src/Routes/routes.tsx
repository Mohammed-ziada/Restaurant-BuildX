import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Home } from "../components/Home/Home";
import { Menu } from "../components/menu/menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
        {
            path:"/",
            element :<Home />
        },
        {
          path:"menu",
          element:<Menu />
        }
    ]
    
  },
]);

const AppRouters = () => {
  return <RouterProvider router={router} />;
};
export default AppRouters;
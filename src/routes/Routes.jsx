import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/allData')
      },
      {
        path: '/chefRecipes',
        element: <ChefRecipes />,
        loader: () => fetch('http://localhost:5000/allData')
      },
    ]
  },
]);

export default router;

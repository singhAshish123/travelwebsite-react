import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout/>,
      
      children:[
        {
          index:true,
          element:<Landing />
        },
        {
          path:'products',
          element:<Product />
        },
        {
          path:'products/:id',
          element:<SingleProduct />
        }
      ]
    },
    {
      path:'/login',
      element:<Login/>,
      
    },
    {
      path:'/register',
      element:<Register/>,
      
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;

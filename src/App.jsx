import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import ErrorElement from "./pages/ErrorElement";
import { loader as landingLoader } from "./pages/Landing";
import Hotels from "./pages/Hotels";
import SingleHotel from "./pages/SingleHotel";
import { loader as SingleHotelLoader } from "./pages/SingleHotel";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <ErrorElement />,
        },
        {
          path: "about",
          element: <About />,
          errorElement: <ErrorElement />,
        },
        {
          path: "hotels",
          element: <Hotels />,
          errorElement: <ErrorElement />,
        },
        {
          path: "hotels/:id",
          element: <SingleHotel />,
          loader: SingleHotelLoader,
          errorElement: <ErrorElement />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

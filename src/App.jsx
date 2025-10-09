import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import DonorListPage from "../pages/DonorListPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import RequestBloodPage from "../pages/RequestBloodPage";
import Blogs from "../pages/BlogsPage";
import SingleBlogPage from "../pages/SingleBlogPage";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";
import DonateUsPage from "../pages/DonateUsPage";


export default function App(){
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" />
        },
        {
          path: '/home',
          element: <HomePage />
        },
        {
          path:'donate-us',
          element:<DonateUsPage/>
        },
        {
          path: '/donor-list',
          element: (
            <PrivateRoute>
              <DonorListPage/>
            </PrivateRoute>
            )
          // element: <DonorListPage/>
        },
        {
          path:'/about',
          element:<AboutPage/>
        },
        {
          path:'/request-blood',
          element:<RequestBloodPage/>
        },
        {
          path:'/blogs',
          element:<Blogs/>
        },
        {
          path:'/blog/:id',
          element:<SingleBlogPage/>
        },
        {
          path: '/register',
          element: <RegisterPage/>
        },
        {
          path: '/login',
          element: <LoginPage/>
        },
        {
          path: '/logout',
          element: <Logout/>
        }
      ]
    },
    {
      path:'*',
      element: <NotFoundPage/>
    }

  ])
  return(
    <RouterProvider router={router}/>
  )
}

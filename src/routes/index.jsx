import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoutes";
import LoginPage from "../pages/loginPage";
import Register from "../pages/Register";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import UserPets from "../pages/UserPets"
import UserPetsAdopt from "../pages/UserPetsAdopt"
import UserPetsReturn from "../pages/UserPetsReturn"
import AdminViewPets from "../pages/AdminViewPets";
import AdminAddPet from "../pages/AdminAddPet";
import AdminUpdatePet from "../pages/AdminUpdatePet";
import AdminDeletePet from "../pages/AdminDeletePet";

const Routes = () => {
  const { token } = useAuth();

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/user",
          element: <UserPage />,
        },
        {
          path: "/pets",
          element: <UserPets />,
        },
        {
          path: "/pets/adopt",
          element: <UserPetsAdopt />,
        },
        {
          path: "/pets/return",
          element: <UserPetsReturn />,
        },
        {
          path: "/admin",
          element: <AdminPage />,
        },
        {
          path: "/admin/pets",
          element: <AdminViewPets />,
        },
        {
          path: "/admin/pets/add",
          element: <AdminAddPet />,
        },
        {
          path: "/admin/pets/update",
          element: <AdminUpdatePet />,
        },
        {
          path: "/admin/pets/delete",
          element: <AdminDeletePet />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <Register />
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
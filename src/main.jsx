import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Components/Home.jsx";
import AddCoffe from "./Components/AddCoffe.jsx";
import UpdateCoffe from "./Components/UpdateCoffe.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";
import Signin from "./Components/Signin.jsx";
import signup from "./Components/signup.jsx";
import AuthProvider from "./contests/AuthProvider.jsx";
import Users from "./Components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
    ],
  },
  {
    path: "add-coffe",
    Component: AddCoffe,
  },
  {
    path: "/coffee/:id",
    loader: () => fetch("http://localhost:3000/coffees"),
    Component: CoffeeDetails,
  },
  {
    path: "update-coffe/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
    Component: UpdateCoffe,
  },
  {
    path: "signin",
    Component: Signin,
  },
  {
    path: "signup",
    Component: signup,
  },
  {
    path: "users",
    loader: () => fetch("http://localhost:3000/users"),
    Component: Users,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

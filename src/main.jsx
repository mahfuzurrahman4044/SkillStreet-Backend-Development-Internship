import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import CreateNote from "./CreateNote/CreateNote";
import UpdateNote from "./UpdateNote/UpdateNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/createNote",
    element: <CreateNote></CreateNote>,
  },
  {
    path: "/updateNote/:id",
    element: <UpdateNote></UpdateNote>,
    loader: ({ params }) => fetch(`/https://skill-street-backend-development-internship-server.vercel.app/notes/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

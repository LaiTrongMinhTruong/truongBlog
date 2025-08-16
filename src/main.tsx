import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import WelcomePage from "./components/WelcomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "welcome",
        element: <WelcomePage />,
      },
      {

      }
    ]
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
  {
    path: "/contact",
    element: <div>Contact Page</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

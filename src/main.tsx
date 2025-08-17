import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import WelcomePage from "./components/WelcomePage.tsx";
import "./index.css";
import BlogPage from "./components/BlogPage.tsx";
import ContactPage from "./components/ContactPage.tsx";
import AboutPage from "./components/AboutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <WelcomePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

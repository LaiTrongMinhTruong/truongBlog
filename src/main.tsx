import CategoryPage from "@/components/blog/CategoryPage.tsx";
import PostPage from "@/components/blog/PostPage.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import AboutPage from "./components/about/AboutPage.tsx";
import BlogPage from "./components/blog/BlogPage.tsx";
import ContactPage from "./components/contact/ContactPage.tsx";
import WelcomePage from "./components/home/WelcomePage.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/vn" replace />,
  },
  {
    path: ":lang",
    element: <App />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "welcome", element: <WelcomePage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog/:id", element: <PostPage /> },
      { path: "blog/category/:category", element: <CategoryPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

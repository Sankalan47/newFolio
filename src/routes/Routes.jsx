import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Blogs from "../components/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Experience /> },
      { path: "/projects", element: <Projects /> },
      { path: "/blogs", element: <Blogs /> },
    ],
  },
]);

export default router;

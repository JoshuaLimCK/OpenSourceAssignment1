import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/Home.tsx";
import Introduction from "@/Intro.tsx";
import Barriers from "@/Barriers.tsx";
import Disparities from "@/Disparities.tsx";
import Policies from "@/Policies.tsx";
import CommunityCentres from "@/CommunityCentres";
import { SideNav } from "@/components/side-nav";
import { Navbar } from "@/components/navbar";
import About from "@/About.tsx";
import Footer from "@/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  { path: "/introduction", element: <Introduction /> },
  {
    path: "/barriers",
    element: <Barriers />,
  },
  {
    path: "/disparities",
    element: <Disparities />,
  },
  {
    path: "/policies",
    element: <Policies />,
  },
  {
    path: "/communityCentres",
    element: <CommunityCentres />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="flex flex-col min-h-screen items-center ">
      <nav className="self-start md:self-center ">
        <SideNav />
        <Navbar />
      </nav>
      <RouterProvider router={router} />
      <footer className="mt-auto">
        <Footer />
      </footer>
    </main>
  </React.StrictMode>
);

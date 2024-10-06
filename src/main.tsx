import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Characters from "./pages/Characters.tsx";
import Locations from "./pages/Locations.tsx";
import Episodes from "./pages/Episodes.tsx";
import Layout from "./components/Layout.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
      {
        path: "/episodes",
        element: <Episodes />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);

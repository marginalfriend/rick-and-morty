import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <VStack pt="14" w="100vw">
        <Outlet />
      </VStack>
    </>
  );
}

export default Layout;

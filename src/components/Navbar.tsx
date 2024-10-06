import { HStack, List, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const routes = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Characters",
    url: "/characters",
  },
  {
    label: "Locations",
    url: "/locations",
  },
  {
    label: "Episodes",
    url: "/episodes",
  },
];

function Navbar() {
  return (
    <HStack
      as="nav"
      position="fixed"
      bg="white"
      w="full"
      h="14"
      justify="center"
    >
      <HStack as="ul" justify="space-around" w="full">
        {routes.map((route) => (
          <Link to={route.url} key={route.url}>
            <List>
              <Text
                fontWeight="extrabold"
                _hover={{
                  color: "green",
									textDecor: "underline"
                }}
              >
                {route.label}
              </Text>
            </List>
          </Link>
        ))}
      </HStack>
    </HStack>
  );
}

export default Navbar;

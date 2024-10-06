import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();

  console.log(location.pathname);

  return (
    <HStack
      as="nav"
      position="fixed"
      bg="white"
      w="full"
      h="14"
      justify="center"
			borderBottomWidth="1px"
    >
      <List display="flex" justifyContent="space-around" w="full">
        {routes.map((route) => (
          <ListItem
            bg={location.pathname === route.url ? "green.100" : ""}
            px="2"
            py="1"
            rounded="md"
          >
            <Link to={route.url} key={route.url}>
              <Text
                fontWeight="extrabold"
                _hover={
                  location.pathname !== route.url
                    ? {
                        color: "green",
                        textDecor: "underline",
                      }
                    : undefined
                }
              >
                {route.label}
              </Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </HStack>
  );
}

export default Navbar;

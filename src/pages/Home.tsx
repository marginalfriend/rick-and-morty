import { Box, Flex, Image, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Box maxW="100vw" overflowX="hidden">
      <Flex justify="center" align="center" h="400px">
        <Image src="/images/hero.png" boxSize="300px" alt="Rick and Morty" objectFit="contain" />
      </Flex>
      <Text as="h1" fontWeight="extrabold" fontSize={["2xl", "2xl", "3xl"]} textAlign="center" px={["14", "14", "20"]}>
        A React, Chakra UI, React Router DOM, Axios, and React Query playground using
        Rick and Morty API
      </Text>
    </Box>
  );
}

export default Home;

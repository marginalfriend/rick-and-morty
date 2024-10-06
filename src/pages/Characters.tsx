import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../api/rick-and-morty";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Image,
  Badge,
  VStack,
} from "@chakra-ui/react";

export default function Characters() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });

  if (isPending) return "Loading...";

  if (error) return `An unexpected error occured: ${error}`;

  return (
    <VStack w="full" spacing="4">
      <Heading as="h1" size="xl">
        Characters
      </Heading>
      {isFetching && "Updating..."}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6} p={4}>
        {data.results.map((character: CharacterSchema) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            origin={character.origin.name}
            imageUrl={character.image}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

function CharacterCard({
  name,
  status,
  species,
  origin,
  imageUrl,
}: CharacterCardProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: "lg" }}
    >
      {/* Character Image */}
      <Image
        src={imageUrl}
        alt={name}
        width="100%"
        height="200px"
        objectFit="cover"
      />

      {/* Character Details */}
      <Box p={6}>
        <Heading size="md" mb={2}>
          {name}
        </Heading>

        <Text mb={2}>
          <Badge
            colorScheme={
              status === "Alive" ? "green" : status === "Dead" ? "red" : "gray"
            }
          >
            {status}
          </Badge>{" "}
          - {species}
        </Text>

        <Text fontSize="sm" color="gray.500">
          Origin: {origin}
        </Text>
      </Box>
    </Box>
  );
}

type CharacterCardProps = {
  name: string;
  status: string;
  species: string;
  origin: string;
  imageUrl: string;
};

type CharacterSchema = CharacterCardProps & {
  id: number;
  origin: { name: string; url: string };
  image: string;
};

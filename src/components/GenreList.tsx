import { Button, HStack, Image } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  console.log(selectedGenreId);

  if (isLoading)
    // return (
    //   <Spinner
    //     thickness="4px"
    //     speed="0.65s"
    //     emptyColor="gray.200"
    //     color="blue.500"
    //     size="xl"
    //   />
    return <GenreListSkeleton></GenreListSkeleton>;

  return (
    <>
      {data.map((datum) => (
        <HStack padding={"5px"} key={datum.id}>
          <Image
            src={datum.image_background}
            boxSize="40px"
            borderRadius={"5px"}
          ></Image>
          <Button
            colorScheme={"green"}
            variant={datum.id == selectedGenreId ? "solid" : "link"}
            onClick={() => onSelectGenre(datum)}
          >
            {datum.name}
          </Button>
        </HStack>
      ))}
    </>
  );
};

export default GenreList;

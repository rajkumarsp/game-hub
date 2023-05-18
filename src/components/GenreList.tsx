import { Button, HStack, Image } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

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
          <Button variant="link" onClick={() => onSelectGenre(datum)}>
            {datum.name}
          </Button>
        </HStack>
      ))}
    </>
  );
};

export default GenreList;

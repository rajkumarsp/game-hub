import { Button, HStack, Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
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
          <Button variant="link">{datum.name}</Button>
        </HStack>
      ))}
    </>
  );
};

export default GenreList;

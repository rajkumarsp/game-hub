import { Stack, Skeleton, SkeletonText, HStack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Stack>
      {skeletons.map((skeleton) => (
        <HStack padding={"5px"} key={skeleton}>
          <Skeleton boxSize="40px" borderRadius={"5px"}></Skeleton>
          <SkeletonText noOfLines={1} height={"10px"} width={"100px"} />
        </HStack>
      ))}
    </Stack>
  );
};

export default GenreListSkeleton;

import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./Metacritic";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card borderRadius="10px" overflow="hidden" width="300px">
    <Image src={game.background_image}></Image>
    <CardBody>
      <Heading fontSize="2xl">{game.name}</Heading>
      <HStack justifyContent={"space-between"}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
        <Metacritic score={game.metacritic}></Metacritic>
      </HStack>
    </CardBody>
  </Card>
);

export default GameCard;

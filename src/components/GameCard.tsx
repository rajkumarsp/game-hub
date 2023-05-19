import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./Metacritic";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card>
    <Image src={game.background_image}></Image>
    <CardBody>
      <HStack justifyContent={"space-between"}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
        <Metacritic score={game.metacritic}></Metacritic>
      </HStack>
      <Heading fontSize="2xl">{game.name}</Heading>
    </CardBody>
  </Card>
);

export default GameCard;

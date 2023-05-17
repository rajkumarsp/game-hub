import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/xgames")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{<Text>{game.name}</Text>}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

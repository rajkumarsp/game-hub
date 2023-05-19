import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const onSelectGenre = (genre: Genre) =>
    setGameQuery({ ...gameQuery, selectedGenre: genre });

  const onChangePlatform = (platform: Platform) =>
    setGameQuery({ ...gameQuery, selectedPlatform: platform });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
      templateColumns={{ base: `1fr`, lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.selectedGenre}
            onSelectGenre={onSelectGenre}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box marginBottom={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.selectedPlatform}
            onChangePlatform={(platform) => onChangePlatform(platform)}
          />
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;

import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  orderBy: string;
  searchTerm: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genre: Genre) =>
    setGameQuery({ ...gameQuery, selectedGenre: genre });

  const onChangePlatform = (platform: Platform) =>
    setGameQuery({ ...gameQuery, selectedPlatform: platform });

  const onChangeOrderBy = (orderBy: string) =>
    setGameQuery({ ...gameQuery, orderBy: orderBy });

  const onSearch = (searchTerm: string) => {
    console.log(`searchTerm = ${searchTerm}`);
    setGameQuery({ ...gameQuery, searchTerm: searchTerm });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
      templateColumns={{ base: `1fr`, lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchTerm) => onSearch(searchTerm)}></NavBar>
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
        <HStack marginBottom={2}>
          <Box marginRight={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.selectedPlatform}
              onChangePlatform={(platform) => onChangePlatform(platform)}
            />
          </Box>
          <SortSelector
            orderBy={gameQuery.orderBy}
            onChangeOrderBy={(orderBy) => onChangeOrderBy(orderBy)}
          ></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;

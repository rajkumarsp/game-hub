import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
    >
      <GridItem area="nav" bg="yellow.100">
        NAV
      </GridItem>
      <GridItem area="main" bg="teal.100">
        MAIN
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="pink.100">
          ASIDE
        </GridItem>
      </Show>
    </Grid>
  );
};

export default App;

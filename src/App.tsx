import { Grid, GridItem, Stack } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1-24px
        }}
      >
        <GridItem area="nav">
          <Navbar></Navbar>
        </GridItem>
        <Stack hideBelow="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Stack>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

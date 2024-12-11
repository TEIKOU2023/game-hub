import { Grid, GridItem, Stack } from "@chakra-ui/react";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1-24px
      }}
    >
      <GridItem area="nav" >
        <Navbar />
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Stack>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

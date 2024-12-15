import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1-24px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...GameQuery, searchText })
            }
          />
        </GridItem>
        <Stack hideBelow="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={GameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
            />
          </GridItem>
        </Stack>
        <GridItem area="main">
          <HStack gap={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={GameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...GameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={GameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...GameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={GameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

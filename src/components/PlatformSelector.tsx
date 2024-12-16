import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatform";
import {
  Button,
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { HiSortAscending } from "react-icons/hi";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <HiSortAscending />
          {selectedPlatform?.name || "Platforms"}
        </Button>
      </MenuTrigger>
      <MenuContent minW="10rem">
        {data.map((platform) => (
          <MenuRadioItemGroup>
            <MenuRadioItem
              onClick={() => onSelectPlatform(platform)}
              value={platform.name}
              key={platform.id}
            >
              {platform.name}
            </MenuRadioItem>
          </MenuRadioItemGroup>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;

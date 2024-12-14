import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";
import { HStack } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <PlatformIcon platformId={platform.slug} key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
const PlatformIcon = ({ platformId }: { platformId: string }) => {
  const iconStyle = { opacity: 0.5 };

  switch (platformId) {
    case "pc":
      return <FaWindows style={iconStyle}/>;
    case "playstation":
      return <FaPlaystation style={iconStyle} />;
    case "xbox":
      return <FaXbox style={iconStyle} />;
    case "nintendo":
      return <SiNintendo style={iconStyle} size={50}/>;
    case "mac":
      return <FaApple style={iconStyle} />;
    case "linux":
      return <FaLinux style={iconStyle} />;
    case "android":
      return <FaAndroid style={iconStyle} />;
    case "ios":
      return <MdPhoneIphone style={iconStyle} />;
    case "web":
      return <BsGlobe style={iconStyle} />;
    default:
      return null;
  }
};

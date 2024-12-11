import { HStack, Switch, Text, } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import React from "react";

const ColorModeSwitch = () => {
  return (
    <HStack>
      <Switch isChecked={ColorMode === 'dark'}/>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;

import { ColorModeProvider } from "@/components/ui/color-mode";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={defaultSystem}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}

export default Layout;

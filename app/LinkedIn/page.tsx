import { Box, ChakraProvider } from "@chakra-ui/react";
import LinkedIn from "./LinkedIn";

const Page = () => {
  return (
    <ChakraProvider>
      <Box bg="#000319" w="full" h="full" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <LinkedIn />
      </Box>
    </ChakraProvider>
  );
};

export default Page;
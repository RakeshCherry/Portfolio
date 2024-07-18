import { Box, ChakraProvider } from "@chakra-ui/react";
import GmailConnect from "./GmailConnect";

const Page = () => {
  return (
    <ChakraProvider>
      <Box bg="rgba(17, 25, 40, 0.75)" w="full" h="full" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <GmailConnect />
      </Box>
    </ChakraProvider>
  );
};

export default Page;

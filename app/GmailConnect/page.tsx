import { ChakraProvider } from "@chakra-ui/react";
import GmailConnect from "./GmailConnect";

const Page = () => {
  return (
    <ChakraProvider>
      <GmailConnect />
    </ChakraProvider>
  );
};

export default Page;

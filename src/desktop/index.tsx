import { AbsoluteCenter, Box, Center } from "@chakra-ui/react";

export const Desktop = () => {
  return (
    <Center position="relative" h="100px">
      <AbsoluteCenter bg="tomato" p="4" color="white" axis="vertical">
        <Box bg="Menu" w="300px" h="100px">
          This will be centered
        </Box>
      </AbsoluteCenter>
    </Center>
  );
};

import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

const Notices = () => {
  return (
    <Box position="relative">
      <BackButton />
      <Heading size="xl" textAlign="center" mb={8}>
        Notices
      </Heading>
      {}
    </Box>
  );
};

export default Notices;

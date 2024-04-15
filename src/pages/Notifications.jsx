import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

const Notifications = () => {
  return (
    <Box position="relative">
      <BackButton />
      <Heading size="xl" textAlign="center" mb={8}>
        Notifications
      </Heading>
      {}
    </Box>
  );
};

export default Notifications;

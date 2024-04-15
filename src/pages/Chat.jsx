import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";
import BackButton from "../components/BackButton";

const Chat = () => {
  return (
    <Box position="relative">
      <BackButton />
      <Heading size="xl" textAlign="center" mb={8}>
        채팅
      </Heading>
      {}
      <BottomTab />
    </Box>
  );
};

export default Chat;

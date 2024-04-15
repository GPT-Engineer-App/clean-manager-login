import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";

const Chat = () => {
  return (
    <Box>
      <Heading size="xl" textAlign="center" mb={8}>
        채팅
      </Heading>
      {}
      <BottomTab />
    </Box>
  );
};

export default Chat;

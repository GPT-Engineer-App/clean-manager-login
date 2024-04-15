import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";

const Settings = () => {
  return (
    <Box>
      <Heading size="xl" textAlign="center" mb={8}>
        설정
      </Heading>
      {}
      <BottomTab />
    </Box>
  );
};

export default Settings;
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";

const MySchedule = () => {
  return (
    <Box>
      <Heading size="xl" textAlign="center" mb={8}>
        내일정
      </Heading>
      {}
      <BottomTab />
    </Box>
  );
};

export default MySchedule;

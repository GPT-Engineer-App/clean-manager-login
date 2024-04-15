import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";

const QuoteManagement = () => {
  return (
    <Box>
      <Heading size="xl" textAlign="center" mb={8}>
        견적관리
      </Heading>
      {}
      <BottomTab />
    </Box>
  );
};

export default QuoteManagement;

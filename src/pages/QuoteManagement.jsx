import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";
import BackButton from "../components/BackButton";

const QuoteManagement = () => {
  return (
    <Box position="relative">
      <BackButton />
      <Heading size="xl" textAlign="center" mb={8}>
        견적관리
      </Heading>
      {}
      <BottomTab />
    </Box>
  );
};

export default QuoteManagement;

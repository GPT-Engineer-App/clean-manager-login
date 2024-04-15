import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";

const ReservationManagement = () => {
  return (
    <Box>
      <Heading size="xl" textAlign="center" mb={8}>
        예약관리
      </Heading>
      {}
      <BottomTab />
    </Box>
  );
};

export default ReservationManagement;

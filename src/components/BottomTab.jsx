import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaHome, FaCalendar, FaUser } from "react-icons/fa";

const BottomTab = () => {
  return (
    <Box position="fixed" bottom={0} left={0} right={0} bg="white" py={2} borderTopWidth={1}>
      <Flex justifyContent="space-around">
        <Icon as={FaHome} boxSize={6} />
        <Icon as={FaCalendar} boxSize={6} />
        <Icon as={FaUser} boxSize={6} />
      </Flex>
    </Box>
  );
};

export default BottomTab;
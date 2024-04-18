import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaHome, FaCalendar, FaFileAlt, FaComments, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomTab = () => {
  const navigate = useNavigate();

  return (
    <Box position="fixed" bottom={0} left={0} right={0} bg="white" py={2} borderTopWidth={1}>
      <Flex justifyContent="space-around">
        <Box onClick={() => navigate("/my-schedule")} textAlign="center">
          <Icon as={FaCalendar} boxSize={6} />
          <Text fontSize="xs">내일정</Text>
        </Box>
        <Box onClick={() => navigate("/quote-management")} textAlign="center">
          <Icon as={FaFileAlt} boxSize={6} />
          <Text fontSize="xs">견적관리</Text>
        </Box>

        <Box onClick={() => navigate("/chat")} textAlign="center">
          <Icon as={FaComments} boxSize={6} />
          <Text fontSize="xs">채팅</Text>
        </Box>
        <Box onClick={() => navigate("/settings")} textAlign="center">
          <Icon as={FaCog} boxSize={6} />
          <Text fontSize="xs">설정</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default BottomTab;

import React from "react";
import { Box, Text, VStack, Icon, HStack, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaUser, FaBell, FaQuestionCircle, FaEnvelope, FaComment, FaFileAlt, FaLock, FaBellSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BottomTab from "../components/BottomTab";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <HStack mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} />
        <Text fontSize="2xl" fontWeight="bold">
          Settings
        </Text>
      </HStack>

      <VStack spacing={6} align="stretch">
        <HStack onClick={() => navigate("/settings/edit-profile")}>
          <Icon as={FaUser} boxSize={6} />
          <Text fontSize="xl">Edit Profile</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/notices")}>
          <Icon as={FaBell} boxSize={6} />
          <Text fontSize="xl">Notices</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/faq")}>
          <Icon as={FaQuestionCircle} boxSize={6} />
          <Text fontSize="xl">FAQ</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/inquiry")}>
          <Icon as={FaEnvelope} boxSize={6} />
          <Text fontSize="xl">Inquiry</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/feedback")}>
          <Icon as={FaComment} boxSize={6} />
          <Text fontSize="xl">Feedback</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/terms")}>
          <Icon as={FaFileAlt} boxSize={6} />
          <Text fontSize="xl">Terms</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/privacy")}>
          <Icon as={FaLock} boxSize={6} />
          <Text fontSize="xl">Privacy</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/notifications")}>
          <Icon as={FaBellSlash} boxSize={6} />
          <Text fontSize="xl">Notifications</Text>
        </HStack>
      </VStack>
      <BottomTab />
    </Box>
  );
};

export default Settings;

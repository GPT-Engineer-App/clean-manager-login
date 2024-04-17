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
          <Text fontSize="xl">프로필 수정</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/notices")}>
          <Icon as={FaBell} boxSize={6} />
          <Text fontSize="xl">공지사항</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/faq")}>
          <Icon as={FaQuestionCircle} boxSize={6} />
          <Text fontSize="xl">자주 묻는 질문</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/inquiry")}>
          <Icon as={FaEnvelope} boxSize={6} />
          <Text fontSize="xl">문의하기</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/feedback")}>
          <Icon as={FaComment} boxSize={6} />
          <Text fontSize="xl">피드백</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/terms")}>
          <Icon as={FaFileAlt} boxSize={6} />
          <Text fontSize="xl">이용 약관</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/privacy")}>
          <Icon as={FaLock} boxSize={6} />
          <Text fontSize="xl">개인정보 처리방침</Text>
        </HStack>
        <HStack onClick={() => navigate("/settings/notifications")}>
          <Icon as={FaBellSlash} boxSize={6} />
          <Text fontSize="xl">알림 설정</Text>
        </HStack>
      </VStack>
      <BottomTab />
    </Box>
  );
};

export default Settings;

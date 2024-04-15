import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return <IconButton icon={<FaArrowLeft />} aria-label="Back" onClick={() => navigate(-1)} position="absolute" top={4} left={4} zIndex={1} />;
};

export default BackButton;

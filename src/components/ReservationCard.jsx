import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const ReservationCard = ({ reservation, onSubmitQuote }) => {
  return (
    <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
      <Text>
        <strong>Name:</strong> {reservation.name}
      </Text>
      <Text>
        <strong>Address:</strong> {reservation.address}
      </Text>
      <Text>
        <strong>Date:</strong> {reservation.date}
      </Text>
      <Button mt={2} onClick={() => onSubmitQuote(reservation.id)}>
        Submit Quote
      </Button>
    </Box>
  );
};

export default ReservationCard;
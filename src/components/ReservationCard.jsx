import React, { useState } from "react";
import { Box, Text, Button, Input } from "@chakra-ui/react";

const ReservationCard = ({ reservation, onSubmitQuote }) => {
  const [quoteAmount, setQuoteAmount] = useState("");

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
      <Input placeholder="Enter quote amount" value={quoteAmount} onChange={(e) => setQuoteAmount(e.target.value)} type="number" mt={2} />
      <Button mt={2} onClick={() => onSubmitQuote(reservation.id, quoteAmount)}>
        Submit Quote
      </Button>
    </Box>
  );
};

export default ReservationCard;

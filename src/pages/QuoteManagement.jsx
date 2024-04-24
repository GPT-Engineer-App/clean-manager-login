import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";
import BackButton from "../components/BackButton";

const QuoteManagement = ({ location }) => {
  const { reservation, quoteAmount } = location.state || { reservation: null, quoteAmount: "" };
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [quoteAmountState, setQuoteAmountState] = useState(quoteAmount);
  const [submittedQuote, setSubmittedQuote] = useState(null);

  const handleEdit = (quote) => {
    setCustomerName(quote.customerName);
    setCustomerAddress(quote.customerAddress);
    setQuoteAmountState(quote.quoteAmount);
  };

  const handleCancel = () => {
    setSubmittedQuote(null);
    setCustomerName("");
    setCustomerAddress("");
    setQuoteAmountState("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuote({ customerName, customerAddress, quoteAmount });
    setCustomerName("");
    setCustomerAddress("");
    setQuoteAmountState("");
  };

  return (
    <Box position="relative">
      <BackButton />
      <Heading size="xl" textAlign="center" mb={8}>
        견적관리
      </Heading>
      <Box p={4}>
        {reservation && (
          <Box borderWidth={1} p={4} mb={4}>
            <Text>
              <strong>고객명:</strong> {reservation.name}
            </Text>
            <Text>
              <strong>고객 주소:</strong> {reservation.address}
            </Text>
            <Text>
              <strong>예약 일자:</strong> {reservation.date}
            </Text>
          </Box>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl mb={4} isDisabled={!reservation}>
            <FormLabel>고객명</FormLabel>
            <Input type="text" value={reservation ? reservation.name : customerName} onChange={(e) => setCustomerName(e.target.value)} />
          </FormControl>
          <FormControl mb={4} isDisabled={!reservation}>
            <FormLabel>고객 주소</FormLabel>
            <Input type="text" value={reservation ? reservation.address : customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
          </FormControl>
          <FormControl mb={4} isDisabled={!reservation}>
            <FormLabel>견적 금액</FormLabel>
            <Input type="number" value={reservation ? quoteAmount : quoteAmountState} onChange={(e) => setQuoteAmountState(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            견적 제출
          </Button>
        </form>
        {submittedQuote && (
          <Box mt={8} borderWidth={1} p={4} borderRadius="md">
            <Heading size="lg" mb={4}>
              제출된 견적
            </Heading>
            <Text fontSize="md">
              <strong>고객명:</strong> {submittedQuote.customerName}
            </Text>
            <Text fontSize="md">
              <strong>고객 주소:</strong> {submittedQuote.customerAddress}
            </Text>
            <Text fontSize="md">
              <strong>견적 금액:</strong> {submittedQuote.quoteAmount}
            </Text>
          </Box>
        )}
      </Box>
      <BottomTab />
    </Box>
  );
};

export default QuoteManagement;

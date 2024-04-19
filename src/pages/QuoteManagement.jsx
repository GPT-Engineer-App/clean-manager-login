import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";
import BackButton from "../components/BackButton";

const QuoteManagement = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [quoteAmount, setQuoteAmount] = useState("");
  const [submittedQuote, setSubmittedQuote] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuote({ customerName, customerAddress, quoteAmount });
    setCustomerName("");
    setCustomerAddress("");
    setQuoteAmount("");
  };

  return (
    <Box position="relative">
      <BackButton />
      <Heading size="xl" textAlign="center" mb={8}>
        견적관리
      </Heading>
      <Box p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>고객명</FormLabel>
            <Input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>고객 주소</FormLabel>
            <Input type="text" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>견적 금액</FormLabel>
            <Input type="number" value={quoteAmount} onChange={(e) => setQuoteAmount(e.target.value)} />
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

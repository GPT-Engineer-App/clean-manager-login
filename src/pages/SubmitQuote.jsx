import React, { useState } from "react";
import { Box, Heading, Input, Button } from "@chakra-ui/react";


const SubmitQuote = () => {
  const [quoteAmount, setQuoteAmount] = useState("");

  const handleQuoteSubmission = (e) => {
    e.preventDefault();
    submitQuote();
  };

  const submitQuote = () => {
    console.log("Quote submitted:", quoteAmount);
  };
  return (
    <Box>
      <Heading size="xl" textAlign="center" mb={8}>
        Submit Quote
      </Heading>
      <Box p={4}>
        <form onSubmit={handleQuoteSubmission}>
          <Input placeholder="Enter quote amount" type="number" onChange={(e) => setQuoteAmount(e.target.value)} />
          <Button onClick={submitQuote}>Submit Quote</Button>
        </form>
      </Box>
    </Box>
  );
};

export default SubmitQuote;

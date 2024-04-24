import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BottomTab from "../components/BottomTab";
import BackButton from "../components/BackButton";

const Chat = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/customers`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  const handleCustomerClick = (customerId) => {
    navigate(`/chat/${customerId}`);
  };

  return (
    <Box position="relative">
      <BackButton />
      <Heading size="xl" textAlign="center" mb={8}>
        채팅
      </Heading>
      <Box p={4}>
        {customers.map((customer) => (
          <Box key={customer.id} borderWidth={1} borderRadius="md" p={4} mb={4} onClick={() => handleCustomerClick(customer.id)} cursor="pointer">
            <Text>
              <strong>Name:</strong> {customer.name}
            </Text>
            <Text>
              <strong>Email:</strong> {customer.email}
            </Text>
          </Box>
        ))}
      </Box>
      <BottomTab />
    </Box>
  );
};

export default Chat;

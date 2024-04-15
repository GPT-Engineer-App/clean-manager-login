import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";
import BackButton from "../components/BackButton";

const MySchedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Box position="relative">
      <BackButton />
      <Heading size="xl" textAlign="center" mb={8}>
        내일정
      </Heading>
      <Box p={4}>
        {events.map((event) => (
          <Box key={event.id} borderWidth={1} borderRadius="md" p={4} mb={4}>
            <Text>
              <strong>Title:</strong> {event.title}
            </Text>
            <Text>
              <strong>Date:</strong> {event.date}
            </Text>
            <Text>
              <strong>Location:</strong> {event.location}
            </Text>
          </Box>
        ))}
      </Box>
      <BottomTab />
    </Box>
  );
};

export default MySchedule;

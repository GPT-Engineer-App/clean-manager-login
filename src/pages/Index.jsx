import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Stack, Image, Text, Link } from "@chakra-ui/react";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        console.log("Login successful");
        navigate("/home");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Box display="flex" alignItems="center" justifyContent="center" h="100vh" bg="gray.50">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
        <Box textAlign="center">
          <Image src="https://images.unsplash.com/photo-1518631145805-509a14b04f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2UlMjBsb2dvfGVufDB8fHx8MTcxMzE1MTUxNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" mb={8} mx="auto" w="80px" />
          <Heading>청소매니저 로그인</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <Stack spacing={6}>
              <FormControl isRequired>
                <FormLabel>아이디</FormLabel>
                <Input type="text" placeholder="아이디를 입력하세요" value={username} onChange={(e) => setUsername(e.target.value)} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>비밀번호</FormLabel>
                <Input type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button colorScheme="blue" type="submit" width="full">
                로그인
              </Button>
            </Stack>
          </form>
        </Box>
        <Box mt={8} textAlign="center">
          <Text fontSize="sm">
            계정이 없으신가요?{" "}
            <Link color="blue.500" href="/signup">
              회원가입
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;

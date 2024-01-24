import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { HiMiniEye } from "react-icons/hi2";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const postDetails = (pics) => {};
  const submitHandler = () => {};
  return (
    <VStack p={"1px"}>
      <FormControl id="email" isRequired>
        <FormLabel fontSize={"small"} mb={"-12px"}>
          Email
        </FormLabel>
        <Input
          mb={"-8px"}
          fontSize={"small"}
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel fontSize={"small"} mb={"-8px"}>
          Password
        </FormLabel>
        <InputGroup>
          <Input
            mb={"-8px"}
            fontSize={"small"}
            type={show ? "text" : "password"}
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size={"sm"} onClick={handleClick}>
              {show ? <BsFillEyeSlashFill /> : <HiMiniEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 10 }}
        onClick={submitHandler}
      >
        Log in
      </Button>
      <Button
        variant={"solid"}
        colorScheme="red"
        width={"100%"}
        style={{ marginTop: 1 }}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Crediential
      </Button>
    </VStack>
  );
};

export default Login;

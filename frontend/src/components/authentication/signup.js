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

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const postDetails = (pics) => {};
  const submitHandler = () => {};

  return (
    <VStack p={"1px"}>
      <FormControl id="firstName" isRequired>
        <FormLabel fontSize={"small"} mb={"-12px"}>
          Name
        </FormLabel>
        <Input
          mb={"-8px"}
          placeholder="enter your name"
          fontSize={"small"}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
      <FormControl id="confirmPassword" isRequired>
        <FormLabel fontSize={"small"} mb={"-8px"}>
          Confirm Password
        </FormLabel>
        <InputGroup>
          <Input
            mb={"-8px"}
            fontSize={"small"}
            type={show ? "text" : "password"}
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              fontSize={"small"}
              h={"1.75rem"}
              size={"sm"}
              onClick={handleClick}
            >
              {show ? <BsFillEyeSlashFill /> : <HiMiniEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="Pic" isRequired>
        <FormLabel fontSize={"small"} mb={"-8px"}>
          Upload your picture
        </FormLabel>
        <Input
          h={"auto"}
          fontSize={"small"}
          type="file"
          p={"1.5"}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 5 }}
        onClick={submitHandler}
      >
        Sign up
      </Button>
    </VStack>
  );
};

export default Signup;

import React from "react";
import backgroundImage from "../../src/images/bg-img.jpeg";
import {
  Container,
  Box,
  Text,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
} from "@chakra-ui/react";

import Login from "../components/authentication/login";
import Signup from "../components/authentication/signup";

const Homepage = () => {
  return (
    <div
      className="text-3xl font-bold h-screen w-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container maxW={"sm"} centerContent>
        <Box
          display={"flex"}
          justifyContent={"center"}
          p={"3"}
          bg={"white"}
          w={"100%"}
          m={"40px 0 15px 0"}
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Text>Let's Chat</Text>
        </Box>
        <Box
          bg={"white"}
          w={"100%"}
          p={"2"}
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Tabs variant="soft-rounded">
            <TabList>
              <Tab width={"50%"}>Login</Tab>
              <Tab width={"50%"}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default Homepage;

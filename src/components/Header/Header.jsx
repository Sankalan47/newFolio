import {
  Box,
  Text,
  Avatar,
  chakra,
  shouldForwardProp,
  Container,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import "./Header.css";
import TweeterBtn from "../TweeterBtn/TweeterBtn";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import InteractiveMarquee from "../Marquee/Marquee";

const Header = () => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      <ChakraBox
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.1,
        }}
      >
        <Box
          maxW={{ lg: "900", md: "700", sm: "700" }}
          gap={"50px"}
          display={"flex"}
          height={"min-content"}
          flexDirection={"column"}
          flexWrap={"nowrap"}
          overflow={"visible"}
          alignItems={"center"}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            gap={"20px"}
            justifyContent="space-between"
            width={"100%"}
          >
            <Avatar
              name="Sankalan Dasgupta"
              height={"100px"}
              width={"100px"}
              src="/assets/icon.png"
            ></Avatar>
            <TweeterBtn />
          </Box>
          <Text
            as={"p"}
            fontSize={{ lg: 24, base: 20 }}
            fontWeight={500}
            textAlign={{ lg: "center", sm: "left", md: "center" }}
          >
            {"Hi!, I'm Sankalan Dasgupta, Software Engineer at"}{" "}
            <Text as="span" color={"purple.400"}>
              P360
            </Text>{" "}
            {
              ". I focus on building our web applications for managing our IOT solutions. With tools like Angular,React and Nodejs."
            }
          </Text>
          <Box maxW={{ sm: "90vw", base: "90vw", md: "100%" }}>
            <InteractiveMarquee />
          </Box>
          <Navbar />
        </Box>
      </ChakraBox>
      <Container maxW={{ md: "700", lg: "1000" }} mt={"50px"} padding={0}>
        <Outlet />
      </Container>
    </>
  );
};

export default Header;

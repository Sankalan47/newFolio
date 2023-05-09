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
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      <ChakraBox
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
        }}
      >
        <Box
          maxW={{ lg: "700", md: "700", sm: "350" }}
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
              src="../../../public/icon.png"
            />
            <TweeterBtn />
          </Box>
          <Text
            fontSize={24}
            fontWeight={700}
            color={"white"}
            textAlign={{ lg: "center", sm: "left", md: "center" }}
          >
            I&apos;m Sankalan, Software Engineer at P360. I focus on building
            our marketing site. With tools like Angular, React and Express.
          </Text>
          <Box maxW={{ sm: "300px", base: "300px", md: "100%" }}>
            <InteractiveMarquee />
          </Box>
          <Navbar />
        </Box>
      </ChakraBox>
      <Container maxW={{ md: "740px", lg: "918px" }} mt={"50px"} padding={0}>
        <Outlet />
      </Container>
    </>
  );
};

export default Header;

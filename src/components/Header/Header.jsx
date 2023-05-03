import { Box, Text, Avatar } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import "./Header.css";
const Header = () => {
  return (
    <Box
      maxW={{ lg: "700", md: "3xl", sm: "350" }}
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
        alignItems="center"
        justifyContent="space-between"
        width={"100%"}
      >
        <Avatar name="Sankalan Dasgupta" size="lg" />
        <button className="twitter__btn">
          <Text fontSize={24}>
            <BsTwitter />
          </Text>
        </button>
      </Box>
      <Text
        fontSize={24}
        fontWeight={700}
        color={"white"}
        textAlign={{ lg: "center", sm: "left", md: "center" }}
      >
        I&apos;m Sankalan, Software Engineer at P360. I focus on building our
        marketing site. With tools like Angular, React and Express.
      </Text>
    </Box>
  );
};

export default Header;

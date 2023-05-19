import { Text } from "@chakra-ui/react";
const Heading = () => {
  return (
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
  );
};

export default Heading;

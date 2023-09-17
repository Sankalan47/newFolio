import { Text } from "@chakra-ui/react";
import reactStringReplace from "react-string-replace";

const Heading = () => {
  let keywords = ["Sankalan Dasgupta", "P360", "Angular", "React", "Nodejs"];
  const content =
    "Hi!, I'm Sankalan Dasgupta, Software Engineer at P360. I focus on building our web applications for managing our IOT solutions. With tools like Angular,React and Nodejs.";

  let replacedText = "";

  keywords.forEach((key) => {
    return (replacedText = reactStringReplace(
      replacedText.length ? replacedText : content,
      key,
      (match) => (
        <Text color={"white"} as="span" key={match}>
          {match}
        </Text>
      )
    ));
  });

  return (
    <Text
      as={"p"}
      fontSize={{ lg: 24, base: 20 }}
      fontWeight={500}
      color={"#8f9ba8"}
      textAlign={{ lg: "center", sm: "left", md: "center" }}
    >
      {replacedText}
    </Text>
  );
};

export default Heading;

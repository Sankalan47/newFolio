import PropTypes from "prop-types";
import { Text } from "@chakra-ui/react";
import reactStringReplace from "react-string-replace";

const Description = ({ desc }) => {
  let keywords = [
    "Azure frontdoor",
    "Implemented Cookie based authentication",
    "increased Lighthouse score upto 20%",
    "reduced bundle size by 50%",
    "Nodejs",
    "Developed re-usable components",
    "Websockets",
  ];
  let replacedText = "";

  keywords.forEach((key) => {
    return (replacedText = reactStringReplace(
      replacedText.length ? replacedText : desc,
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
      fontSize={{ base: "0.8em", md: "1em" }}
      lineHeight={2}
      letterSpacing={1.5}
      fontWeight={400}
      color={"#8f9ba8"}
      marginBottom={"0.7em"}
    >
      {replacedText}
    </Text>
  );
};

Description.propTypes = {
  desc: PropTypes.string.isRequired,
};

export default Description;

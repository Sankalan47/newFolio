import PropTypes from "prop-types";
import { Button, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ElevatedButton = ({ slug, children }) => {
  const blogUrl = "https://sankalan.hashnode.dev/" + slug;
  return (
    <Box width={"100%"} position={"relative"}>
      <Button
        left={"0"}
        right={"0"}
        color={"black"}
        background={"black"}
        _hover={{ background: "black" }}
        pos={"absolute"}
        border={"2px solid black"}
      >
        {children}
      </Button>
      <Button
        as={motion.button}
        initial={{ y: -5, x: -5 }}
        border={"2px solid black"}
        whileHover={{ y: 0, x: 0 }}
        transition={{
          ease: "ease-in-out",
        }}
        transitionDuration={"0"}
        width={"100%"}
        background={"yellow.200"}
        color={"black"}
        href={blogUrl}
        target="_blank"
        rel="noreferrer"
        _hover={{ background: "yellow.200" }}
      >
        {children}
      </Button>
    </Box>
  );
};

ElevatedButton.propTypes = {
  children: PropTypes.node.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ElevatedButton;

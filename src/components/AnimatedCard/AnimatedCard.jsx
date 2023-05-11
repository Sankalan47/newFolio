import PropTypes from "prop-types";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.main, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const AnimatedCard = ({ children }) => {
  return (
    <ChakraBox
      initial={{ opacity: 0, scale: 0.3, y: 200 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
      }}
    >
      {children}
    </ChakraBox>
  );
};

AnimatedCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedCard;

import { Text } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";
import "./TweeterBtn.css";
const TweeterBtn = () => {
  return (
    <motion.button
      className="twitter__btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Text fontSize={24}>
        <BsTwitter />
      </Text>
    </motion.button>
  );
};

export default TweeterBtn;

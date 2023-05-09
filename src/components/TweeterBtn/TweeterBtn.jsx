import { Text, Box } from "@chakra-ui/react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import "./TweeterBtn.css";

const data = {
  socials: [
    {
      icon: <BsTwitter />,
      name: "Twitter",
      link: "",
      background: "var(--blue)",
      color: "var(--text)",
    },
    {
      icon: <BsGithub />,
      name: "Github",
      link: "",
      background: "var(--text)",
      color: "var(--sheet)",
    },
    {
      icon: <BsLinkedin />,
      name: "LinkedIn",
      link: "",
      background: "var(--blue)",
      color: "var(--text)",
    },
  ],
};

const TweeterBtn = () => {
  return (
    <Box display={"flex"} gap={"12px"}>
      {data.socials.map((social) => (
        <motion.button
          key={social.name}
          className="twitter__btn"
          style={{ background: social.background, color: social.color }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Text fontSize={20}>{social.icon}</Text>
        </motion.button>
      ))}
    </Box>
  );
};

export default TweeterBtn;

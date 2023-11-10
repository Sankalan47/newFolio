import { Text, Box } from "@chakra-ui/react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { Tooltip } from "@chakra-ui/react";
import "./TweeterBtn.css";

const data = {
  socials: [
    {
      icon: <BsTwitter />,
      name: "Twitter",
      link: "https://www.twitter.com/Sankalan47",
      background: "var(--blue)",
      color: "var(--text)",
    },
    {
      icon: <BsGithub />,
      name: "Github",
      link: "https://www.github.com/Sankalan47",
      background: "var(--text)",
      color: "var(--sheet)",
    },
    {
      icon: <BsLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sankalan-dasgupta/",
      background: "var(--blue)",
      color: "var(--text)",
    },
  ],
};

const TweeterBtn = () => {
  return (
    <Box display={"flex"} gap={"12px"}>
      {data.socials.map((social) => (
        <Tooltip
          key={social.name}
          label={social.name}
          placement="bottom"
          hasArrow
        >
          <motion.a
            className="twitter__btn"
            style={{
              background: social.background,
              color: social.color,
              userSelect: "none",
            }}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Text fontSize={20}>{social.icon}</Text>
          </motion.a>
        </Tooltip>
      ))}
    </Box>
  );
};

export default TweeterBtn;

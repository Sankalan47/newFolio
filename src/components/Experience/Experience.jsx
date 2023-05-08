import {
  Box,
  Text,
  chakra,
  shouldForwardProp,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const data = {
  experience: [
    {
      id: 1,
      role: "Software Engineer",
      company: "P360",
      start: "July, 2022",
      end: "",
      stack: ["React", "Angular", "Express", "Socket.io", "Redux"],
      description: ["hello", "bye", "go"],
      background: "#6532f2",
      color: "#fff",
      link: "https://www.p360.com",
    },
    {
      id: 2,
      role: "Intern",
      company: "P360",
      start: "February, 2022",
      end: "July, 2022",
      stack: ["React", "Angular", "Express", "Socket.io", "Redux"],
      description: ["hello", "bye", "go"],
      background: "#6532f2",
      color: "#fff",
      link: "https://www.p360.com",
    },
  ],
};

const Experience = () => {
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      {data.experience.map((exp) => (
        <ChakraBox
          initial={{ opacity: 0, scale: 0.3, y: 200 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.1,
          }}
          key={exp.id}
        >
          <Box
            as={motion.div}
            // whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            width={"100%"}
            background={exp.background}
            color={exp.color}
            padding={"1em"}
            margin={"1.2em"}
            borderRadius={"14px"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text fontSize={28}>{exp.role}</Text>
              <Text fontSize={23}>
                {exp.start} - {exp.end ? exp.end : "Present"}
              </Text>
            </Box>
            <Text fontSize={23}>{exp.company}</Text>
            <Box display={"flex"} alignItems={"center"}>
              {exp.stack.map((stack) => (
                <Text fontSize={20} key={stack}>
                  {stack}&nbsp;
                </Text>
              ))}
            </Box>
            <UnorderedList>
              {exp.description.map((desc) => (
                <ListItem key={desc}>{desc}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </ChakraBox>
      ))}
    </>
  );
};

export default Experience;

import {
  Box,
  Text,
  chakra,
  shouldForwardProp,
  UnorderedList,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const data = {
  experience: [
    {
      id: 1,
      role: "Software Engineer",
      company: "P360",
      start: "Jul, 2022",
      end: "",
      stack: ["React", "Angular", "Express", "Socket.io", "Redux"],
      description: ["hello", "bye", "go"],
      background: "#6A35FF",
      color: "#fff",
      link: "https://www.p360.com",
    },
    {
      id: 2,
      role: "Intern",
      company: "P360",
      start: "Feb, 2022",
      end: "Jul, 2022",
      stack: ["React", "Angular", "Express", "Socket.io", "Redux"],
      description: ["hello", "bye", "go"],
      background: "#ffa133",
      color: "#000",
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
            whileHover={{ scale: 0.98 }}
            width={"100%"}
            zIndex={2}
            background={exp.background}
            color={exp.color}
            padding={"1.2em"}
            marginBottom={"1.2em"}
            borderRadius={"5px"}
            border={"2px solid white"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text fontSize={"1.75em"} fontWeight={700}>
                {exp.role}
              </Text>
              <Text fontSize={"1em"} fontWeight={500}>
                {exp.start} - {exp.end ? exp.end : "Present"}
              </Text>
            </Box>
            <Text fontSize={"1.43em"}>{exp.company}</Text>
            <SimpleGrid
              columns={{ sm: 10, md: 10, base: 3 }}
              // width={"100%"}
              spacingX="10px"
              spacingY="5px"
            >
              {exp.stack.map((stack) => (
                <Text
                  fontSize={"1em"}
                  key={stack}
                  width={"min-content"}
                  color={exp.color}
                >
                  {stack}
                </Text>
              ))}
            </SimpleGrid>
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

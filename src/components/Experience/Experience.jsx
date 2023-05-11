import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import AnimatedCard from "../AnimatedCard/AnimatedCard";

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
  const bg = useColorModeValue("blackAlpha.50", "blackAlpha.300");

  return (
    <>
      {data.experience.map((exp) => (
        <AnimatedCard key={exp.id}>
          <Box
            as={motion.div}
            whileHover={{ scale: 0.98 }}
            width={"100%"}
            background={bg}
            // color={"var(--chakra-colors-black)"}
            padding={"1.2em"}
            marginBottom={"1.2em"}
            borderRadius={"18px"}
          >
            <Grid templateColumns="repeat(5, 1fr)">
              <GridItem colSpan={3}>
                <Text fontSize={{ base: "150%" }} fontWeight={700}>
                  {exp.role}
                </Text>
                <Text fontSize={{ base: "1.43em" }}>{exp.company}</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text
                  fontSize={{ base: "1em" }}
                  fontWeight={500}
                  float={"right"}
                >
                  {exp.start} - {exp.end ? exp.end : "Present"}
                </Text>
              </GridItem>
            </Grid>
            <SimpleGrid
              columns={{ sm: 4, md: 6, base: 3, lg: 10 }}
              spacingX="10px"
              spacingY="10px"
            >
              {exp.stack.map((stack) => (
                <Text
                  fontSize={{ base: "1em" }}
                  key={stack}
                  width={"min-content"}
                  // color={"var(--chakra-colors-black)"}
                >
                  {stack}
                </Text>
              ))}
            </SimpleGrid>
            <br />
            <UnorderedList>
              {exp.description.map((desc) => (
                <ListItem key={desc}>
                  <Text
                    fontSize={{ base: "1.2em" }}
                    lineHeight={2}
                    fontWeight={500}
                  >
                    {desc}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </AnimatedCard>
      ))}
    </>
  );
};

export default Experience;

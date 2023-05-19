import { Box, Text, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
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
      description: [
        "Developed re-usable components. Reduced the complexity and redundancy of our codebase, and improved the maintainability of our system.",
        "Implemented Cookie based authentication to ensure application security. Using Nodejs and Azure frontdoor.",
        "Re-fractored the entire codebase and reduced bundle size by 50% to achieve higher performance",
        "Ensured frontend performance metrics and increased web-vitals score upto 20%",
        "Developed and optimized apis in nodejs to authenticate and associate devices to the user into the application.",
      ],
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
      description: [
        "Created Re-usable components to increase scalability.",
        "Created Apis using Nodejs.",
        "Used websockets to create api to gather live data of the devices to ensure 24/7 live monitoring.",
      ],
      background: "#ffa133",
      color: "#000",
      link: "https://www.p360.com",
    },
  ],
};

const Experience = () => {
  return (
    <>
      {data.experience.map((exp) => (
        <AnimatedCard key={exp.id}>
          <Box
            as={motion.div}
            whileHover={{ scale: 0.98 }}
            width={"100%"}
            background={"#151417"}
            padding={"1.2em"}
            marginBottom={"1.2em"}
            borderRadius={"18px"}
            border={"1px solid #fffa83"}
          >
            <Grid templateColumns="repeat(5, 1fr)">
              <GridItem colSpan={3}>
                <Text fontSize={{ base: "150%" }} fontWeight={700}>
                  {exp.role}
                </Text>
                <Text fontSize={{ base: "1.43em" }} color={"#ffca80"}>
                  {exp.company}
                </Text>
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
                >
                  {stack}
                </Text>
              ))}
            </SimpleGrid>
            <br />

            {exp.description.map((desc) => (
              <Text
                key={desc}
                fontSize={{ base: "0.8em", md: "1em" }}
                lineHeight={2}
                letterSpacing={1.5}
                fontWeight={400}
                color={"#8f9ba8"}
                marginBottom={"0.7em"}
              >
                {desc}
              </Text>
            ))}
          </Box>
        </AnimatedCard>
      ))}
    </>
  );
};

export default Experience;

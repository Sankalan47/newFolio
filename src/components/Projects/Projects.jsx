import { Text } from "@chakra-ui/react";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import BaseSkeleton from "../BaseSkeleton/BaseSkeleton";

const Projects = () => {
  return (
    <>
      <AnimatedCard>
        <Text fontSize={24} textAlign={"center"}>
          Coming soon ...
        </Text>
        <br />
        <BaseSkeleton />
      </AnimatedCard>
    </>
  );
};

export default Projects;

import { Box, Image, Text, Badge } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import AnimatedCard from "../../AnimatedCard/AnimatedCard";
import { FiArrowUpRight } from "react-icons/fi";

const Project = ({ name, url, desc, img, tags }) => {
  return (
    <>
      <AnimatedCard>
        <Box
          cursor={"pointer"}
          as={motion.article}
          whileHover={{ scale: 0.98 }}
          borderRadius={"20px"}
          padding={{
            base: "1rem",
            md: "2rem",
            lg: "3rem",
          }}
          margin={{
            base: "0rem 0rem 1rem 0rem",
            md: "0rem 0rem 2rem 0rem",
            lg: "3rem",
          }}
          backgroundColor={"#121831"}
          _hover={{ textDecoration: "underline" }}
        >
          <Box as="a" href={url} target="_blank" rel="noopener noreferrer">
            <Image
              aspectRatio={"1.9"}
              height={{ base: 250, md: 400, lg: 500 }}
              width={"100%"}
              src={img}
              fallback="Loading"
              objectFit={"cover"}
              alt={name}
              borderRadius={"20px"}
            />
          </Box>
          <br />
          <Box
            width={"100%"}
            as="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              fontSize={{ base: 20, md: 24 }}
              fontWeight={700}
              display={"flex"}
              alignItems={"center"}
            >
              {name}&nbsp; <FiArrowUpRight />
            </Text>
            {tags.map((tag, index) => (
              <Badge
                variant="subtle"
                colorScheme="green"
                key={index}
                marginRight={"5px"}
                borderRadius={"15px"}
                padding={"0.3rem"}
                fontSize={{ base: "0.5rem", md: "0.8em" }}
              >
                {tag}
              </Badge>
            ))}
            <br />
            <Text
              fontSize={{ base: 12, md: 18 }}
              color={"gray.400"}
              fontWeight={700}
              marginTop={"10px"}
            >
              {desc}
            </Text>
            <br />
          </Box>
        </Box>
      </AnimatedCard>
    </>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;

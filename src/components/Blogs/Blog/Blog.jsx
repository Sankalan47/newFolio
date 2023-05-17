import PropTypes from "prop-types";
import { Box, Image, Text, Divider, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AnimatedCard from "../../AnimatedCard/AnimatedCard";
import ElevatedButton from "../../ElevatedButton/ElevatedButton";

const Blog = ({ blogData }) => {
  const url = "https://sankalan.hashnode.dev/" + blogData.slug;
  const { colorMode } = useColorMode();

  return (
    <>
      <AnimatedCard>
        <Box
          cursor={"pointer"}
          as={motion.article}
          whileHover={{ scale: 0.98 }}
          borderRadius={"5px"}
          border={"1px"}
          borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
          padding={"1rem"}
          _hover={{ textDecoration: "underline" }}
        >
          <Box as="a" href={url} target="_blank" rel="noopener noreferrer">
            <Image
              aspectRatio={"1.9"}
              src={blogData.coverImage}
              fallback="Loading"
              alt={blogData.slug}
              borderRadius={"5px"}
            />
            <br />
            <Divider />
            <br />
            <Box width={"100%"}>
              <Text fontSize={{ base: 24 }} fontWeight={700}>
                {blogData.title}
              </Text>
              <Text fontSize={{ base: 14 }} color={"gray.500"} fontWeight={700}>
                {blogData.brief.slice(0, -120)}
                {"..."}
              </Text>
              <br />
              <ElevatedButton slug={blogData.slug}>Read More</ElevatedButton>
            </Box>
          </Box>
        </Box>
      </AnimatedCard>
    </>
  );
};

Blog.propTypes = {
  blogData: PropTypes.shape({
    brief: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blog;

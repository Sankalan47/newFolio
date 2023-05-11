import PropTypes from "prop-types";
import { Box, Image, Text, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AnimatedCard from "../../AnimatedCard/AnimatedCard";
const Blog = ({ blogData }) => {
  return (
    <>
      <AnimatedCard>
        <Box
          as={motion.article}
          whileHover={{ scale: 0.98 }}
          borderRadius={"5px"}
          background={"#131934"}
          padding={"1rem"}
        >
          <Image
            src={blogData.coverImage}
            fallback="Loading"
            alt={blogData.slug}
            borderRadius={"5px"}
          />
        </Box>
        <br />
        <Divider />
        <br />
        <Box width={"100%"}>
          <Text
            fontSize={{ base: 24 }}
            fontWeight={700}
            // _hover={}
          >
            {blogData.title}
          </Text>
          <Text fontSize={{ base: 16 }} color={"gray.500"} fontWeight={700}>
            {blogData.brief.slice(0, -120)}
            {"..."}
          </Text>
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

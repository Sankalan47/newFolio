import PropTypes from "prop-types";
import { Box, Image, Text, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AnimatedCard from "../../AnimatedCard/AnimatedCard";
import ElevatedButton from "../../ElevatedButton/ElevatedButton";

const Blog = ({ blogData }) => {
  const url = "https://sankalan.hashnode.dev/" + blogData.slug;

  return (
    <>
      <AnimatedCard>
        <Box
          cursor={"pointer"}
          as={motion.article}
          whileHover={{ scale: 0.98 }}
          borderRadius={"5px"}
          border={"1px"}
          borderColor={"#fffa83"}
          padding={"1rem"}
          _hover={{ textDecoration: "underline" }}
        >
          <Box as="a" href={url} target="_blank" rel="noopener noreferrer">
            <Box minHeight={200}>
              <Image
                aspectRatio={"1.9"}
                height={200}
                width={"100%"}
                src={blogData.coverImage.url}
                fallback="Loading"
                alt={blogData.slug}
                borderRadius={"5px"}
              />
            </Box>
            <br />
            <Divider />
            <br />
            <Box width={"100%"}>
              <Text fontSize={{ base: 24 }} fontWeight={700}>
                {blogData.title}
              </Text>
              <Text fontSize={{ base: 14 }} color={"gray.500"} fontWeight={700}>
                {blogData.brief.slice(0, -200)}
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
    coverImage: PropTypes.shape({ url: PropTypes.string.isRequired }),
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blog;

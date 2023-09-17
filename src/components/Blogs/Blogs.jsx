import useSWR from "swr";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GET_BLOGS } from "../../utils/query/query";
import { fetcher } from "../../utils/fetcher/fetcher";

import BaseSkeleton from "../BaseSkeleton/BaseSkeleton";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const { data, error, isLoading } = useSWR(GET_BLOGS, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  });

  return (
    <>
      {isLoading && !error && <BaseSkeleton />}
      {!isLoading && error && (
        <>
          <Text fontSize={24} textAlign={"center"}>
            Something is Wrong!
          </Text>
          <br />
          <Text as="p" fontSize={24} textAlign={"center"} color={"blue"}>
            Visit{" "}
            <Text
              textDecoration="underline"
              as="a"
              href="https://sankalan.hashnode.dev"
              target="_blank"
              rel="noreferrer"
            >
              sankalan.hashnode.dev{" "}
            </Text>
            to view all my bolgs
          </Text>
        </>
      )}
      {!isLoading && !error && data.user.publication.posts.length && (
        <>
          {/* <SimpleGrid columns={{ base: 1 }} spacingX="2em" spacingY="1em"> */}
          {data.user.publication.posts.map((blog) => (
            <Blog key={blog.title} blogData={blog} />
          ))}
          {/* </SimpleGrid> */}
        </>
      )}
    </>
  );
};

export default Blogs;

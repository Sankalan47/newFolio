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
  const lazyData = [
    {
      brief:
        "Infinite scrolling is a popular technique in web development that allows you to load content as the user scrolls down a web page, eliminating the need for pagination buttons. In this blog post, we'll learn how to implement infinite scroll in a React ...",
      coverImage:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1699542643244/921cc1cc-6b7e-48b4-8d7d-483565844669.jpeg",
      slug: "implementing-infinite-scroll-in-a-react-application",
      title: "Implementing Infinite Scroll in a React Application",
    },
    {
      brief:
        "Setup Development Environment for React Native in Windows using React Native CLI\nReact Native Cli Quick Start\nInstall Chocolatey on windows:\nIt is recommended by react native docs to use Chocolatey to install node.js and java runtime to your Windows ...",
      coverImage:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1690974937312/ff8d2203-de85-4ed7-baa3-189f39149f66.png",
      slug: "getting-started-with-react-native-windows",
      title: "Getting Started with React Native (Windows)",
    },
  ];
  console.log(data);
  return (
    <>
      {isLoading && !error && (
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacingX="2em"
            spacingY="1em"
          >
            {lazyData.map((blog, index) => (
              <Blog key={index} blogData={blog} />
            ))}
          </SimpleGrid>
          <br />
          <BaseSkeleton />
        </>
      )}
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
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacingX="2em"
            spacingY="1em"
          >
            {data.user.publication.posts.map((blog, index) => (
              <Blog key={index} blogData={blog} />
            ))}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default Blogs;

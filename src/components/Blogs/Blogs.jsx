import useSWR from "swr";
import { SimpleGrid } from "@chakra-ui/react";
import { GET_BLOGS } from "../../utils/query/query";
import { fetcher } from "../../utils/fetcher/fetcher";

import BaseSkeleton from "../BaseSkeleton/BaseSkeleton";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const loading = true;
  const mock = [
    {
      brief:
        "With the new launch of React 18, React introduced new hooks along with its unique features. Among them, the useTransition() hook is pretty interesting. This hook increases the performance and smoothness of your application and makes it better.\nWhy us...",
      coverImage:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1683109686118/f3090a55-07d5-4403-b5ff-928df93f8ec3.jpeg",
      slug: "usetransition-hook-explained",
      title: "useTransition() Hook Explained",
    },
    {
      brief:
        "With the new launch of React 18, React introduced new hooks along with its unique features. Among them, the useTransition() hook is pretty interesting. This hook increases the performance and smoothness of your application and makes it better.\nWhy us...",
      coverImage:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1683109686118/f3090a55-07d5-4403-b5ff-928df93f8ec3.jpeg",
      slug: "usetransition-hook-explained",
      title: "useTransition() ",
    },
  ];
  // const { data, error, isLoading } = useSWR(GET_BLOGS, fetcher);
  // console.log(data.user.publication.posts);

  return (
    <>
      {/* {loading && <BaseSkeleton />} */}
      {mock.length && (
        <SimpleGrid columns={{ lg: 2, base: 1 }} spacingX="2em" spacingY="1em">
          {mock.map((blog) => (
            <Blog key={blog.title} blogData={blog} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default Blogs;

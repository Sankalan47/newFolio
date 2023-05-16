import useSWR from "swr";
import { SimpleGrid } from "@chakra-ui/react";
import { GET_BLOGS } from "../../utils/query/query";
import { fetcher } from "../../utils/fetcher/fetcher";

import BaseSkeleton from "../BaseSkeleton/BaseSkeleton";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const { data, error, isLoading } = useSWR(GET_BLOGS, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <>
      {(isLoading || error) && <BaseSkeleton />}
      {!isLoading && data.user.publication.posts.length && (
        <SimpleGrid columns={{ lg: 2, base: 1 }} spacingX="2em" spacingY="1em">
          {data.user.publication.posts.map((blog) => (
            <Blog key={blog.title} blogData={blog} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default Blogs;

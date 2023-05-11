import { Stack, Skeleton } from "@chakra-ui/react";
const BaseSkeleton = () => {
  return (
    <Stack>
      <Skeleton
        height="15rem"
        borderRadius={5}
        // startColor="black.500"
        // endColor="var(--text-lighter)"
      />
      <Skeleton
        height="20rem"
        borderRadius={5}
        // startColor="black.500"
        // endColor="var(--text-lighter)"
      />
    </Stack>
  );
};

export default BaseSkeleton;

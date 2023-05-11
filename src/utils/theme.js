// 1. Import the utilities
import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  xs: "250px",
  //   sm: "300px",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  white: "#fff",
  // ...
};

// 3. Extend the theme
export const theme = extendTheme({ breakpoints, config, colors });

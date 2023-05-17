// 1. Import the utilities
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  xs: "250px",
  //   sm: "300px",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const styles = {
  global: (props) => ({
    body: {
      bg: mode("#fff", "#000")(props),
    },
  }),
};

const colors = {
  white: "#fff",
  // ...
};

// 3. Extend the theme
export const theme = extendTheme({ breakpoints, config, colors, styles });

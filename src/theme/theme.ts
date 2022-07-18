import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

// const theme = extendTheme({
//   styles: {
//     global: {
//       body: {
//         backgroudColor: "red.100",
//         color: "grey.800",
//       },
//     },
//   },
// });

// Version 2: Using functions
const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("gray.100", "gray.800")(props)
      }
    })
  }
});

export default theme;

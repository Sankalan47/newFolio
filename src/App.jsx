import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container
      maxW="100vw"
      minW={"270px"}
      bg="transparent"
      centerContent
      minH={"100vh"}
      padding={{
        base: "2.5em 1.25em 2.5em 1.25em",
        md: "5em 2.5em 5em 2.5em",
        lg: "5em 2.5em 5em 2.5em",
      }}
    >
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;

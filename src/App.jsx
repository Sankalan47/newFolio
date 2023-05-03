import "./App.css";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header/Header";

function App() {
  return (
    <Container
      maxW="100vw"
      minW={"360px"}
      bg="transparent"
      centerContent
      minH={"100vh"}
      padding={{
        lg: "5em 2.5em 5em 2.5em",
        sm: "2.5em 1.2em 2.5em 1.2em",
        md: "5em 2.5em 5em 2.5em",
      }}
    >
      <Header />
    </Container>
  );
}

export default App;

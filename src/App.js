import React from "react";
import Container from "./components/container";
import TodoPanel from "./components/todo";

const App = (props) => {
  return (
    <Container>
      <TodoPanel></TodoPanel>
    </Container>
  );
};

export default App;

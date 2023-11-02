import React from "react";
import Header from "./components/Header";
import {Container} from "@mui/material";
import ContentList from "./components/ContentList";

function App() {
  return (
    <>
      <Header />
      <Container>
        <ContentList />
      </Container>
    </>
  )
}


export default App;

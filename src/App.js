import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ReasonTwo from "./pages/ReasonTwo";
import ReasonThree from "./pages/ReasonThree";
import ReasonFour from "./pages/ReasonFour";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyle";
import styled from "styled-components";

const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  let location = useLocation();
  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/reasonTwo" component={ReasonTwo} />
          <Route path="/reasonThree" component={ReasonThree} />
          <Route path="/reasonFour" component={ReasonFour} />
        </Switch>
      </AnimatePresence>
      <h1>Happy Valentine Day</h1>
    </Section>
  );
}

export default App;

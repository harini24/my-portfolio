import React from "react";
import { AboutMe } from "./components/AboutMe";
import ExperienceContainer from "./components/Experience";
import { Introduction } from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Introduction />
      <AboutMe />
      <ExperienceContainer />
    </div>
  );
}

export default App;

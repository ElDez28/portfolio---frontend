import Intro from "./components/intro/Intro";
import Skills from "./components/mySkills/Skills";
import Sidebar from "./components/sidebar/Sidebar";
import MyProjects from "./components/myProjects/MyProjects";
import Feedback from "./components/Feedback/Feedback";
import { useState, useCallback } from "react";
import Contact from "./components/Contact/Contact";

window.addEventListener("load", function () {
  var viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    viewport.content + ", height=" + window.innerHeight
  );
});
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [skillVis, setSkillVis] = useState(false);
  const [reviewVis, setReviewVis] = useState(false);
  const skilsNav = useCallback((InView) => {
    if (InView) setSkillVis(true);
    if (!InView) setSkillVis(false);
  }, []);
  const reviewNav = useCallback((InView) => {
    if (InView) setReviewVis(true);
    if (!InView) setReviewVis(false);
  }, []);
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} closeBar={() => setIsOpen(false)}></Sidebar>
      <Intro
        reviewVis={reviewVis}
        skillVis={skillVis}
        openBar={() => setIsOpen(true)}
      ></Intro>
      <Skills showNav={skilsNav}></Skills>
      <MyProjects></MyProjects>
      <Feedback showNav={reviewNav}></Feedback>
      <Contact></Contact>
    </div>
  );
}

export default App;

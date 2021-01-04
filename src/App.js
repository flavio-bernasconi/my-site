import { useState } from "react";
import "./App.scss";
import { CardProject } from "./components/CardProject";
import { Intro } from "./components/Intro";
import { fetchDataFromPrismic } from "./helpers";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 8,
      staggerChildren: 9,
    },
  },
};

function App() {
  const [projects, setprojects] = useState([]);
  (async () => {
    const results = await fetchDataFromPrismic();
    results.sort(function (a, b) {
      const x = a.data.order[0].text;
      const y = b.data.order[0].text;
      return x - y;
    });
    setprojects(results);
  })();

  return (
    projects && (
      <>
        <Intro />
        <div className="wrapper">
          <div className="w-100">
            <p className="project-title">Projects</p>
          </div>
          {projects.map((project) => (
            <CardProject key={project.id} project={project.data} />
          ))}
        </div>
      </>
    )
  );
}

export default App;

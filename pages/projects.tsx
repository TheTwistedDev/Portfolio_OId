import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../types";
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation, stagger } from "../animations";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }} 
      variants={routeAnimation} 
      initial="initial" 
      animate="animate"
      exit="exit" >
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div 
        variants={stagger} animate="animate" initial="initial"
        className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" variants={fadeInUp}  key={project.name}>
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} key={project.id}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;


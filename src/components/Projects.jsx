import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>
            <div className="flex flex-col items-center gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                        key={index}
                        className="w-full max-w-4xl p-6 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg border border-gray-700 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_2px_rgba(0,191,255,0.6)]"
                    >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <h3 className="mb-4 text-2xl font-semibold text-white">
                                {project.title}
                            </h3>

                            <p className="mb-6 text-stone-300">{project.description}</p>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

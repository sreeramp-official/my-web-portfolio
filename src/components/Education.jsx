import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Education = () => {
    return (
        <div className="pb-4">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">
                Education
            </motion.h2>

            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duartion: 1 }} className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-stone-400">
                                {experience.year}
                            </p>
                            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duartion: 1 }} className="w-full max-w-xl lg:w-3/4">
                                <h3 className="mb-2 font-semibold">
                                    {experience.role} -{" "}
                                    <span className="text-sm text-stone-500">
                                        {experience.company}
                                    </span>
                                </h3>

                                <p className="mb-4 text-stone-400">
                                    {experience.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
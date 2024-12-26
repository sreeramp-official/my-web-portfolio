import { EDUCATION } from "../constants"
import { motion } from "framer-motion"

const Education = () => {
    return (
        <div className="pb-4">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">
                Education
            </motion.h2>

            <div>
                {EDUCATION.map((education, index) => (
                    <div
                        key={index}
                        className="mb-8 flex justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-xl p-6 rounded-lg bg-gray-900 shadow-neumorphism"
                        >
                            <p className="mb-2 text-sm text-stone-400">
                                {education.year}
                            </p>
                            <h3 className="mb-2 font-semibold text-lg text-white">
                                {education.university} <br />
                                <span className="text-sm text-stone-500">
                                    {education.course}
                                </span>
                            </h3>
                        </motion.div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Education
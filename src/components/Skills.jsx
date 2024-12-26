import { BiLogoTailwindCss } from "react-icons/bi"
import { FaGitAlt } from "react-icons/fa"
import { IoLogoPython } from "react-icons/io"
import { IoLogoCss3 } from "react-icons/io5"
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri"
import { TiHtml5 } from "react-icons/ti"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Skills = () => {
    return (
        <div className="pb-24">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">
                Skills
            </motion.h2>

            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">

                {/* Languages */}
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} class="p-4">
                    <TiHtml5 class="text-7xl text-orange-400" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(3)} class="p-4">
                    <IoLogoCss3 class="text-7xl text-blue-300" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(5)} class="p-4">
                    <RiJavascriptFill class="text-7xl text-yellow-400" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(2)} class="p-4">
                    <IoLogoPython class="text-7xl text-yellow-300" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(6)} class="p-4">
                    <b class="text-7xl text-blue-300">C</b>
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(4)} class="p-4">
                    <b class="text-7xl text-white">C++</b>
                </motion.div>

                {/* Technologies */}
                <motion.div initial="initial" animate="animate" variants={iconVariants(4.5)} class="p-4">
                    <RiReactjsLine class="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(6.5)} class="p-4">
                    <BiLogoTailwindCss class="text-7xl text-cyan-400" />
                </motion.div>

                {/* Others */}
                <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)} class="p-4">
                    <FaGitAlt class="text-7xl text-white" />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Skills
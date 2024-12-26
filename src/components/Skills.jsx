import { BiLogoTailwindCss } from "react-icons/bi"
import { FaGitAlt } from "react-icons/fa"
import { IoLogoPython } from "react-icons/io"
import { IoLogoCss3 } from "react-icons/io5"
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri"
import { TiHtml5 } from "react-icons/ti"
import { motion } from "framer-motion"
import { TbSql } from "react-icons/tb"
import { SiMysql } from "react-icons/si"

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
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4">
                    <TiHtml5 className="text-7xl text-orange-400 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                    <IoLogoCss3 className="text-7xl text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
                    <RiJavascriptFill className="text-7xl text-yellow-400 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
                    <IoLogoPython className="text-7xl text-yellow-300 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
                    <b className="text-7xl text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105">C</b>
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4">
                    <TbSql className="text-7xl text-yellow-300 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105" />
                </motion.div>

                {/* Technologies */}
                <motion.div initial="initial" animate="animate" variants={iconVariants(4.5)} className="p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(6.5)} className="p-4">
                    <BiLogoTailwindCss className="text-7xl text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105" />
                </motion.div>

                <motion.div initial="initial" animate="animate" variants={iconVariants(6.5)} className="p-4">
                    <SiMysql className="text-7xl text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105" />
                </motion.div>

                {/* Others */}
                <motion.div initial="initial" animate="animate" variants={iconVariants(1.5)} className="p-4">
                    <FaGitAlt className="text-7xl text-white transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105" />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Skills

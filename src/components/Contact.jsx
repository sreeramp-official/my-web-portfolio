import { FaLocationDot } from "react-icons/fa6";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="border-t border-stone-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl"
            >
                Get in Touch
            </motion.h2>

            <div className="text-center tracking-tighter">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 flex items-center justify-center gap-2"
                >
                    <FaLocationDot />
                    <span>{CONTACT.address}</span>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 flex items-center justify-center gap-2"
                >
                    <FaPhone />
                    <span>{CONTACT.phoneNo}</span>
                </motion.div>

                <motion.a
                    href={`mailto:${CONTACT.email}`}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 flex items-center justify-center gap-2"
                >
                    <MdEmail />
                    <span>{CONTACT.email}</span>
                </motion.a>
            </div>
        </div>
    );
};

export default Contact;

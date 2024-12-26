import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/sp-logo.png'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            {/* Logo Section */}
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home" className="transition-all duration-300">
                    <img
                        src={logo}
                        alt="Sreeram P logo"
                        className="mx-2 transition-all duration-300 hover:brightness-150 hover:drop-shadow-[0_0_15px_rgba(210,180,140,0.8)] hover:scale-105"
                        width={89}
                        height={150}
                    />
                </a>
            </div>

            {/* Social Icons */}
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/sreeram-p"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin Profile"
                    className="transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/sreeram3015"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github Profile"
                    className="transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 hover:scale-105"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.instagram.com/sreeram-p"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105"
                >
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default Navbar

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/sp-logo.png'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label='Home'>
                    <img src={logo} alt="Sreeram P logo" className='mx-2' width={89} height={150} />
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="www.linkedin.com/in/sreeram-p" target='_blank' rel='noopener noreferrer' aria-label='Linkedin Profile'>
                    <FaLinkedin />
                </a>

                <a href="https://github.com/sreeram3015" target='_blank' rel='noopener noreferrer' aria-label='Github Profile'>
                    <FaGithub />
                </a>

                <a href="www.linkedin.com/in/sreeram-p" target='_blank' rel='noopener noreferrer' aria-label='Instagram Profile'>
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
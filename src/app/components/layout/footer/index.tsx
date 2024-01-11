
import {
  PiInstagramLogoLight,
  PiFacebookLogoLight,
  PiLinkedinLogoLight
} from "react-icons/pi";


const Footer = () => {
  return (
    <footer className="text-center justify-center  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-32">
      <div>
        <ul className="flex justify-center text-white cursor-pointer ">
          <li className="p-4 ">
            <PiInstagramLogoLight size={30} />
          </li>
          <li className="p-4">
            <PiFacebookLogoLight size={30} />
          </li>
          <li className="p-4">
            <PiLinkedinLogoLight size={30} />
          </li>
        </ul>
      </div>
      <p><span>Inertia</span></p>
    </footer>
  )
}

export default Footer;
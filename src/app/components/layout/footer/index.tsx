
import {
  PiInstagramLogoLight,
  PiFacebookLogoLight,
  PiLinkedinLogoLight
} from "react-icons/pi";


const Footer = () => {
  return (
    <footer className="text-center justify-center  bg-blue-700 p-10">
      <div>
        <ul className="flex justify-center">
          <li className="p-4">
            <PiInstagramLogoLight />
          </li>
          <li className="p-4">
            <PiFacebookLogoLight />
          </li>
          <li className="p-4">
            <PiLinkedinLogoLight />
          </li>
        </ul>
      </div>
      <p><span>Inertia</span></p>
    </footer>
  )
}

export default Footer;
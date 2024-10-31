import { FaInstagram, FaPhone, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

function ContactBar() {
  const copyText = () => {
    navigator.clipboard.writeText("rohitdhall987@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between justify-end pb-4">
      {/* Email and CV button - hidden on small screens */}
      <div className="hidden md:flex items-center">
        <span className="text-sm text-gray-700" id="email">rohitdhall987@gmail.com</span>
        <button className="button-81 mx-2 text-xs md:text-sm px-4 py-1" role="button" onClick={copyText}>Copy</button>
        <button className="button-81 text-xs md:text-sm px-4 py-1" role="button">CV</button>
      </div>

      {/* Social Links - visible on all screens */}
      <div className="flex items-center gap-3 mt-3 md:mt-0">
        <a href="https://www.instagram.com/rohitdhall987/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl " />
        </a>
        <a href="#contact" className="">
          <FaPhone className="text-2xl " />
        </a>
        <a href="https://www.linkedin.com/in/rohitdhall987/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl " />
        </a>
        <a href="mailto:rohitdhall987@gmail.com">
          <FaEnvelope className="text-2xl" />
        </a>
        <a href="https://github.com/rohitdhall987" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl " />
        </a>
      </div>
    </div>
  );
}

export default ContactBar;

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex gap-4 mb-1 mt-6">

      <a
        href="https://github.com/VincentDev007"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-black/5 hover:-translate-y-1"
        aria-label="GitHub profile"
      >
        <FaGithub className="w-6 h-6 text-gray-500" />
      </a>

      <a
        href="https://www.linkedin.com/in/vincent-agra-329648264/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-black/5 hover:-translate-y-1"
        aria-label="LinkedIn profile"
      >
        <FaLinkedin className="w-6 h-6 text-gray-500" />
      </a>

      <a
        href={process.env.CONTACT_EMAIL ? `mailto:${process.env.CONTACT_EMAIL}` : '#'}
        className="w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-black/5 hover:-translate-y-1"
        aria-label="Email contact"
      >
        <FaEnvelope className="w-6 h-6 text-gray-500" />
      </a>

      <a
        href={process.env.CONTACT_PHONE ? `tel:${process.env.CONTACT_PHONE}` : '#'}
        className="w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-black/5 hover:-translate-y-1"
        aria-label="Phone contact"
      >
        <FaPhone className="w-6 h-6 text-gray-500" />
      </a>

    </div>
  );
}

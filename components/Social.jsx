import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Ankit-Khairwal", // Add your GitHub link here
  },
  {
    icon: <FaLinkedinIn />,
    path: "edin.com/in/ankit-khairwal-85a10a2a7/", // Add your LinkedIn link here
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path || "#"} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

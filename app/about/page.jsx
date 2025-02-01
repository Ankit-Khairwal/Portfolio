import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-accent-100 rounded-lg shadow-md">
      {/* Profile Image */}
      <div className="w-40 h-40 md:w-56 md:h-56 relative mb-6 md:mb-0">
        <Image
          src="/assets/Ankit.png" // Place your image in the public folder
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-blue-500"
        />
      </div>

      {/* About Text */}
      <div className="text-center md:text-left md:ml-8 max-w-lg">
        <h2 className="text-3xl font-bold text-blue-800">Hi, I'm [Ankit] 👋</h2>
        <p className="text-lg text-blue-600 mt-4">
          I'm a frontend developer passionate about building interactive and
          visually appealing web experiences. I specialize in *React, Next.js,
          Tailwind CSS*, and modern JavaScript frameworks.
        </p>
        <p className="text-lg text-blue-600 mt-2">
          I love writing clean, maintainable code and staying updated with the
          latest web technologies. Let's create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;

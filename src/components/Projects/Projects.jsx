import AnimatedCard from "../AnimatedCard/AnimatedCard";
import Project from "./Project/Project";

const Projects = () => {
  const projects = [
    {
      name: "Devfest Siliguri 2023",
      url: "https://gdgsiliguri.com/",
      img: "https://ik.imagekit.io/sankalan/portfolio/projects/Screenshot%20(97).png?updatedAt=1699642487178",
      desc: "The official Website of Devfest Siliguri, Made with Angular Universal & Firebase",
      tags: ["Angular Universal", "Firebase", "Tailwind"],
    },
    {
      name: "Sketchbook",
      url: "https://sketchbook-eta-coral.vercel.app/",
      img: "https://ik.imagekit.io/sankalan/portfolio/projects/sketchbook.png?updatedAt=1699639896102",
      desc: "Online drawing tool made with next, socket.io and tailwind",
      tags: ["Next", "Socket.io", "Tailwind"],
    },
  ];
  return (
    <>
      <AnimatedCard>
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            img={project.img}
            url={project.url}
            desc={project.desc}
            tags={project.tags}
          />
        ))}
      </AnimatedCard>
    </>
  );
};

export default Projects;

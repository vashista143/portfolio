import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ChatterSpace - Real-time Chat App",
    description:
      "ChatterSpace is a full-stack MERN real-time chat application with authentication, private chats, profile customization, and WebSocket integration. It enables seamless messaging with JWT-based authentication and Cloudinary profile management.",
    image: "projects/chatterspace.png", 
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    demoUrl: "https://chatterspace.vercel.app/",
    githubUrl: "https://github.com/vashista143/chatterspace",
  },
  {
  id: 2,
  title: "Multi Login RBAC Task Manager",
  description:
    "A role based task management app with separate user and admin areas. Users can create update delete and view their own tasks. Admins can manage all users and edit any users tasks.",
  image: "projects/multi login task manager.png",
  tags: ["React", "Expressjs", "MongoDB", "JWT"],
  demoUrl: "https://panscience-assignment-ten.vercel.app/",
  githubUrl: "https://github.com/vashista143/multi-login-task-manager"
},
  {
  id: 3,
  title: "JioCinema Clone",
  description:
    "A frontend JioCinema clone built with React to showcase my expertise in modern UI development. It replicates the core streaming interface with features like dynamic movie cards, responsive layouts, and smooth navigation for a seamless user experience.",
  image: "/projects/jiocinemaclone.png",
  tags: ["React", "Tailwind", "JavaScript"],
  demoUrl: "https://vashista-jiocinema-clone.netlify.app/",
  githubUrl: "https://github.com/vashista143/jiocinema-clone"
}
];

const PROJECTS_PER_PAGE = 3;

export const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-amber-600"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 mt-[-5%]"
                />
              </div>

              <div className="p-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-muted/80  hover:text-amber-600 disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          <span className="px-4 py-2  text-muted-foreground text-amber-600 text-sm">
           <span className="text-white"> Page</span> <span className="text-lg">{currentPage}</span> <span className="text-white">of</span> <span className="text-white">{totalPages}</span>
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-muted/80 hover:text-amber-600 disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 bg-amber-600"
            target="_blank"
            href="https://github.com/vashista143/"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

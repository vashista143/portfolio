import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "HTML5, CSS3, JavaScript (ES6+)", level: 95, category: "frontend" },
  { name: "Python", level: 75, category: "other languages" },
  { name: "C & C++", level: 70, category: "other languages" },

  // Frameworks & Libraries
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Embedded JavaScript (EJS)", level: 75, category: "frontend" },

  // Backend & Server-side
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },

  // Databases
  { name: "MongoDB", level: 70, category: "databases" },
  { name: "SQL", level: 65, category: "databases" },

  // API Integration
  { name: "REST API", level: 85, category: "backend" },
  { name: "User Authentication Session Management with JWT", level: 75, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Adobe XD", level: 80, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Kubernetes", level: 60, category: "tools" },
];

const categories = ["all", "frontend", "backend", "databases", "tools", "other languages"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-amber-600">Skills</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "text-amber-600 "
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-600 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

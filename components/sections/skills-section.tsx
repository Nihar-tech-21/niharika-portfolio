"use client";

import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/ui/section";
import { Code, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming & CS Fundamentals",
    skills: ["Java", "DSA", "OOPs", "JavaScript", "SQL", "Computer Networks"],
  },
  {
    icon: Palette,
    title: "Full Stack Development",
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "MERN Stack",
      "Bootstrap",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Axios",
      "REST APIs",
      "Postman",
      "CORS",
      "bcrypt",
      "AWS Cloud",
    ],
  },
];

export function SkillsSection() {
  return (
    <Section
      id="skills"
      label="SKILLS"
      title="Technical Expertise"
      className="bg-card"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <FadeIn key={category.title} delay={index * 0.1}>
            <div className="p-6 bg-background rounded-xl border border-border">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm text-muted-foreground bg-secondary rounded-md border border-border hover:border-primary/30 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

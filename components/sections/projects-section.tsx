"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section, FadeIn } from "@/components/ui/section";
import { ArrowRight, GithubIcon } from "lucide-react";

const projects = [
  {
    title: "Nexus Quiz Platform",
    badge: "FULL STACK",

    description:
      "A scalable full-stack quiz platform built for colleges, workshops, and technical events to create, conduct, and manage quizzes seamlessly in real time.",

    features: [
      "Secure authentication and role-based access using JWT",
      "Real-time leaderboard, participant tracking, and analytics",
      "CSV export support for efficient result management",
    ],

    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    image: "/projects/nexus.png",

    caseStudyUrl: "https://nexus-jet-two.vercel.app/",

    repoUrl: "https://github.com/Nihar-tech-21/nexus",
  },
  {
    title: "CSI Official Website",
    badge: "MERN STACK",

    description:
      "Official website developed and maintained for CSI MIET to serve as the primary digital platform for student activities, events, and community engagement.",

    features: [
      "Responsive and modern UI for seamless accessibility",
      "Centralized platform for events, announcements, and updates",
      "Optimized frontend performance and user experience",
    ],

    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],

    image: "/projects/csi.png",

    caseStudyUrl: "https://csi-mocha.vercel.app/",

    repoUrl: null,
  },
  {
    title: "Zerodha Clone",
    badge: "MERN STACK",

    description:
      "A modern trading platform interface inspired by Zerodha, featuring authentication, dashboard components, and responsive frontend architecture.",

    features: [
      "Secure user authentication and session handling",
      "Responsive dashboard and modular UI components",
      "Clean frontend architecture using React",
    ],

    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],

    image: "/projects/zerodha.png",

    caseStudyUrl: "https://zerodha-clone-frontend-sooty.vercel.app/",

    repoUrl: "https://github.com/Nihar-tech-21/Zerodha_clone",
  },
  {
    title: "WanderLust",
    badge: "FULL STACK",

    description:
      "A full-stack travel and destination booking platform with dynamic listings, authentication, and responsive user experience.",

    features: [
      "Authentication and authorization for secure access",
      "Dynamic property listing and management system",
      "Responsive UI built for smooth cross-device experience",
    ],

    techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],

    image: "/projects/wanderLust.png",

    caseStudyUrl: "https://wanderlust-qsz9.onrender.com/listings",

    repoUrl: "https://github.com/Nihar-tech-21/wanderLust",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" label="PROJECTS" title="Featured Work">
      <div className="space-y-12">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
                  <span className="inline-block px-2.5 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded w-fit">
                    {project.badge}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-primary border border-primary/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group/link"
                    >
                      LIVE DEMO
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    {project.repoUrl && (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        GITHUB
                        <GithubIcon className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="relative aspect-video lg:aspect-auto order-1 lg:order-2 p-6 bg-secondary/30">
                  <div className="relative h-full w-full rounded-xl overflow-hidden border border-border shadow-xl bg-background">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="w-3 h-3 rounded-full bg-green-400" />
                    </div>

                    <div className="relative h-[calc(100%-52px)]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

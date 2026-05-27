"use client";

import { Section, FadeIn } from "@/components/ui/section";
import { BriefcaseBusiness, GraduationCap, Trophy, Cloud } from "lucide-react";

const experiences = [
  {
    title: "Web Development Head — CSI MIET",
    date: "2025 — PRESENT",
    description:
      "Leading web development initiatives for CSI MIET, contributing to the official website, technical activities, and digital experiences for the student community.",
    type: "leadership",
  },

  {
    title: "IEEE Student Member",
    date: "2025 — PRESENT",
    description:
      "Active IEEE student member, engaging with technical communities, industry trends, and professional development activities.",
    type: "leadership",
  },

  {
    title: "B.Tech Computer Science Engineering — MIET, Meerut",
    date: "2023 — PRESENT",
    description:
      "Currently pursuing B.Tech in Computer Science Engineering with a CGPA of 8.5, while actively building expertise in Software Engineering, Full Stack Development, and Data Structures & Algorithms.",
    type: "education",
  },

  {
    title: "NPTEL Programming in Java — Top 2%",
    date: "2025",
    description:
      "Qualified among the Top 2% performers in the NPTEL Programming in Java course, strengthening problem-solving and object-oriented programming fundamentals.",
    type: "achievement",
  },

  {
    title: "AWS Cloud Certifications",
    date: "IN PROGRESS",
    description:
      "Currently preparing for AWS Certified Cloud Practitioner, with plans to pursue AWS Solutions Architect to deepen cloud computing expertise.",
    type: "certification",
  },
];

const typeConfig = {
  leadership: {
    icon: BriefcaseBusiness,
    color: "bg-blue-500",
  },

  education: {
    icon: GraduationCap,
    color: "bg-emerald-500",
  },

  achievement: {
    icon: Trophy,
    color: "bg-yellow-500",
  },

  certification: {
    icon: Cloud,
    color: "bg-purple-500",
  },
};

export function ExperienceSection() {
  return (
    <Section
      id="journey"
      label="JOURNEY"
      title="Leadership & Learning"
      className="bg-card"
    >
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <FadeIn key={exp.title} delay={index * 0.1}>
            <div className="relative pl-12 pb-10 last:pb-0 border-l-2 border-border last:border-transparent">
              {(() => {
                const config = typeConfig[exp.type as keyof typeof typeConfig];

                const Icon = config.icon;

                return (
                  <div
                    className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md -translate-x-4 ${config.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                );
              })()}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.title}
                </h3>
                <span className="text-sm font-medium text-primary whitespace-nowrap">
                  {exp.date}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

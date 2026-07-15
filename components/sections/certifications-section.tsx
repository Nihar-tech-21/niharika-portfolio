"use client";

import { Section, FadeIn } from "@/components/ui/section";
import {
  Cloud,
  Code,
  Database,
  BrainCircuit,
  BadgeCheck,
  Cpu,
} from "lucide-react";

const certifications = [
  {
    icon: Cloud,
    badge: "AWS CERTIFIED",
    badgeColor: "bg-amber-500/10 text-amber-600",
    title: "Cloud Practitioner (CLF-C02)",
    subtitle: "AWS Certified Cloud Practitioner",
    status: "Earned",
    statusColor: "bg-green-500/10 text-green-600",
  },

  {
    icon: Cloud,
    badge: "NEXT GOAL",
    badgeColor: "bg-indigo-500/10 text-indigo-600",
    title: "Solutions Architect Associate",
    subtitle: "Currently Preparing (SAA-C03)",
    status: "In Progress",
    statusColor: "bg-yellow-500/10 text-yellow-600",
  },

  {
    icon: BadgeCheck,
    badge: "AWS ACADEMY",
    badgeColor: "bg-orange-500/10 text-orange-600",
    title: "Cloud Architecting",
    subtitle: "AWS Academy Graduate • 60 Hours",
    status: "Completed",
    statusColor: "bg-green-500/10 text-green-600",
  },

  {
    icon: BadgeCheck,
    badge: "AWS ACADEMY",
    badgeColor: "bg-orange-500/10 text-orange-600",
    title: "Cloud Foundations",
    subtitle: "AWS Academy Graduate • 20 Hours",
    status: "Completed",
    statusColor: "bg-green-500/10 text-green-600",
  },

  {
    icon: Code,
    badge: "NPTEL TOP 2%",
    badgeColor: "bg-blue-500/10 text-blue-600",
    title: "Programming in Java",
    subtitle: "Top 2% Performer",
    status: "Earned",
    statusColor: "bg-green-500/10 text-green-600",
  },

  {
    icon: BrainCircuit,
    badge: "MICROSOFT",
    badgeColor: "bg-sky-500/10 text-sky-600",
    title: "AI Research Agents",
    subtitle: "Applied Skills Certification",
    status: "Earned",
    statusColor: "bg-green-500/10 text-green-600",
  },

  {
    icon: Cpu,
    badge: "AI",
    badgeColor: "bg-purple-500/10 text-purple-600",
    title: "YUVA AI for ALL",
    subtitle: "HCL GUVI Certification",
    status: "Earned",
    statusColor: "bg-green-500/10 text-green-600",
  },

  {
    icon: Database,
    badge: "MONGODB",
    badgeColor: "bg-emerald-500/10 text-emerald-600",
    title: "Introduction to MongoDB",
    subtitle: "Student Certification",
    status: "Earned",
    statusColor: "bg-green-500/10 text-green-600",
  },
];

export function CertificationsSection() {
  return (
    <Section
      id="learning"
      label="CERTIFICATIONS"
      title="Learning & Credentials"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, index) => (
          <FadeIn key={cert.subtitle} delay={index * 0.1}>
            <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary">
                  <cert.icon className="w-5 h-5 text-primary" />
                </div>

                <span
                  className={`px-2 py-1 text-[10px] font-semibold uppercase tracking-wider rounded ${cert.badgeColor}`}
                >
                  {cert.badge}
                </span>
              </div>

              {cert.title && (
                <h4 className="text-sm font-bold text-foreground mb-1">
                  {cert.title}
                </h4>
              )}

              <p className="text-sm text-muted-foreground mb-4">
                {cert.subtitle}
              </p>

              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${cert.statusColor}`}
              >
                {cert.status === "In Progress" ? "🚀" : "✔"} {cert.status}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Additional Learning: AWS Academy Cloud Foundations • NPTEL Design &
          Analysis of Algorithms (Elite) • NPTEL Soft Skills (Elite)
        </p>
      </div>
    </Section>
  );
}

"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium text-primary bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-foreground">NIHARIKA DHAKA</span>
              <br />
              <span className="text-primary">SOFTWARE ENGINEER</span>
              <br />
              <span className="text-primary">& FULL STACK DEVELOPER</span>
            </h1>

            <p className="mt-6 text-base text-muted-foreground max-w-md leading-relaxed">
              Aspiring Software Engineer skilled in Java, DSA, and Full Stack
              Web Development. Passionate about building impactful digital
              products using MERN stack and solving real-world problems through
              code.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors group"
              >
                VIEW PROJECTS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-3">
                <Link
                  href="mailto:niharika.dhaka.20@gmail.com"
                  className="p-3 text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-secondary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Link>

                <Link
                  href="https://github.com/Nihar-tech-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-secondary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/niharika-dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-foreground border border-border rounded-md hover:bg-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-[480px] mx-auto rounded-3xl border border-primary/10 bg-card/80 backdrop-blur-xl shadow-xl overflow-hidden p-6 lg:p-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Engineering Profile
              </div>

              <div className="mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                  Building Software That Matters
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about Software Engineering, Full Stack Development,
                  Java, DSA, and Cloud Technologies.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "AWS Certified Cloud Practitioner(In progress)",
                  "Top 2% — NPTEL Programming in Java",
                  "Web Development Head — CSI MIET",
                  "IEEE Student Member",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-primary/[0.04] border border-primary/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                  Core Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "DSA",
                    "React",
                    "Node.js",
                    "MongoDB",
                    "AWS",
                    "OOPS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1.5 text-xs rounded-lg bg-secondary border border-border text-foreground hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 lg:mt-32 grid md:grid-cols-2 gap-8 items-start"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
              Building scalable web applications
              <br />
              with <span className="text-primary">clean code</span> and{" "}
              <span className="text-primary">real impact</span>.
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              B.Tech CSE student passionate about Software Engineering, Full
              Stack Development, and problem solving through Data Structures &
              Algorithms in Java. Ranked among the Top 2% performers in NPTEL
              Programming in Java and currently expanding expertise in Cloud
              Computing through AWS certifications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

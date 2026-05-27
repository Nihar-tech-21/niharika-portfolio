"use client";

import { useState } from "react";
import { Section, FadeIn } from "@/components/ui/section";
import { Send, GithubIcon, LinkedinIcon } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <Section
      id="contact"
      label="CONTACT"
      title="Let's Connect"
      className="bg-gradient-to-b from-card to-primary/[0.02]"
    >
      <div className="max-w-2xl border-t border-primary/20 pt-8">
        <FadeIn>
          <p className="text-muted-foreground mb-8">
            Currently open to Software Engineering internships, development
            opportunities, and meaningful collaborations. Feel free to connect
            for opportunities, projects, or technical discussions.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:niharika.dhaka.20@gmail.com"
              className="flex items-center justify-between p-5 bg-background/80 border border-border rounded-xl hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]"
            >
              <div>
                <p className="text-sm text-muted-foreground">EMAIL</p>
                <p className="font-medium text-foreground">
                  niharika.dhaka.20@gmail.com
                </p>
              </div>

              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-primary" />
              </div>
            </a>

            <a
              href="https://github.com/Nihar-tech-21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-background/80 border border-border rounded-xl hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]"
            >
              <div>
                <p className="text-sm text-muted-foreground">GITHUB</p>
                <p className="font-medium text-foreground">
                  github.com/Nihar-tech-21
                </p>
              </div>

              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <GithubIcon className="w-5 h-5 text-primary" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/niharika-dhaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-background/80 border border-border rounded-xl hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]"
            >
              <div>
                <p className="text-sm text-muted-foreground">LINKEDIN</p>
                <p className="font-medium text-foreground">
                  Connect Professionally
                </p>
              </div>

              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <LinkedinIcon className="w-5 h-5 text-primary" />
              </div>
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

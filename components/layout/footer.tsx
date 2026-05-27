import Link from "next/link";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Nihar-tech-21",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/niharika-dhaka/",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "mailto:niharika.dhaka.20@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-foreground">
              NIHARIKA DHAKA
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Niharika Dhaka. Building impactful digital
            experiences.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

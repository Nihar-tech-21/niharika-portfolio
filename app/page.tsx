import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  CertificationsSection,
  ContactSection,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

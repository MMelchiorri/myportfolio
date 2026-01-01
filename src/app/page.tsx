import HeroSection from '@/section/hero-section/hero-section'
import NavBar from '@/section/nav-bar-section/nav-bar'
import Project from '@/section/project-section/project'
import SkillsSection from '@/section/skills-section/skills-section'

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Project />
      <SkillsSection />
    </>
  )
}

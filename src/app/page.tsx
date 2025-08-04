import HeroSection from "@/section/hero-section/hero-section";
import NavBar from "@/section/nav-bar-section/nav-bar";
import Project from "@/section/project-section/project";
import Footer from "@/section/footer-section/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Project />
      <Footer />
    </>
  );
}

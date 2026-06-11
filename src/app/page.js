
import Contact from "@/components/home/Contact";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Journey";
import MyStory from "@/components/home/MyStory";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <MyStory />
      <FeaturedProjects />
      <TechStack />
      <Experience />
      <Contact />
    </main>
  );
}

import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Journey";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TechStack />
      <Experience />
      <Contact />
    </main>
  );
}

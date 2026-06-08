import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Subscribe from "@/components/home/Subscribe";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TechStack />
      <Contact />
      <Subscribe />
    </main>
  );
}

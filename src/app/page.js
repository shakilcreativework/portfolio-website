import ShaderBackground from "@/components/effects/ShaderBackground";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Subscribe from "@/components/home/Subscribe";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <main className="">
      <ShaderBackground colorFront="#8B5CF6">
        <Hero />
      </ShaderBackground>
      <TechStack />
      <Contact />
      <Subscribe />
    </main>
  );
}

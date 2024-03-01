import AboutMe from "@/components/main/AboutMe";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Introduction from "@/components/main/Introduction";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <AboutMe />
        <Introduction />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}

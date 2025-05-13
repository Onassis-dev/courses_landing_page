import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="h-14 bg-background/80 text-foreground backdrop-blur-sm fixed top-0 inset-x-0 z-50 border-b">
      <nav className="max-w-5xl mx-auto flex justify-between items-center text-sm h-full">
        <div className="flex flex-row gap-4">
          <a href="/">Inicio</a>
          <a href="/">Temas</a>
          <a href="/">Sobre mi</a>
          <a href="/">Horarios</a>
        </div>

        <a href="https://wa.me/573178235050">Inscribirse</a>
      </nav>
    </header>
  );
}

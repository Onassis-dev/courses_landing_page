export default function Header({
  getContactLink,
}: {
  getContactLink: (text?: string) => string;
}) {
  return (
    <header className="h-14 bg-background/80 text-foreground backdrop-blur-sm fixed top-0 inset-x-0 z-50 border-b">
      <nav className="max-w-5xl px-4 mx-auto flex sm:justify-between justify-center items-center text-sm h-full">
        <div className="flex flex-row gap-4">
          <a href="#">Inicio</a>
          <a href="#temas">Temas</a>
          <a href="#horarios">Horarios</a>
          <a href="#sobre-mi">Sobre mi</a>
        </div>

        <a className="hidden sm:block" href={getContactLink()}>
          Inscribirme
        </a>
      </nav>
    </header>
  );
}

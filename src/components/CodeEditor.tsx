import { File, Folder, Tree } from "@/components/magicui/file-tree";
import { useEffect, useState, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-markup";
import "./CodeEditor.css";

function useTypingAnimation(text: string) {
  const [displayedText, setDisplayedText] = useState("");
  const frameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const frameDuration = 1; // approximately 60fps

      if (elapsed >= frameDuration) {
        if (currentIndexRef.current < text.length) {
          setDisplayedText((prev) => prev + text[currentIndexRef.current]);
          currentIndexRef.current += 1;
          startTimeRef.current = timestamp;
        } else {
          return;
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text]);

  return { displayedText };
}

export function CodeEditor() {
  const htmlCode = `<!DOCTYPE html>
<html lang='es'>
  <head>
    <title>Clases de programación</title>
  </head>
  <body>
    <section>
      <h1>¡Bienvenido!</h1>
      <p>Aprende a programar aqui.</p>
    </section>
  </body>
</html>`;

  const { displayedText } = useTypingAnimation(htmlCode);

  return (
    <div className="border rounded-md bg-background grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] w-full max-w-5xl">
      <div className="col-span-2 border-b p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      <Tree
        className="p-4 border-r hidden sm:block"
        initialSelectedId="index.html"
        initialExpandedItems={["src"]}
      >
        <Folder value="src" element="src">
          <File value="main.js">main.js</File>
          <File value="style.css">style.css</File>
          <File value="index.html">index.html</File>
        </Folder>
        <File value="package.json">package.json</File>
        <File value="vite.config.js">vite.config.js</File>
      </Tree>

      <pre className="h-96 grid grid-cols-[auto_1fr]">
        <code className="flex-col h-full overflow-auto border-r p-4 px-2 text-muted-foreground text-sm hidden sm:flex">
          {new Array(14).fill(0).map((_, index) => (
            <span className="h-[19px]" key={index}>
              {index}
            </span>
          ))}
        </code>
        <pre className="language-markup code-editor !p-4">
          <code
            className="language-markup"
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                displayedText,
                Prism.languages.markup,
                "markup"
              ),
            }}
          />
        </pre>
      </pre>
    </div>
  );
}

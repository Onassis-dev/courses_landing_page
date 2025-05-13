import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Particles } from "@/components/magicui/particles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

export function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-20">
        <BlurFade delay={0.25} inView>
          <h1 className="text-8xl text-center max-w-5xl font-semibold py-6">
            <AuroraText>Aprende a Programar de la mejor manera</AuroraText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="text-center text-xl text-[#b2b2b2] max-w-3xl mb-6">
            En tan solo 3 meses desarrolla las habilidades necesarias para
            conseguir una carrera exitosa como programador
          </p>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <ShimmerButton>
            <AuroraText>Inscríbete ahora</AuroraText>
          </ShimmerButton>
        </BlurFade>
      </div>
      <Particles
        className="fixed inset-0 z-0"
        quantity={100}
        ease={50}
        color="#ffffff"
        refresh
      />
    </>
  );
}

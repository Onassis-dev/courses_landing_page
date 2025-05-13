import { Terminal, TypingAnimation } from "@/components/magicui/terminal";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Particles } from "@/components/magicui/particles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import {
  AppWindow,
  Calendar,
  Check,
  Clock,
  Code,
  Gamepad2,
  Globe,
  Laptop,
  MessageSquare,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { createFileRoute } from "@tanstack/react-router";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";

export const Route = createFileRoute("/")({
  component: App,
});

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center w-full pt-20 pb-16">
        <BlurFade delay={0.25} inView>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-center max-w-5xl font-semibold py-6">
            <AuroraText>Aprende a Programar en grupos reducidos</AuroraText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <p className="text-center text-lg md:text-xl text-[#b2b2b2] max-w-3xl mb-8 px-4">
            Domina las bases de la programación y desarrolla proyectos prácticos
            en un ambiente personalizado con solo 5 estudiantes por grupo
          </p>
        </BlurFade>

        <BlurFade
          delay={0.45}
          inView
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <ShimmerButton>
            <AuroraText>Reserva tu lugar</AuroraText>
          </ShimmerButton>
        </BlurFade>

        <BlurFade delay={0.55} inView className="w-full flex justify-center">
          <Terminal className="w-full max-h-96">
            <TypingAnimation text="Hola, soy Onassis" />
            <TypingAnimation text="Programador con experiencia en desarrollo web" />
            <TypingAnimation text="Te enseñaré a programar desde cero" />
            <TypingAnimation
              text="HTML, CSS, JavaScript y más..."
              className="text-emerald-400"
            />
            <TypingAnimation
              text="¡En grupos de solo 6 estudiantes!"
              className="text-yellow-400 font-bold"
            />
          </Terminal>
        </BlurFade>
      </section>

      {/* Acerca del Curso Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <AuroraText>¿Qué aprenderás?</AuroraText>
            </h2>
            <p className="text-center text-[#b2b2b2] max-w-2xl mx-auto mb-12">
              Un curso práctico donde aprenderás las bases de la programación
              mientras desarrollas proyectos reales
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="grid grid-cols-2 grid-rows-4 gap-8 max-w-5xl mx-auto grid-flow-col">
              <div className="relative bg-background p-5 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Fundamentos de Programación
                </h3>
                <p className="text-[#b2b2b2]">
                  Aprenderás los conceptos básicos de la lógica de programación,
                  variables, condicionales y bucles.
                </p>
              </div>

              <div className="relative bg-background p-5 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  HTML y CSS
                </h3>
                <p className="text-[#b2b2b2]">
                  Dominarás la estructura de páginas web y aprenderás a darles
                  estilo para crear interfaces atractivas.
                </p>
              </div>

              <div className="relative bg-background p-5 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  JavaScript
                </h3>
                <p className="text-[#b2b2b2]">
                  Aprenderás el lenguaje de programación más utilizado en la web
                  para crear interactividad en tus proyectos.
                </p>
              </div>

              <div className="relative bg-background p-5 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  Proyectos Prácticos
                </h3>
                <p className="text-[#b2b2b2]">
                  Desarrollarás proyectos reales como páginas web interactivas,
                  aplicaciones y juegos sencillos.
                </p>
              </div>

              <div className="relative bg-background p-6 rounded-xl border border-gray-800 row-span-4">
                <ShineBorder
                  shineColor={["#FFBE7B", "#FFBE7B"]}
                  duration={40}
                />

                <h3 className="text-2xl font-semibold mb-4">
                  Detalles del Curso
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-emerald-400 mt-1" />
                    <div>
                      <span className="font-medium">Duración:</span>
                      <p className="text-[#b2b2b2]">3 meses (24 sesiones)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-emerald-400 mt-1" />
                    <div>
                      <span className="font-medium">Horarios:</span>
                      <p className="text-[#b2b2b2]">
                        Lunes y Miércoles o Martes y Jueves
                      </p>
                      <p className="text-[#b2b2b2]">6:00 PM - 7:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-emerald-400 mt-1" />
                    <div>
                      <span className="font-medium">Tamaño del grupo:</span>
                      <p className="text-[#b2b2b2]">
                        Máximo 5 estudiantes para garantizar atención
                        personalizada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Laptop className="h-5 w-5 text-emerald-400 mt-1" />
                    <div>
                      <span className="font-medium">Requisitos:</span>
                      <p className="text-[#b2b2b2]">
                        Computadora con conexión a internet
                      </p>
                      <p className="text-[#b2b2b2]">
                        No se requiere experiencia previa en programación
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="h-5 w-5 text-emerald-400 mt-1" />
                    <div>
                      <span className="font-medium">Metodología:</span>
                      <p className="text-[#b2b2b2]">
                        Clases prácticas con ejercicios y proyectos reales
                      </p>
                      <p className="text-[#b2b2b2]">
                        Soporte personalizado durante y después de las clases
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Horarios Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <AuroraText>Horarios Disponibles</AuroraText>
            </h2>
            <p className="text-center text-[#b2b2b2] max-w-2xl mx-auto mb-8">
              Elige el horario que mejor se adapte a tu agenda. Todas las clases
              tienen una duración de 1:30 horas.
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="relative bg-background text-foreground transition-colors border-emerald-500/30">
                <ShineBorder shineColor={["#009686", "#009686"]} />

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-emerald-400" />
                        Lunes y Miércoles
                      </CardTitle>
                    </div>
                    <Badge className="bg-emerald-500">Disponible</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-emerald-400" />
                      <span>6:00 PM - 7:30 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-emerald-400" />
                      <span>Grupo reducido (máximo 5 estudiantes)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-emerald-400" />
                      <span>4 lugares disponibles</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                    Seleccionar este horario
                  </Button>
                </CardFooter>
              </Card>

              <Card className="relative bg-background text-foreground border-purple-500/30">
                <ShineBorder shineColor={["#9450FF", "#9450FF"]} />

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-purple-400" />
                        Martes y Jueves
                      </CardTitle>
                    </div>
                    <Badge className="bg-purple-500">Disponible</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-purple-400" />
                      <span>6:00 PM - 7:30 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-purple-400" />
                      <span>Grupo reducido (máximo 5 estudiantes)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-purple-400" />
                      <span>4 lugares disponibles</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600">
                    Seleccionar este horario
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Proyectos Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <AuroraText>Proyectos que desarrollarás</AuroraText>
            </h2>
            <p className="text-center text-[#b2b2b2] max-w-2xl mx-auto mb-12">
              Aprende haciendo. Estos son algunos de los proyectos prácticos que
              construirás durante el curso.
            </p>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <BlurFade delay={0.3} inView>
              <Card className="bg-background text-foreground border-gray-800 overflow-hidden relative">
                <BorderBeam
                  duration={18}
                  size={200}
                  delay={2}
                  colorFrom="#009686"
                  colorTo="#009686"
                />

                <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                  <AppWindow className="h-16 w-16 text-emerald-400" />
                </div>
                <CardHeader>
                  <CardTitle>Página Web Personal</CardTitle>
                  <CardDescription>
                    Crea tu propio sitio web con HTML y CSS para mostrar tu
                    información y proyectos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">Responsive</Badge>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <Card className="bg-background text-foreground border-gray-800 overflow-hidden relative">
                <BorderBeam
                  duration={18}
                  delay={4}
                  size={200}
                  colorFrom="#9450FF"
                  colorTo="#9450FF"
                />
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center">
                  <Code className="h-16 w-16 text-purple-400" />
                </div>
                <CardHeader>
                  <CardTitle>Aplicación funcional</CardTitle>
                  <CardDescription>
                    Desarrolla una aplicación que resuelva un problema real.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">LocalStorage</Badge>
                    <Badge variant="outline">DOM</Badge>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <Card className="bg-background text-foreground border-gray-800 overflow-hidden relative">
                <BorderBeam
                  duration={18}
                  size={200}
                  delay={6}
                  colorFrom="#FFBE7B"
                  colorTo="#FFBE7B"
                />
                <div className="h-48 bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                  <Gamepad2 className="h-16 w-16 text-amber-400" />
                </div>
                <CardHeader>
                  <CardTitle>Juego Interactivo</CardTitle>
                  <CardDescription>
                    Crea un juego sencillo como un quiz o un juego de memoria
                    utilizando JavaScript.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Eventos</Badge>
                    <Badge variant="outline">Animaciones</Badge>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <BlurFade delay={0.2} inView className="md:w-2/5">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500 mx-auto">
                  <img
                    src="/placeholder.svg?height=320&width=320"
                    alt="Onassis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full p-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <AuroraText>Conoce a tu instructor</AuroraText>
              </h2>
              <h3 className="text-2xl font-semibold mb-2">Onassis Salinas</h3>
              <p className="text-[#b2b2b2] mb-6">
                Soy un programador enfocado en el desarrollo web. Inicie mi
                carrera programando videojuegos y desarrolle diversos proyectos,
                entre ellos{" "}
                <a
                  href="https://iglesiasbc.com"
                  target="_blank"
                  className="underline"
                >
                  IglesiasBC
                </a>
                , un SaaS. Asi como un sistema ERP personalizado para una
                empresa de manufactura en la cual trabajo actualmente
              </p>
              <p className="text-[#b2b2b2] mb-6">
                Todo lo que eh aprendido lo eh obtenido de forma autodidacta y
                mediante la practica, y quiero compartir este metodo contigo
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://onassis.dev/es" target="_blank">
                    <Globe className="h-4 w-4" />
                    Portafolio
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://wa.me/526642956883" target="_blank">
                    <MessageSquare className="h-4 w-4" />
                    Contacto
                  </a>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <AuroraText>Preguntas Frecuentes</AuroraText>
            </h2>
            <p className="text-center text-[#b2b2b2] max-w-2xl mx-auto mb-12">
              Resuelve tus dudas antes de inscribirte al curso.
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Necesito tener conocimientos previos de programación?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, el curso está diseñado para principiantes absolutos.
                    Comenzaremos desde lo más básico y avanzaremos gradualmente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Qué necesito para tomar el curso?
                  </AccordionTrigger>
                  <AccordionContent>
                    Solo necesitas una computadora con conexión a internet y
                    ganas de aprender. Utilizaremos herramientas gratuitas que
                    te guiaré a instalar durante las primeras clases.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Cómo son las clases?</AccordionTrigger>
                  <AccordionContent>
                    Las clases son prácticas y dinámicas. Cada sesión incluye
                    una explicación teórica seguida de ejercicios prácticos que
                    realizaremos juntos. Al ser grupos pequeños, puedo atender
                    las dudas de cada estudiante.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    ¿Qué pasa si no puedo asistir a una clase?
                  </AccordionTrigger>
                  <AccordionContent>
                    Todas las clases quedan grabadas y disponibles para que
                    puedas verlas en cualquier momento. Además, puedo programar
                    una breve sesión de dudas para ponerte al día.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    ¿Cuál es el costo del curso?
                  </AccordionTrigger>
                  <AccordionContent>
                    El curso tiene un costo de $X. Puedes pagar en una sola
                    exhibición o en dos pagos. Contáctame para conocer las
                    opciones de pago disponibles.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    ¿Recibiré algún certificado al finalizar?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sí, al completar el curso recibirás un certificado de
                    finalización. Sin embargo, lo más valioso serán los
                    proyectos que habrás desarrollado y que podrás mostrar en tu
                    portafolio.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <AuroraText>¡Comienza tu viaje en la programación!</AuroraText>
            </h2>
            <p className="text-xl text-[#b2b2b2] max-w-2xl mx-auto mb-8">
              Los grupos son limitados a solo 5 estudiantes. Reserva tu lugar
              ahora y da el primer paso hacia el mundo de la programación.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShimmerButton>
                <AuroraText>Reserva tu lugar</AuroraText>
              </ShimmerButton>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-4">
        <p className="text-center text-sm">
          Onassis Salinas @ {new Date().getFullYear()}
        </p>
      </footer>

      {/* Background Particles */}
      <Particles
        className="fixed inset-0 -z-10"
        quantity={60}
        ease={50}
        color="#ffffff"
        refresh
      />
    </div>
  );
}

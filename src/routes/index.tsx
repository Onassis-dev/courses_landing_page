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
  Github,
  Globe,
  Laptop,
  MapPin,
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
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CodeEditor } from "@/components/CodeEditor";

const textMuted = "text-[#b2b2b2]";
const available = [3, 5]; // Update this array with the number of available places for each schedule

export default function App({
  getContactLink,
}: {
  getContactLink: (text?: string) => string;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center w-full pt-20 pb-16">
        <BlurFade delay={0.25} inView>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-center max-w-6xl font-semibold py-6">
            <AuroraText>Domina la Programación Web desde Cero</AuroraText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <p
            className={`text-center text-lg md:text-xl ${textMuted} max-w-5xl mb-8 px-4`}
          >
            Aprende a crear sitios web y aplicaciones desde cero. Clases
            personalizadas con solo 5 estudiantes por grupo para maximizar tu
            aprendizaje
          </p>
        </BlurFade>

        <BlurFade
          delay={0.45}
          inView
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a href={getContactLink()} target="_blank">
            <ShimmerButton>
              <AuroraText>Reserva tu lugar</AuroraText>
            </ShimmerButton>
          </a>
        </BlurFade>

        <BlurFade
          delay={0.55}
          inView
          className="w-full flex justify-center px-4"
        >
          <CodeEditor />
        </BlurFade>
      </section>

      {/* Acerca del Curso Section */}
      <section className="relative z-10 py-20" id="temas">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <AuroraText>¿Qué aprenderás?</AuroraText>
            </h2>
            <p className={`text-center ${textMuted} max-w-2xl mx-auto mb-12`}>
              Un curso práctico donde aprenderás las bases de la programación
              mientras desarrollas proyectos reales
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="grid sm:grid-cols-2 sm:grid-rows-4 gap-8 max-w-5xl mx-auto sm:grid-flow-col">
              {[
                {
                  title: "Fundamentos de Programación",
                  description:
                    "Aprenderás los conceptos básicos de la lógica de programación, variables, condicionales y bucles.",
                },
                {
                  title: "HTML y CSS",
                  description:
                    "Dominarás la estructura de páginas web y aprenderás a darles estilo para crear interfaces atractivas.",
                },
                {
                  title: "JavaScript",
                  description:
                    "Aprenderás a crear interactividad, manejar eventos, trabajar con APIs y desarrollar aplicaciones web dinámicas.",
                },
                {
                  title: "Proyectos Prácticos",
                  description:
                    "Desarrollarás proyectos reales como páginas web interactivas, aplicaciones y juegos sencillos.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative bg-background p-5 rounded-xl border"
                >
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>
                    {item.title}
                  </h3>
                  <p className={textMuted}>{item.description}</p>
                </div>
              ))}

              <div className="relative bg-background p-6 rounded-xl border sm:row-span-4">
                <ShineBorder
                  shineColor={["#FFBE7B", "#FFBE7B"]}
                  duration={40}
                />

                <h3 className="text-2xl font-semibold mb-4">
                  Detalles del Curso
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Calendar,
                      title: "Duración:",
                      content: "3 meses (24 sesiones)",
                    },
                    {
                      icon: Clock,
                      title: "Horarios:",
                      content: "Lunes y Miércoles o Martes y Jueves",
                    },
                    {
                      icon: MapPin,
                      title: "Lugar:",
                      content:
                        "Clases en linea por zoom, tomalas desde cualquier lugar",
                    },
                    {
                      icon: Users,
                      title: "Tamaño del grupo:",
                      content:
                        "Máximo 5 estudiantes para garantizar atención personalizada",
                    },
                    {
                      icon: Laptop,
                      title: "Requisitos:",
                      content: "Computadora con conexión a internet",
                    },
                    {
                      icon: Code,
                      title: "Metodología:",
                      content:
                        "Clases prácticas con ejercicios y proyectos reales",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[auto_1fr] sm:gap-3 gap-2"
                    >
                      <item.icon className="size-5 mt-1 text-emerald-400" />
                      <div>
                        <span className="font-medium">{item.title}</span>
                        <p className={textMuted}>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Horarios Section */}
      <section className="relative z-10 py-16" id="horarios">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <AuroraText>Horarios Disponibles</AuroraText>
            </h2>
            <p className={`text-center ${textMuted} max-w-2xl mx-auto mb-8`}>
              Elige el horario que mejor se adapte a tu agenda. Todas las clases
              tienen una duración de 1:30 horas.
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  days: "Lunes y Miércoles",
                  color: "emerald",
                  icon: Calendar,
                  badge: "Disponible",
                  gradient: "from-emerald-500 to-teal-500",
                  hoverGradient: "from-emerald-600 to-teal-600",
                },
                {
                  days: "Martes y Jueves",
                  color: "purple",
                  icon: Calendar,
                  badge: "Disponible",
                  gradient: "from-purple-500 to-violet-500",
                  hoverGradient: "from-purple-600 to-violet-600",
                },
              ].map((schedule, i) => (
                <Card
                  key={schedule.days}
                  className={`relative bg-background text-foreground border-${schedule.color}-500/30`}
                >
                  <ShineBorder
                    shineColor={[
                      `#${schedule.color === "emerald" ? "009686" : "9450FF"}`,
                      `#${schedule.color === "emerald" ? "009686" : "9450FF"}`,
                    ]}
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="flex items-center gap-2">
                        <schedule.icon
                          className={`h-5 w-5 text-${schedule.color}-400`}
                        />
                        {schedule.days}
                      </CardTitle>
                      <Badge className={`bg-${schedule.color}-500`}>
                        {schedule.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock
                          className={`h-5 w-5 text-${schedule.color}-400`}
                        />
                        <span>6:00 PM - 7:30 PM</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users
                          className={`h-5 w-5 text-${schedule.color}-400`}
                        />
                        <span>Grupo reducido (máximo 5 estudiantes)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check
                          className={`h-5 w-5 text-${schedule.color}-400`}
                        />
                        <span>{available[i]} lugares disponibles</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={getContactLink(
                        `Hola, quiero inscribirme en el horario de ${schedule.days}.`
                      )}
                      target="_blank"
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${schedule.gradient} hover:${schedule.hoverGradient}`}
                      >
                        Seleccionar este horario
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
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
            <p className={`text-center ${textMuted} max-w-2xl mx-auto mb-12`}>
              Aprende haciendo. Estos son algunos de los proyectos prácticos que
              construirás durante el curso.
            </p>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: AppWindow,
                title: "Página Web Personal",
                description:
                  "Crea tu propio sitio web con HTML y CSS para mostrar tu información y proyectos.",
                badges: ["HTML", "CSS", "Responsive"],
                color: "emerald",
                delay: 0.3,
              },
              {
                icon: Code,
                title: "Aplicación funcional",
                description:
                  "Desarrolla una aplicación que resuelva un problema real.",
                badges: ["JavaScript", "LocalStorage", "DOM"],
                color: "purple",
                delay: 0.4,
              },
              {
                icon: Gamepad2,
                title: "Juego Interactivo",
                description:
                  "Crea un juego sencillo como un quiz o un juego de memoria utilizando JavaScript.",
                badges: ["JavaScript", "Eventos", "Animaciones"],
                color: "amber",
                delay: 0.5,
              },
            ].map((project) => (
              <BlurFade key={project.title} delay={project.delay} inView>
                <Card className="bg-background text-foreground overflow-hidden relative">
                  <BorderBeam
                    duration={18}
                    size={200}
                    delay={project.delay * 2}
                    colorFrom={`#${
                      project.color === "emerald"
                        ? "009686"
                        : project.color === "purple"
                        ? "9450FF"
                        : "FFBE7B"
                    }`}
                    colorTo={`#${
                      project.color === "emerald"
                        ? "009686"
                        : project.color === "purple"
                        ? "9450FF"
                        : "FFBE7B"
                    }`}
                  />
                  <div
                    className={`h-48 bg-gradient-to-br from-${
                      project.color
                    }-500/20 to-${
                      project.color === "emerald"
                        ? "teal"
                        : project.color === "purple"
                        ? "violet"
                        : "orange"
                    }-500/20 flex items-center justify-center`}
                  >
                    <project.icon
                      className={`h-16 w-16 text-${project.color}-400`}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <Badge key={badge} variant="outline">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="relative z-10 py-20" id="sobre-mi">
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
              <p className={`${textMuted} mb-6`}>
                Soy un desarrollador full-stack con experiencia en React,
                Node.js y bases de datos. He desarrollado aplicaciones web
                complejas como IglesiasBC, un SaaS para gestión de iglesias, y
                sistemas ERP personalizados para empresas de manufactura.
              </p>
              <p className={`${textMuted} mb-6`}>
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
                  <a href={getContactLink()} target="_blank">
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
            <p className={`text-center ${textMuted} max-w-2xl mx-auto mb-12`}>
              Resuelve tus dudas antes de inscribirte al curso.
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="max-w-5xl mx-auto">
              <Accordion
                type="single"
                collapsible
                className="w-full gap-2 grid md:grid-cols-2 items-start"
              >
                {[
                  {
                    question:
                      "¿Necesito tener conocimientos previos de programación?",
                    answer:
                      "No, el curso está diseñado para principiantes absolutos. Comenzaremos desde lo más básico y avanzaremos gradualmente.",
                  },
                  {
                    question: "¿Qué necesito para tomar el curso?",
                    answer:
                      "Solo necesitas una computadora con conexión a internet y ganas de aprender. Utilizaremos herramientas gratuitas que te guiaré a instalar durante las primeras clases.",
                  },
                  {
                    question: "¿Cómo son las clases?",
                    answer:
                      "Las clases son prácticas y dinámicas. Cada sesión incluye una explicación teórica seguida de ejercicios prácticos que realizaremos juntos. Al ser grupos pequeños, puedo atender las dudas de cada estudiante.",
                  },
                  {
                    question: "¿Qué pasa si no puedo asistir a una clase?",
                    answer:
                      "Todas las clases quedan grabadas y disponibles para que puedas verlas en cualquier momento.",
                  },
                  {
                    question: "¿Cuál es el costo del curso?",
                    answer:
                      "El curso tiene un costo de $2000mxn/mes. O puedes pagar una sola vez $5000mxn",
                  },
                  {
                    question: "¿Recibiré algún certificado al finalizar?",
                    answer:
                      "Sí, al completar el curso recibirás un certificado de finalización. Sin embargo, lo más valioso serán los proyectos que habrás desarrollado y que podrás mostrar en tu portafolio.",
                  },
                  {
                    question: "¿Qué tecnologías específicas aprenderé?",
                    answer:
                      "Aprenderás HTML5, CSS3, JavaScript moderno (ES6+), y conceptos fundamentales de desarrollo web como responsive design, APIs y manejo de datos.",
                  },
                  {
                    question:
                      "¿Hay algún tipo de soporte o ayuda entre clases?",
                    answer:
                      "Sí, tendrás acceso a un grupo de WhatsApp exclusivo para estudiantes donde podrás hacer preguntas, compartir avances y recibir retroalimentación.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    className="border rounded-md py-2 px-4 bg-background"
                    key={index}
                    value={`i-${index}`}
                  >
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <BlurFade delay={0.2} inView>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <AuroraText>¡Convierte tu curiosidad en código!</AuroraText>
            </h2>
            <p className={`text-xl ${textMuted} max-w-2xl mx-auto mb-8`}>
              Únete a nuestro próximo grupo de 5 estudiantes. Aprende a
              programar con proyectos reales y mentoria personalizada.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getContactLink()} target="_blank">
                <ShimmerButton className="w-full">
                  <AuroraText>Reserva tu lugar</AuroraText>
                </ShimmerButton>
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-4 border-t">
        <p className="text-sm max-w-5xl mx-auto px-4 flex justify-between">
          <span>Onassis Salinas @ {new Date().getFullYear()}</span>
          <a
            href="https://github.com/Onassis-dev/courses_landing_page"
            target="_blank"
          >
            <Github className="size-4" />
          </a>
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

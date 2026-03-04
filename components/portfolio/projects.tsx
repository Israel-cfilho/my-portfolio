"use client"

import { useI18n } from "@/lib/i18n"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "PrimeView",
    description: {
      pt: "Aplicacao web inspirada na Netflix para visualizar filmes e series. Consome a API do TMDb para exibir lancamentos, populares, busca por titulo, favoritos e pagina de detalhes com sinopse e avaliacao.",
      en: "Netflix-inspired web app to browse movies and TV shows. Consumes the TMDb API to display releases, popular titles, search by name, favorites, and detail pages with synopsis and ratings.",
    },
    techs: ["React", "JavaScript", "React Router", "Axios", "CSS3", "HTML5"],
    liveUrl: "https://primeflix-react.vercel.app",
    repoUrl: "https://github.com/Israel-cfilho/PrimeView",
  },
  {
    title: "DeliveryFront",
    description: {
      pt: "Front-end de um aplicativo de delivery construido com React e Vite. Interface moderna para navegacao de cardapio, carrinho de compras e fluxo de pedidos.",
      en: "Front-end for a delivery app built with React and Vite. Modern interface for menu browsing, shopping cart, and order flow.",
    },
    techs: ["React", "JavaScript", "Vite", "CSS3", "HTML5"],
    liveUrl: "",
    repoUrl: "https://github.com/Israel-cfilho/DeliveryFront",
  },
  {
    title: "Registro de Vendas - Bolos de Rolo",
    description: {
      pt: "Sistema de controle de vendas para confeitaria. Registro de clientes, sabores, quantidades e formas de pagamento, com filtragem por mes e calculo automatico de faturamento.",
      en: "Sales management system for a bakery. Tracks customers, flavors, quantities, and payment methods, with monthly filtering and automatic revenue calculation.",
    },
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://registro-vendas-bolos-dh7c.vercel.app",
    repoUrl: "https://github.com/Israel-cfilho/registro-vendas-bolos",
  },
  {
    title: "Calculator Microservices",
    description: {
      pt: "Arquitetura de microsservicos para uma calculadora, demonstrando comunicacao entre servicos independentes. Cada operacao matematica roda em seu proprio container Docker.",
      en: "Microservices architecture for a calculator, demonstrating communication between independent services. Each math operation runs in its own Docker container.",
    },
    techs: ["Node.js", "JavaScript", "Docker", "Microservices"],
    liveUrl: "",
    repoUrl: "https://github.com/Israel-cfilho/calculator-microservices",
  },
]

export function Projects() {
  const { locale, t } = useI18n()

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.projects.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="pb-12 text-muted-foreground">{t.projects.subtitle}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col gap-5 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.projects.viewProject} - ${project.title}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.projects.viewCode} - ${project.title}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <p className="flex-1 leading-relaxed text-muted-foreground">
                {project.description[locale]}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground border-border/50 font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                {project.liveUrl && (
                  <Button
                    asChild
                    size="sm"
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {t.projects.viewProject}
                    </a>
                  </Button>
                )}
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="gap-2 border-border text-foreground hover:bg-secondary"
                >
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    {t.projects.viewCode}
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

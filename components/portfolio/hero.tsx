"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {t.hero.greeting}
            </span>
          </div>

          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Israel
            <br />
            <span className="text-primary">Lima</span>
          </h1>

          <p className="text-lg font-medium text-primary/80 md:text-xl">
            {t.hero.role}
          </p>

          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="/Currículo-Israel.pdf" download>
                <Download className="h-4 w-4" />
                {t.hero.downloadCV}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 border-border text-foreground hover:bg-secondary">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                {t.hero.contact}
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/israel-cfilho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/israel-cfilho/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:israelcfilho38@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-primary/20 md:h-96 md:w-96">
            <Image
              src="/images/profile.jpg"
              alt="Israel Lima - Desenvolvedor Full Stack"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 h-72 w-72 rounded-full border-2 border-primary/10 md:h-96 md:w-96" />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}

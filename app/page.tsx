"use client"

import { I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { TechCarousel } from "@/components/portfolio/tech-carousel"
import { Projects } from "@/components/portfolio/projects"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechCarousel />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  )
}

"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Locale = "pt" | "en"

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Ola, eu sou",
      role: "Desenvolvedor Full Stack",
      description:
        "Apaixonado por criar experiencias digitais incriveis. Transformo ideias em codigo limpo, eficiente e escalavel.",
      downloadCV: "Baixar Curriculo",
      contact: "Entre em Contato",
    },
    about: {
      title: "Sobre Mim",
      description:
        "Me chamo Israel Lima, atualmente resido na cidade de Bananeiras-PB e estou cursando o 9° período de Ciência da Computação pela UEPB (CAMPUS VII). Possuo experiência acadêmica no desenvolvimento de aplicações web, atuando principalmente no front-end com React e integração via APIs REST.",
      description2:
        "Meu objetivo está no foco em aprendizado prático em Java, MySQL e Spring Boot, além de desenvolvimento front-end com React. Sou uma pessoa que gosta de correr atrás dos meus objetivos e de aprender tecnologias novas. Com essa curiosidade, disciplina, organização e facilidade que tenho para aprender novas linguagens, espero uma oportunidade para aplicar meus conhecimentos, evoluir tecnicamente e contribuir com soluções eficientes em um ambiente colaborativo.",
      experience: "Experiencia",
      experienceValue: "2+ Anos",
      projectsDone: "Projetos",
      projectsValue: "10+",
      technologies: "Tecnologias",
      technologiesValue: "15+",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologias e ferramentas que domino",
    },
    projects: {
      title: "Projetos",
      subtitle: "Alguns dos meus trabalhos recentes",
      viewProject: "Ver Projeto",
      viewCode: "Ver Codigo",
      techs: "Tecnologias",
    },
    contact: {
      title: "Contato",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar Mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      messagePlaceholder: "Sua mensagem...",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      description:
        "Passionate about creating amazing digital experiences. I turn ideas into clean, efficient, and scalable code.",
      downloadCV: "Download Resume",
      contact: "Get in Touch",
    },
    about: {
      title: "About Me",
      description:
        "My name is Israel, I currently reside in the city of Patos-PB and I am in my 9th semester of Computer Science at UEPB. I have academic experience in web application development, mainly working on the front-end with React and integration via REST APIs.",
      description2:
        "My goal is to focus on practical learning in Java, MySQL, and Spring Boot, as well as front-end development with React. I am a person who likes to pursue my goals and learn new technologies. With this curiosity, discipline, organization, and ease I have in learning new languages, I hope for an opportunity to apply my knowledge, evolve technically, and contribute with efficient solutions in a collaborative environment.",
      experience: "Experience",
      experienceValue: "2+ Years",
      projectsDone: "Projects",
      projectsValue: "10+",
      technologies: "Technologies",
      technologiesValue: "15+",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I master",
    },
    projects: {
      title: "Projects",
      subtitle: "Some of my recent work",
      viewProject: "View Project",
      viewCode: "View Code",
      techs: "Technologies",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's work together? Get in touch!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Your message...",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const

type Translations = typeof translations
type TranslationKeys = Translations["pt"]

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt")

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}

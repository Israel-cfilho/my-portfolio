"use client"

import { useI18n } from "@/lib/i18n"

const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" }
]

export function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.skills.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="pb-12 text-muted-foreground">{t.skills.subtitle}</p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

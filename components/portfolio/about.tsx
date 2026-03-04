"use client"

import { useI18n } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 pb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.about.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t.about.description}
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t.about.description2}
          </p>
        </div>
      </div>
    </section>
  )
}

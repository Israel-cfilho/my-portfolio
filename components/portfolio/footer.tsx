"use client"

import { useI18n } from "@/lib/i18n"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Israel Lima. {t.footer.rights}
        </p>

        <div className="flex items-center gap-4">
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
    </footer>
  )
}

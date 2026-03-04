"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { useI18n } from "@/lib/i18n"
import { Moon, Sun, Menu, X, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const { theme, setTheme } = useTheme()
  const { locale, setLocale, t } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          {"IL"}
          <span className="text-primary">{"."}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
            aria-label="Toggle language"
            className="text-muted-foreground hover:text-foreground"
          >
            <Languages className="h-5 w-5" />
            <span className="sr-only">
              {locale === "pt" ? "Switch to English" : "Mudar para Portugues"}
            </span>
          </Button>
          <span className="text-xs font-semibold uppercase text-muted-foreground">
            {locale}
          </span>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-muted-foreground hover:text-foreground"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-lg md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

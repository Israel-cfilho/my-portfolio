"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin } from "lucide-react"

export function Contact() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:israelcfilho38@gmail.com?subject=Contato Portfolio - ${formData.name}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )}`
    window.open(mailtoLink, "_blank")
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.contact.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <a href="mailto:israelcfilho38@gmail.com" className="font-medium text-foreground hover:text-primary transition-colors">
                  israelcfilho38@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t.contact.title === "Contato" ? "Localizacao" : "Location"}
                </p>
                <p className="font-medium text-foreground">Patos-PB</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-foreground">{t.contact.name}</Label>
              <Input
                id="name"
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-border bg-card text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-foreground">{t.contact.email}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-border bg-card text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-foreground">{t.contact.message}</Label>
              <Textarea
                id="message"
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="resize-none border-border bg-card text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <Button type="submit" size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="h-4 w-4" />
              {t.contact.send}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

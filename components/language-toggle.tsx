"use client"

import { usePathname, useRouter } from "next/navigation"

interface LanguageToggleProps {
  spanishHref: string
  englishHref: string
  className: string
}

export function LanguageToggle({ spanishHref, englishHref, className }: LanguageToggleProps) {
  const pathname = usePathname()
  const router = useRouter()
  const isEnglish = pathname.startsWith("/en")

  return (
    <button
      onClick={() => router.push(isEnglish ? spanishHref : englishHref)}
      className={className}
      aria-label="Switch language"
    >
      <span className={isEnglish ? "font-bold" : "opacity-60"}>EN</span>
      <span className="mx-2">|</span>
      <span className={!isEnglish ? "font-bold" : "opacity-60"}>ES</span>
    </button>
  )
}
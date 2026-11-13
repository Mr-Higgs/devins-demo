import { useCallback, useEffect, useState } from 'react'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Workshops } from './components/Workshops'
import { WorkshopSheet } from './components/WorkshopSheet'
import { workshops } from './content/workshops'

const slugFromUrl = () => new URLSearchParams(window.location.search).get('w')

export default function App() {
  const [slug, setSlug] = useState<string | null>(slugFromUrl)

  useEffect(() => {
    const onPop = () => setSlug(slugFromUrl())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const open = useCallback((s: string) => {
    const url = new URL(window.location.href)
    url.searchParams.set('w', s)
    url.hash = ''
    window.history.pushState({ sheet: true }, '', url)
    setSlug(s)
  }, [])

  const close = useCallback(() => {
    if (window.history.state?.sheet) {
      window.history.back()
      return
    }
    const url = new URL(window.location.href)
    url.searchParams.delete('w')
    window.history.replaceState(null, '', url)
    setSlug(null)
  }, [])

  const current = workshops.find((w) => w.slug === slug)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Workshops onOpen={open} />
        <HowItWorks />
        <Faq />
      </main>
      <Footer />
      <WorkshopSheet workshop={current} onClose={close} />
    </>
  )
}

export const metadata = {
  title: 'Home - PatternAct',
  description: 'PatternAct landing page',
}

import Hero from '@/app/(default)/hero'
import Features from '@/app/(default)/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/app/(static)/documentation/zigzag'
import Testimonials from '@/app/(default)/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  )
}

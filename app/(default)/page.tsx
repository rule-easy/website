export const metadata = {
  title: 'Home - RuleEasy',
  description: 'RuleEasy landing page',
}

import Features from '@/app/(default)/features';
import Hero from '@/app/(default)/hero';
import Newsletter from '@/components/newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Newsletter />
    </>
  )
}

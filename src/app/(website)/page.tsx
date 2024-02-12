'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Header from '@/components/header'
import Hero from '@/components/hero'
import BlogFeatured from '@/components/blogFeatured'
import BlogList from '@/components/blogList'
import Values from '@/components/values'
import LogoCloud from '@/components/logoCloud'
import Footer from '@/components/footer'
import PrimaryFeatures from '@/components/primaryFeatures'
import SecondaryFeatures from '@/components/secondaryFeatures'
import NewsletterSignup from '@/components/newsletterSignup'
import Pricing from '@/components/pricing'
import Faq from '@/components/faq'
import GettingStarted from '@/components/gettingStarted'

const stats = [
  { label: 'Transactions every 24 hours', value: '44 million' },
  { label: 'Assets under holding', value: '$119 trillion' },
  { label: 'New users annually', value: '46,000' },
]


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
      <Hero />
      <LogoCloud />
      <BlogFeatured />
      <BlogList />
      <NewsletterSignup />
      <Values />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <GettingStarted />
      <Pricing />
      <Faq />
      <Footer />
        
      </main>

    </div>
  )
}

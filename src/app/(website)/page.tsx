"use client";
import Header from "@/components/header";
import Hero from "@/components/hero";
import BlogFeatured from "@/components/blogFeatured";
import BlogList from "@/components/blogList";
import Values from "@/components/values";
import LogoCloud from "@/components/logoCloud";
import Footer from "@/components/footer";
import PrimaryFeatures from "@/components/primaryFeatures";
import SecondaryFeatures from "@/components/secondaryFeatures";
import NewsletterSignup from "@/components/newsletterSignup";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import GettingStarted from "@/components/gettingStarted";

export default function Home() {

  return (
    <div className="bg-white">
      <main className="isolate">
        <Hero />
        <LogoCloud />
        <BlogFeatured />
        <BlogList />
        <Values />
        <NewsletterSignup />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <GettingStarted />
        <Pricing />
        <Faq />
      </main>
    </div>
  );
}

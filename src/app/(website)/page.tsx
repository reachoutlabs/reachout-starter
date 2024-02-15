import Hero from "@/components/hero";
import BlogFeatured from "@/components/blogFeatured";
import BlogList from "@/components/blogList";
import Values from "@/components/values";
import LogoCloud from "@/components/logoCloud";
import PrimaryFeatures from "@/components/primaryFeatures";
import SecondaryFeatures from "@/components/secondaryFeatures";
import NewsletterSignup from "@/components/newsletterSignup";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import GettingStarted from "@/components/gettingStarted";
import CaseStudiesHomeList from "@/components/caseStudies";
import client from "@/lib/reachout";

export default async function Home() {
  const posts = await client.readItems("Sample_content", {
    fields: ["*"],
    sort: ["-publishedDate"],
    filter: {
      status: {
        _eq: "published",
      },
      tag: {
        _neq: "Featured",
      },
    },
  });

  const featuredPosts = await client.readItems("Sample_content", {
    fields: ["*"],
    sort: ["-publishedDate"],
    filter: {
      status: {
        _eq: "published",
      },
      tag: {
        _eq: "Featured",
      },
    },
  });

  const caseStudies = await client.readItems("Sample_case_studies", {
    fields: ["*"],
    sort: ["-publishedDate"],
    filter: {
      status: {
        _eq: "published",
      },
    },
  });

  return (
    <div className="bg-white">
      <main className="isolate">
        <Hero />
        <LogoCloud />
        <BlogFeatured posts={featuredPosts ?? []} />
        <BlogList posts={posts ?? []} />
        <Values />
        <CaseStudiesHomeList caseStudies={caseStudies ?? []} />
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

export const revalidate = parseInt(process.env.NEXT_ISR_REVALIDATE ?? "60", 10);

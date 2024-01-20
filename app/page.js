import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials3 from "@/components/Testimonials3";
import { getSEOTags, renderSchemaTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "DevFolio | Simple minimalistic portfolios!",
  canonicalUrlRelative: "/",
});

export default function Home() {
  return (
    <>
      {renderSchemaTags()}
      <Header />
      <main>
        <Hero />
        <Pricing />
        <FAQ />
        <Testimonials3 />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
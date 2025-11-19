import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import BlogTeaser from "@/components/BlogTeaser";
import Footer from "@/components/Footer";
import NotificationPrompt from '@/components/NotificationPrompt';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <NotificationPrompt />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <BlogTeaser />
      </main>
      <Footer />
    </>
  );
}

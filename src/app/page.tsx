import Header from '@/components/header';
import Hero from '@/components/hero';
import HowItWorks from '@/components/how-it-works';
import WhyBenevox from '@/components/why-benevox';
import Cta from '@/components/cta';
import Footer from '@/components/footer';
import { ScrollRevealWrapper } from '@/components/scroll-reveal-wrapper';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ScrollRevealWrapper>
            <HowItWorks />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
            <WhyBenevox />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
            <Cta />
        </ScrollRevealWrapper>
      </main>
      <Footer />
    </div>
  );
}

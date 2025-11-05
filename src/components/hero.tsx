import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background py-24 sm:py-32">
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-1" />
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-1" />
      <div className="container relative text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Your Skills. Your Gigs. <span className="text-primary">Your DAO.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 md:text-xl">
            The decentralized skills marketplace built on Base. Find tech gigs, contribute to projects, and get rewarded instantly on-chain.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#join-waitlist">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" disabled className="w-full sm:w-auto">
            Browse Gigs
          </Button>
        </div>
      </div>
    </section>
  );
}

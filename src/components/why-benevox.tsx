import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Layers, Users, ShieldCheck } from 'lucide-react';
import { ScrollRevealWrapper } from './scroll-reveal-wrapper';

const features = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: 'Powered by Base',
    description: 'Enjoy fast, low-cost transactions on a secure Ethereum L2. Get paid without worrying about high gas fees.',
    id: 'why-base',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Truly Decentralized',
    description: 'Benevox is a DAO. The community (you!) governs the platform, manages the treasury, and shapes its future.',
    id: 'dao',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Transparent & Direct Rewards',
    description: 'All gigs and payments are handled by smart contracts. No opaque fees or waiting for bank transfers.',
    id: 'rewards',
  },
];

export default function WhyBenevox() {
  return (
    <section id="why-benevox" className="py-20 md:py-28 bg-card/30">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why Benevox DAO?</h2>
          <p className="mt-4 text-lg text-foreground/60">The future of work is decentralized, transparent, and community-owned.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollRevealWrapper key={feature.id} delay={index * 100}>
              <div id={feature.id} className="h-full">
                <Card className="p-6 bg-background/50 border-border/50 h-full transition-all duration-300 hover:border-primary/50 hover:bg-card">
                  <div className="flex items-start gap-4">
                      <div className="mt-1">{feature.icon}</div>
                      <div className="flex-1">
                          <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                          <CardDescription className="mt-2 text-foreground/80">
                              {feature.description}
                          </CardDescription>
                      </div>
                  </div>
                </Card>
              </div>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

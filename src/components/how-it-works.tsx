import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Briefcase, ClipboardCheck, Award } from 'lucide-react';
import { ScrollRevealWrapper } from './scroll-reveal-wrapper';

const steps = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Find a Gig',
    description: 'Browse a curated list of tasks and projects from top companies.',
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
    title: 'Complete the Work',
    description: 'Submit your solution and have it verified by the community or project owner.',
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Get Rewarded',
    description: 'Receive on-chain payments instantly in crypto upon approval. No middlemen, no delays.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">How It Works</h2>
          <p className="mt-4 text-lg text-foreground/60">A simple 3-step process to get you started.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollRevealWrapper key={index} delay={index * 100}>
              <Card className="flex flex-col items-center text-center p-8 bg-card/50 border-border/50 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 h-full">
                <div className="mb-6 rounded-full bg-primary/10 p-4">
                  {step.icon}
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardDescription className="mt-2 text-base">
                  {step.description}
                </CardDescription>
              </Card>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

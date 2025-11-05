import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Zap } from 'lucide-react';

export default function Header() {
  const navLinks = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#why-base', label: 'Why Base?' },
    { href: '#dao', label: 'DAO' },
  ];

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="p-4">
            <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <Zap className="h-6 w-6 text-primary" />
                <span className="font-bold sm:inline-block text-lg">Benevox DAO</span>
            </Link>
            <nav className="flex flex-col items-start gap-6">
            {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className="text-lg text-foreground/80 transition-colors hover:text-foreground"
                >
                {link.label}
                </Link>
            ))}
            </nav>
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">Benevox DAO</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:block">
            <Button asChild>
              <Link href="#join-waitlist">Join Waitlist</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

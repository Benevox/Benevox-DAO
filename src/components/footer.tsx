import Link from 'next/link';
import { Github } from 'lucide-react';

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.317 4.369a1.875 1.875 0 00-2.651-.002L.156 16.593a1.875 1.875 0 00.904 3.32l5.053-.002 2.977 4.961a.438.438 0 00.787-.003l2.977-4.961 4.743.001a1.875 1.875 0 001.748-2.923L20.317 4.37zm-4.735 8.441a1.406 1.406 0 01-1.989 0l-.093-.093a1.406 1.406 0 010-1.989l.093-.093a1.406 1.406 0 111.989 1.989l-.093.093zm-6.273 0a1.406 1.406 0 01-1.989 0l-.093-.093a1.406 1.406 0 010-1.989l.093-.093a1.406 1.406 0 111.989 1.989l-.093.093z" />
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const socialLinks = [
  { name: 'Discord', href: '#', icon: DiscordIcon },
  { name: 'X', href: '#', icon: XIcon },
  { name: 'GitHub', href: '#', icon: Github },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-sm text-foreground/60">
          © {currentYear} Benevox DAO. All Rights Reserved.
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 transition-colors hover:text-foreground"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

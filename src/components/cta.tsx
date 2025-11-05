import { WaitlistForm } from "./waitlist-form";

export default function Cta() {
  return (
    <section id="join-waitlist" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Ready to Build the Future of Work?
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Sign up for the waitlist to get early access and be the first to know when we launch.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Page Not Found, Claravox Healthcare",
};

export default function NotFound() {
  return (
    <Section className="bg-white text-center">
      <h1 className="font-display text-3xl font-semibold text-violet sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base text-charcoal">
        The page you are looking for does not exist. Head back to the
        homepage, or book your free consultation directly.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="secondary">
          Back to Home
        </Button>
        <Button href="/get-your-free-audit" variant="primary">
          Book a Consultation
        </Button>
      </div>
    </Section>
  );
}

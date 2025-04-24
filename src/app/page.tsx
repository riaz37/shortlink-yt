import { UrlShortenerForm } from "@/components/urls/url-shortener-form";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, ShieldCheck, BarChart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate">
        {/* Background gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-4">
              Transform Your Links,
              <br />
              Elevate Your Reach
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Create short, memorable links in seconds. Track their performance and ensure
              safety with our advanced URL shortening platform.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="flex flex-col items-center p-4 rounded-lg border bg-card">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Link2 className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Custom Short Links</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Create branded, memorable URLs
                </p>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg border bg-card">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <ShieldCheck className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">AI-Powered Safety</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Automatic URL safety verification
                </p>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg border bg-card">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <BarChart className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Detailed Analytics</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Track and analyze link performance
                </p>
              </div>
            </div>

            {/* URL Shortener Form */}
            <div className="max-w-3xl mx-auto mb-12">
              <UrlShortenerForm />
            </div>

            {/* CTA Section */}
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/register" className="gap-2">
                    Get Started Free
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/stats">
                    View Public Stats
                  </Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                No credit card required · Free plan available
              </p>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Trust Indicators Section */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Trusted by developers and marketers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
              {/* Replace these with actual company logos */}
              <div className="h-8 w-32 bg-foreground/20 rounded" />
              <div className="h-8 w-32 bg-foreground/20 rounded" />
              <div className="h-8 w-32 bg-foreground/20 rounded" />
              <div className="h-8 w-32 bg-foreground/20 rounded" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

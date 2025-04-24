import { Suspense } from "react";
import { UrlShortenerForm } from "@/components/urls/url-shortener-form";
import { StatsDisplay } from "@/components/stats/stats-display";
import { getStats } from "@/lib/stats";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, ShieldCheck, BarChart, Heart, Zap, Globe, LineChart, Settings, Shield } from "lucide-react";
import Link from "next/link";
import { db } from "@/server/db";
import { urls, users } from "@/server/db/schema";
import { count, sql } from "drizzle-orm";

export default async function Home() {
  const stats = await getStats();

  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate z-0">
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

            {/* New: How It Works Section */}
            <section className="py-16 bg-muted/30">
              <div className="container max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Zap className="size-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">1. Paste Your URL</h3>
                    <p className="text-muted-foreground">Enter your long URL and optionally customize your short link</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="size-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">2. AI Safety Check</h3>
                    <p className="text-muted-foreground">Our AI automatically verifies the safety of your URL</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <LineChart className="size-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">3. Track & Analyze</h3>
                    <p className="text-muted-foreground">Monitor your link's performance with detailed analytics</p>
                  </div>
                </div>
              </div>
            </section>

            {/* New: Features Section */}
            <section className="py-16">
              <div className="container max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4 p-6 rounded-lg border bg-card">
                    <div className="size-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Custom Domains</h3>
                      <p className="text-muted-foreground">Use your own domain for branded short links that reinforce your identity</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 rounded-lg border bg-card">
                    <div className="size-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Settings className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Advanced Controls</h3>
                      <p className="text-muted-foreground">Set expiration dates, password protection, and geographic restrictions</p>
                    </div>
                  </div>
                  {/* Add more feature cards as needed */}
                </div>
              </div>
            </section>

            {/* Optimized Stats Section */}
            <section className="py-16 bg-muted/30">
              <div className="container max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
                <StatsDisplay stats={stats} />
              </div>
            </section>

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

      {/* New: Made with Love Section */}
      <section className="py-8 border-t">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            Made with <Heart className="size-4 text-red-500 fill-red-500" /> by
            <a 
              href="https://github.com/riazXrazor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              Riaz
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

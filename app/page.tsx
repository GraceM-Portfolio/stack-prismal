import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ArrowRight, Star, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

// Sample data
const navItems = ["Features", "How It Works", "Pricing", "FAQ"];
const trustedLogos = ["Acme Corp", "GlobalTech", "Initech", "Massive Dynamic", "Soylent Corp"];
const problemSolutionPoints = [
  "Siloed data across tools", "Guesswork in roadmap planning", "Missed user friction points"
];
const features = [
  {
    title: "Behavioral Analytics",
    description: "Session replays, heatmaps, and conversion funnels to see exactly how users navigate.",
    icon: TrendingUp,
    color: "text-blue-500"
  },
  {
    title: "Feedback & Roadmaps",
    description: "Capture requests, prioritize with data, and share public roadmaps.",
    icon: Users,
    color: "text-purple-500"
  },
  {
    title: "Impact Reporting",
    description: "Measure feature adoption, retention lift, and ROI with automated reports.",
    icon: Zap,
    color: "text-amber-500"
  }
];
const steps = ["Connect your data sources", "Discover insights with one click", "Prioritize and build what matters"];
const pricingTiers = [
  { name: "Starter", price: "$0", description: "For individuals and small teams.", features: ["Up to 5 users", "Core analytics", "Community support"], cta: "Get Started", popular: false },
  { name: "Professional", price: "$49", description: "For growing teams.", features: ["Everything in Starter", "Unlimited projects", "Advanced reporting", "Priority support"], cta: "Start Free Trial", popular: true },
  { name: "Enterprise", price: "Custom", description: "For large organizations.", features: ["Everything in Professional", "SSO & advanced security", "Dedicated support", "SLA"], cta: "Contact Sales", popular: false }
];
const testimonials = [
  { quote: "Nexus transformed how we build products. We're shipping features our users actually want, twice as fast.", author: "Alex Chen", role: "VP of Product, GlobalTech" },
  { quote: "The insights from behavioral analytics are incredible. We identified and fixed a major user drop-off point in hours.", author: "Sarah Jenkins", role: "Lead Designer, Initech" }
];
const faqs = [
  { q: "How does the free trial work?", a: "You can try Nexus Professional free for 14 days. No credit card required." },
  { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time from your account settings." },
  { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade encryption and comply with SOC 2 standards." }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/80 dark:from-gray-950 dark:to-gray-900/80 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold">N</div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Nexus</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">Log In</Button>
            <Button size="sm" className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">Request a Demo</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Enhanced */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-amber-950/20">
          {/* Animated background grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 dark:opacity-10" />
          
          {/* Floating orbs */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
          
          <div className="container mx-auto px-4 py-20 md:py-32 text-center relative">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-primary/20 shadow-lg mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
                Analytics Suite
              </span>
              <Badge variant="outline" className="ml-2 border-primary/30 bg-primary/5 text-primary text-xs">
                New
              </Badge>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.2]">
              <span className="block text-gray-900 dark:text-white">
                Turn <span className="bg-gradient-to-r from-primary via-purple-500 to-amber-500 bg-clip-text text-transparent">Data</span> into
              </span>
              <span className="block mt-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                Action with{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
                    Nexus
                  </span>
                  <span className="absolute -inset-x-2 bottom-1 h-3 bg-primary/20 blur-md rounded-full -z-0" />
                  <span className="absolute -inset-1 -bottom-1 bg-gradient-to-r from-primary/30 to-amber-500/30 blur-xl rounded-full -z-10" />
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <div className="relative inline-block mt-6">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Uncover user insights, prioritize features, and build what matters—<br className="hidden sm:block" />
                all in one collaborative workspace.
              </p>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
            </div>

            {/* CTA buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button size="lg" className="gap-2 shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all hover:-translate-y-1 px-8 py-6 text-lg rounded-full">
                Start Free Trial <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 px-8 py-6 text-lg rounded-full hover:bg-primary/5 backdrop-blur-sm">
                Watch Demo <span className="ml-2 text-primary">→</span>
              </Button>
            </div>

            {/* Trusted by line */}
            <div className="mt-16 flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
              <span>Trusted by 2,000+ product teams</span>
              <span className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="container mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Trusted by product teams at</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustedLogos.map((logo) => (
              <div key={logo} className="text-2xl font-bold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent dark:from-gray-500 dark:to-gray-400">{logo}</div>
            ))}
          </div>
        </section>

        {/* Problem / Solution Section */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                Stop guessing.<br />Start knowing.
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Building products without data is like navigating in the dark. Nexus illuminates the path.
              </p>
              <ul className="mt-6 space-y-3">
                {problemSolutionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">Stop {point.toLowerCase()}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5 rounded-2xl p-8 text-center shadow-2xl border border-primary/20">
              <p className="text-6xl mb-4">📊</p>
              <h3 className="text-2xl font-semibold">Actionable Insights Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Visualize user behavior and feature impact in real-time.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to move faster</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Nexus gives your team the clarity and confidence to build the right things, faster.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className={`h-12 w-12 rounded-lg ${feature.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get started in minutes</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Connect your tools and start uncovering insights right away.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg shadow-primary/30">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(33%+2rem)] w-[calc(33%-4rem)] h-0.5 bg-gradient-to-r from-primary/30 to-primary/60" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your team.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-visible ${tier.popular ? 'border-primary border-2 shadow-primary/20' : ''}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-white shadow-md z-10 whitespace-nowrap">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="text-3xl font-bold">{tier.price}<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/month</span></div>
                  <Separator />
                  <ul className="space-y-2">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={tier.popular ? "default" : "outline"} className={`w-full mt-4 ${tier.popular ? 'shadow-lg shadow-primary/30 hover:shadow-primary/50' : ''}`}>
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900/80">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by product teams</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">See what our customers are saying.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                  <div className="mt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Everything you need to know.</p>
          </div>
          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                  <CardDescription className="text-base">{faq.a}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:to-primary/5 rounded-3xl p-12 text-center border border-primary/20 shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Ready to build better products?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Join thousands of product teams using Nexus to drive growth.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2 shadow-xl shadow-primary/40 hover:shadow-primary/60 transition-all hover:-translate-y-0.5">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-2">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2026 Nexus Analytics, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
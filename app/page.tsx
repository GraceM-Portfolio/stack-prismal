import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2, ArrowRight, Star, Sparkles, Zap, 
  Code2, Palette, Layout, Globe, Monitor, Brush, 
  TrendingUp, Users, Layers, ChevronRight, Instagram,
  ArrowUp, MoveRight, Award, Eye, Filter
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Portfolio items data
const portfolioItems = [
  { id: 1, title: "LUMINA COSMETICS", category: "Web Design", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop", desc: "E-commerce UX redesign" },
  { id: 2, title: "NOVA IDENTITY", category: "Logos", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop", desc: "Minimalist brand mark" },
  { id: 3, title: "DIGITAL ALCHEMY", category: "Digital Art", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop", desc: "Generative NFT collection" },
  { id: 4, title: "VERTEX STUDIO", category: "Web Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", desc: "Agency portfolio platform" },
  { id: 5, title: "EIDETIC", category: "Logos", image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600&h=400&fit=crop", desc: "Tech startup wordmark" },
  { id: 6, title: "CHROMATIC ESCAPE", category: "Digital Art", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop", desc: "Abstract visual series" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Web Design", "Logos", "Digital Art"];
  
  const filteredPortfolio = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
              S
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
              <span className="text-gray-900"> Prismal</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("work")} className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">Work</button>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors flex items-center gap-1">
                Services <ChevronRight className="h-3 w-3 rotate-90" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 p-2 shadow-xl border-0 rounded-xl">
                <DropdownMenuItem onClick={() => scrollToSection("services")} className="cursor-pointer rounded-lg py-2">
                  <Code2 className="mr-2 h-4 w-4 text-indigo-500" /> Web Architecture
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("services")} className="cursor-pointer rounded-lg py-2">
                  <Palette className="mr-2 h-4 w-4 text-purple-500" /> Brand Identity
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("services")} className="cursor-pointer rounded-lg py-2">
                  <Brush className="mr-2 h-4 w-4 text-pink-500" /> Digital Art & Assets
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">About</button>
          </nav>
          
          <Button className="shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all rounded-full px-6 bg-indigo-600 hover:bg-indigo-700">
            Start a Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Split Screen */}
        <section id="hero" className="relative min-h-[90vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/30" />
          <div className="container mx-auto px-4 md:px-8 py-20 lg:py-28 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8">
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                  <span className="text-sm font-medium text-gray-700">Premium Creative-Tech Studio</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.2]">
                  Where <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Technical Precision</span><br />
                  Meets Creative Vision.
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed max-w-lg">
                  Building high-performance websites and distinct visual identities for brands that refuse to blend in.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Button size="lg" className="rounded-full px-8 shadow-xl shadow-indigo-200 bg-indigo-600 hover:bg-indigo-700 text-base">
                    View Our Work <MoveRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-2 text-base">
                    Explore Services
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-12 pt-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Trusted by 50+ brands</p>
                    <p className="text-xs text-gray-500">From startups to Fortune 500</p>
                  </div>
                </div>
              </div>
              {/* Right: Split Visual */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-gradient-to-br from-indigo-900 to-indigo-700 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Monitor className="h-20 w-20 text-white/80 mx-auto mb-4" />
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 w-40 mx-auto">
                        <div className="h-2 w-full bg-white/30 rounded-full mb-2" />
                        <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                    <Brush className="h-20 w-20 text-white/90" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 0h20v20H0V0zm20 20h20v20H20V20z\'/%3E%3C/g%3E%3C/svg%3E')]" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-full px-4 py-1 text-white text-xs">Web Architecture</div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-4 py-1 text-white text-xs">Digital Art</div>
              </div>
            </div>
          </div>
        </section>

        {/* Work / Portfolio Section with Filtering */}
        <section id="work" className="container mx-auto px-4 py-24 md:py-32 border-t border-gray-100">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-indigo-200 bg-indigo-50 text-indigo-700 rounded-full px-4 py-1">PORTFOLIO</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Selected works</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Blending technical excellence with artistic expression</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <Badge className="w-fit mb-2 bg-white/20 backdrop-blur-sm text-white border-0">{item.category}</Badge>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section - Three Pillars */}
        <section id="services" className="bg-gradient-to-b from-gray-50 to-white border-y border-gray-100 py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-indigo-200 bg-indigo-50 text-indigo-700 rounded-full px-4 py-1">EXPERTISE</Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Three pillars of <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">excellence</span></h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Comprehensive solutions that cover every angle of your digital presence</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6">
                    <Code2 className="h-7 w-7 text-indigo-600" />
                  </div>
                  <CardTitle className="text-2xl">Web Architecture</CardTitle>
                  <CardDescription className="text-gray-500 mt-2">Custom coding, redesigns, and mobile optimization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-indigo-500" />Performance-first engineering</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-indigo-500" />SEO & conversion optimized</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-indigo-500" />Headless & traditional CMS</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Focus: Speed & Results</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                    <Palette className="h-7 w-7 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Brand Identity</CardTitle>
                  <CardDescription className="text-gray-500 mt-2">Logo design, typography, and visual language</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-purple-500" />Distinct positioning</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-purple-500" />Comprehensive guidelines</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-purple-500" />Memorable visual systems</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">Focus: Being Unforgettable</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-6">
                    <Brush className="h-7 w-7 text-pink-600" />
                  </div>
                  <CardTitle className="text-2xl">Digital Art & Assets</CardTitle>
                  <CardDescription className="text-gray-500 mt-2">Custom illustrations, prints, and motion graphics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-pink-500" />Original digital paintings</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-pink-500" />3D & generative art</li>
                    <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-pink-500" />Limited edition prints</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">Focus: Unique Aesthetics</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stack vs Prismal Section - Brand Story */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-indigo-200 bg-indigo-50 text-indigo-700 rounded-full">THE DUAL IDENTITY</Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                The <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">Stack</span> meets 
                the <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Prismal</span>
              </h2>
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-2xl font-semibold flex items-center gap-2"><Code2 className="h-5 w-5 text-indigo-500" /> The Stack</h3>
                  <p className="text-gray-600 mt-2">Clean code, robust architecture, SEO-first thinking, and bulletproof functionality. We engineer digital experiences that perform relentlessly.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-semibold flex items-center gap-2"><Brush className="h-5 w-5 text-purple-500" /> The Prismal</h3>
                  <p className="text-gray-600 mt-2">Color theory, emotional design, digital painting, and visual storytelling. We craft identities that resonate deeply and stand out.</p>
                </div>
              </div>
              <p className="mt-8 text-lg text-gray-700 bg-gray-50 p-6 rounded-2xl italic">"You don't have to choose between a boring coder and a flaky artist. You get both."</p>
            </div>
            <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Zap className="h-8 w-8 text-indigo-500 mx-auto" />
                  <p className="font-mono text-sm mt-2">99.9% Uptime</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Award className="h-8 w-8 text-purple-500 mx-auto" />
                  <p className="font-mono text-sm mt-2">Awwwards Nom.</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Globe className="h-8 w-8 text-cyan-500 mx-auto" />
                  <p className="font-mono text-sm mt-2">Global Clients</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <Eye className="h-8 w-8 text-pink-500 mx-auto" />
                  <p className="font-mono text-sm mt-2">Art Exhibitions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </section>

        {/* Redesign Specialized Block - Before & After */}
        <section className="bg-gray-900 text-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4 border-white/30 bg-white/10 text-white rounded-full">REDESIGN SPECIALIST</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Is your current website costing you customers?</h2>
              <p className="text-xl text-gray-300 mt-4">We transform outdated sites into high-converting digital assets.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-red-500/10 p-4 border-b border-red-500/20">
                  <h3 className="text-xl font-semibold flex items-center gap-2"><span className="text-red-400">●</span> Before</h3>
                </div>
                <div className="p-6">
                  <div className="bg-gray-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <Layout className="h-16 w-16 text-gray-500" />
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Slow load times</li>
                    <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Outdated aesthetics</li>
                    <li className="flex items-center gap-2"><span className="text-red-400">✗</span> Low conversion rates</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-indigo-500">
                <div className="bg-indigo-500/10 p-4 border-b border-indigo-500/20">
                  <h3 className="text-xl font-semibold flex items-center gap-2"><span className="text-green-400">●</span> After</h3>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <Sparkles className="h-16 w-16 text-white" />
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Blazing fast (LCP &lt; 2s)</li>
                    <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Modern, artistic design</li>
                    <li className="flex items-center gap-2"><span className="text-green-400">✓</span> +156% conversion lift</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="rounded-full bg-white text-gray-900 hover:bg-gray-100 shadow-xl shadow-white/20">
                Request a Redesign Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section - 3 Simple Steps */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-indigo-200 bg-indigo-50 text-indigo-700 rounded-full">SIMPLE PROCESS</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">From concept to launch in <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">three steps</span></h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">No complexity, no surprises. Just a smooth path to an exceptional digital presence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-400 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-indigo-200">1</div>
              <h3 className="text-2xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-600">We talk about your goals, vision, and audience. Deep dive into your brand story and technical needs.</p>
            </div>
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-purple-200">2</div>
              <h3 className="text-2xl font-semibold mb-3">Creation</h3>
              <p className="text-gray-600">We build your custom "Stack" (tech) and "Prism" (art) elements — iterative design and development.</p>
            </div>
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-600 to-pink-400 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xl shadow-pink-200">3</div>
              <h3 className="text-2xl font-semibold mb-3">Launch</h3>
              <p className="text-gray-600">Your brand goes live and starts performing. We provide post-launch support and analytics.</p>
            </div>
          </div>
        </section>

        {/* About Section - Origin Story */}
        <section id="about" className="bg-gray-50 border-y border-gray-100 py-24 md:py-32">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Badge variant="outline" className="mb-4 border-indigo-200 bg-indigo-50 text-indigo-700 rounded-full">OUR ORIGIN STORY</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frustrated by the <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">divide</span> between devs and designers</h2>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">Stack Prismal was born from a simple belief: the best digital work happens when technical rigor and artistic vision are fused from day one. We're a studio of engineer-artists who speak both languages fluently.</p>
            <div className="mt-10 flex justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">50+</div>
                <div className="text-sm text-gray-500">Projects delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-500">Client retention rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">12</div>
                <div className="text-sm text-gray-500">Design awards</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Back to Top */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">SP</div>
                <span className="text-xl font-bold">Stack Prismal</span>
              </div>
              <p className="text-gray-600 max-w-md">High-end creative-tech agency delivering premium websites and visual identities.</p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors"><Globe className="h-5 w-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <p className="text-gray-600">hello@stackprismal.com</p>
              <p className="text-gray-600 mt-2">+1 (212) 555-0789</p>
              <p className="text-gray-600 mt-2">New York / Los Angeles</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Newsletter</h4>
              <p className="text-gray-600 text-sm">Get creative-tech insights</p>
              <div className="flex mt-3">
                <input type="email" placeholder="Email" className="border rounded-l-lg px-3 py-2 text-sm w-full" />
                <Button className="rounded-l-none bg-indigo-600 text-sm px-3">→</Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2025 Stack Prismal. All rights reserved.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
              Back to Top <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

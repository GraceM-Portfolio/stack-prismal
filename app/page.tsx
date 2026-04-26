import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Sparkles,
  Code2,
  Palette,
  Brush,
  Layers,
  Diamond,
  Instagram,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Custom Before/After Image Slider (used in the redesign block)    */
/* ------------------------------------------------------------------ */
function BeforeAfterSlider() {
  const [position, setPosition] = useState(50); // percentage from left
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const newPos = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(newPos);
  }, []);

  const handleMouseDown = () => {
    dragging.current = true;
    document.body.style.userSelect = "none";
  };
  const handleMouseUp = () => {
    dragging.current = false;
    document.body.style.userSelect = "";
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Before image (old website) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' font-family='sans-serif' font-size='30' fill='%23999'%3EOutdated Website%3C/text%3E%3C/svg%3E")`,
        }}
      />
      {/* After image (new design) – clipped from the left */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' font-family='sans-serif' font-size='30' fill='%23c084fc'%3EModern Design%3C/text%3E%3C/svg%3E")`,
        }}
      />
      {/* Draggable handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
        style={{ left: `calc(${position}% - 2px)` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
          <span className="text-xs font-bold text-gray-700">↔</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  const [filter, setFilter] = useState("All");

  // Sample portfolio items
  const portfolioItems = [
    { id: 1, title: "Nova Brand Suite", category: "Logos", img: "🌌" },
    { id: 2, title: "Stellar E-Commerce", category: "Web Design", img: "🛍️" },
    { id: 3, title: "Prismal Abstracts", category: "Digital Art", img: "🎨" },
    { id: 4, title: "Aether Dashboard", category: "Web Design", img: "📊" },
    { id: 5, title: "Crystal Mark", category: "Logos", img: "💎" },
    { id: 6, title: "Fluid Motion", category: "Digital Art", img: "💧" },
  ];

  const filteredItems = filter === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === filter);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/80 dark:from-gray-950 dark:to-gray-900/80 text-gray-900 dark:text-gray-100">
      {/* ---- Header ---- */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30">
              SP
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              Stack Prismal
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#work" className="text-sm font-medium hover:text-indigo-500 transition-colors">
              Work
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-indigo-500 transition-colors cursor-pointer">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-gray-200 dark:border-gray-800">
                <DropdownMenuItem>
                  <a href="#services" className="w-full">Web Architecture</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#services" className="w-full">Brand Identity</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#services" className="w-full">Digital Art & Assets</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#about" className="text-sm font-medium hover:text-indigo-500 transition-colors">
              About
            </a>
          </nav>

          {/* CTA */}
          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
          >
            Start a Project
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* ---- Hero Section ---- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/30">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 dark:opacity-10" />
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text side */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-indigo-500/20 shadow-lg mb-6">
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                  <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                    Premium Studio
                  </span>
                  <Badge variant="outline" className="ml-2 border-indigo-300/30 bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs">
                    New
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  <span className="block text-gray-900 dark:text-white">
                    Where Technical
                  </span>
                  <span className="block text-gray-900 dark:text-white">
                    Precision Meets
                  </span>
                  <span className="block bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Creative Vision.
                  </span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl">
                  Building high-performance websites and distinct visual identities for brands that refuse to blend in.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all">
                    View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-gray-300 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-800">
                    Let’s Talk
                  </Button>
                </div>
              </div>

              {/* Split-screen visual */}
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 grid grid-cols-2">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-800/50 dark:to-pink-800/50 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-6xl">🎨</span>
                </div>
                <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 dark:from-indigo-800/50 dark:to-blue-800/50 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-6xl">💻</span>
                </div>
                {/* Overlay line */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/50 dark:bg-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Portofolio (Work) Section ---- */}
        <section id="work" className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            A curated look at what we create for brands that demand distinction.
          </p>

          {/* Filter tabs */}
          <div className="flex justify-center gap-3 mt-8 mb-12">
            {["All", "Web Design", "Logos", "Digital Art"].map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "ghost"}
                size="sm"
                className={`rounded-full px-5 ${
                  filter === cat
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Portfolio grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
              >
                <div className="h-48 flex items-center justify-center text-5xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 group-hover:scale-105 transition-transform">
                  {item.img}
                </div>
                <CardHeader className="pt-4">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* ---- Services Section ---- */}
        <section
          id="services"
          className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-indigo-50/30 to-white dark:from-gray-900/50 dark:to-gray-950"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
            Our Core Pillars
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            Three integrated disciplines that work together to elevate your brand.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Web Architecture */}
            <Card className="group border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="text-xl">Web Architecture</CardTitle>
                <CardDescription className="text-base">
                  Custom coding, strategic redesigns, and mobile optimization that put{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">speed and results</span> first.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Brand Identity */}
            <Card className="group border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Brand Identity</CardTitle>
                <CardDescription className="text-base">
                  Logo design and typography crafted to make you{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">unforgettable</span>.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Digital Art & Assets */}
            <Card className="group border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                  <Brush className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle className="text-xl">Digital Art & Assets</CardTitle>
                <CardDescription className="text-base">
                  Custom illustrations and prints with a{" "}
                  <span className="font-semibold text-pink-600 dark:text-pink-400">unique aesthetic</span> that no template can replicate.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* ---- Brand Story: Stack vs Prismal ---- */}
        <section id="about" className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
              The Meaning Behind the Name
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
              {/* The Stack */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Layers className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-2xl font-bold">The Stack</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Clean, scalable code. SEO-first architecture. Blazing-fast performance.
                  This is the technical backbone that ensures your digital presence
                  works as hard as you do.
                </p>
              </div>

              {/* The Prismal */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Diamond className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-2xl font-bold">The Prismal</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Color theory, digital painting, and visual storytelling.
                  We bend light through your brand’s essence, creating a spectrum of
                  art that captivates and converts.
                </p>
              </div>
            </div>
            <p className="mt-12 text-center text-xl text-gray-800 dark:text-gray-200 font-medium italic max-w-3xl mx-auto">
              You no longer have to choose between a “boring coder” and a “flaky artist.”<br />
              We are both.
            </p>
          </div>
        </section>

        {/* ---- Redesign Specialized Block ---- */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Is your current website costing you customers?
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  We transform outdated sites into high-converting digital assets. See the difference.
                </p>
                <Button variant="outline" size="lg" className="mt-6 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950">
                  Start a Redesign
                </Button>
              </div>
              <div>
                <BeforeAfterSlider />
              </div>
            </div>
          </div>
        </section>

        {/* ---- Process Section ---- */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            A simple, collaborative process that eliminates the stress of a digital build.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto relative">
            {[
              { step: "01", title: "Discovery", desc: "We talk about your goals, audience, and vision." },
              { step: "02", title: "Creation", desc: "I build your custom Stack and Prismal elements." },
              { step: "03", title: "Launch", desc: "Your brand goes live and starts performing." },
            ].map((p, idx) => (
              <div key={idx} className="text-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg shadow-indigo-500/30">
                  {p.step}
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- Testimonial / Trust (minimal, premium) ---- */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900/80">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300">
              “Stack Prismal built us a brand and website that genuinely doubled our inbound leads. The technical skill and artistic eye are unmatched.”
            </p>
            <p className="mt-6 font-semibold text-gray-900 dark:text-white">Aria D.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Founder, Lumina Studios</p>
          </div>
        </section>
      </main>

      {/* ---- Footer ---- */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-2">Contact</h3>
              <a
                href="mailto:hello@stackprismal.com"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors"
              >
                hello@stackprismal.com
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Instagram className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <a
                href="https://instagram.com/stackprismal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors"
              >
                @stackprismal
              </a>
            </div>

            {/* Back to top */}
            <div className="md:text-right">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-500"
                onClick={scrollToTop}
              >
                ↑ Back to Top
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Stack Prismal Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

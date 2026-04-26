"use client";

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
  ChevronDown,
} from "lucide-react"; // Instagram removed

// ... (BeforeAfterSlider code remains exactly the same)

export default function Home() {
  // ... all the same state and logic ...

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/80 dark:from-gray-950 dark:to-gray-900/80 text-gray-900 dark:text-gray-100">
      {/* Header, Hero, Work, Services, Brand Story, Redesign, Process, Testimonial – ALL THE SAME */}

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

            {/* Social – INSTAGRAM REMOVED, replaced with simple spacer */}
            <div className="flex justify-center md:justify-start">
              {/* Intentionally left blank – add any other social link here if needed */}
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

import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Type, LayoutGrid, MousePointerClick, Eye, BookOpen, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OBJECTIVES = [
  { title: "Understand Fundamentals", desc: "Grasp core design principles like color, typography, and layout." },
  { title: "Enhance Usability", desc: "Learn how visual hierarchy guides users naturally." },
  { title: "Improve Accessibility", desc: "Ensure interfaces work for everyone, regardless of ability." },
  { title: "Build Trust", desc: "Use consistent design to establish credibility and professionalism." },
  { title: "Guide Interaction", desc: "Master visual cues that communicate affordances." },
  { title: "Evoke Emotion", desc: "Leverage color and type to set the right mood." },
  { title: "Reduce Cognitive Load", desc: "Simplify complex information through effective layout." },
  { title: "Drive Action", desc: "Optimize calls-to-action for better conversion." },
];

const MODULES = [
  { href: "/color-theory", label: "Color Theory", icon: Palette, desc: "Harmonies, contrast, and psychological impact." },
  { href: "/typography", label: "Typography", icon: Type, desc: "Font pairings, scaling, and readability." },
  { href: "/layout", label: "Layout & Hierarchy", icon: LayoutGrid, desc: "Grids, spacing, and reading patterns." },
  { href: "/visual-cues", label: "Visual Cues", icon: MousePointerClick, desc: "Affordances, states, and micro-interactions." },
  { href: "/accessibility", label: "Accessibility", icon: Eye, desc: "Inclusive design and WCAG guidelines." },
  { href: "/case-study", label: "Case Study", icon: BookOpen, desc: "Before and after application redesign." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:px-12 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20 -z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Educational Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground mb-6 leading-tight">
              Enhancing UX through <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-4">Graphic Design</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
              A curated visual museum exploring how core graphic design principles shape, clarify, and elevate digital user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/color-theory">
                <Button size="lg" className="h-12 px-8 text-base group" data-testid="btn-start-learning">
                  Start Exploring
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="px-6 py-20 lg:px-12 max-w-7xl mx-auto border-t border-border/50">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Core Modules</h2>
          <p className="text-muted-foreground max-w-2xl">Dive deep into the fundamental pillars of digital design.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            return (
              <motion.div key={mod.href} variants={itemVariants}>
                <Link href={mod.href}>
                  <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <CardTitle className="font-display text-xl">{mod.label}</CardTitle>
                      <CardDescription className="text-base mt-2">{mod.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Objectives */}
      <section className="px-6 py-20 lg:px-12 max-w-7xl mx-auto bg-secondary/30 rounded-3xl mb-20 border border-border/50">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Project Objectives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">What this platform aims to teach and demonstrate.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {OBJECTIVES.map((obj, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-primary font-display font-bold text-lg mb-2">0{i + 1}</div>
              <h3 className="font-bold text-foreground mb-2">{obj.title}</h3>
              <p className="text-sm text-muted-foreground">{obj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

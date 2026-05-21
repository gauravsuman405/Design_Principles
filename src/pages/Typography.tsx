import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Typography() {
  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-4xl font-display font-bold mb-4">Typography & Hierarchy</h1>
        <p className="text-xl text-muted-foreground">How font choices, sizes, and spacing create structure and meaning.</p>
      </motion.div>

      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-8 border-b pb-2">The Type Scale</h2>
        <Card className="bg-card">
          <CardContent className="p-8 flex flex-col gap-6">
            <div className="flex items-baseline justify-between border-b border-border/30 pb-4">
              <span className="text-sm font-mono text-muted-foreground w-24 shrink-0">Display 2</span>
              <span className="text-5xl font-display font-bold flex-1">Hero Headings</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border/30 pb-4">
              <span className="text-sm font-mono text-muted-foreground w-24 shrink-0">Display 1</span>
              <span className="text-4xl font-display font-bold flex-1">Section Titles</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border/30 pb-4">
              <span className="text-sm font-mono text-muted-foreground w-24 shrink-0">Heading 3</span>
              <span className="text-2xl font-display font-bold flex-1">Card Titles</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border/30 pb-4">
              <span className="text-sm font-mono text-muted-foreground w-24 shrink-0">Body Lg</span>
              <span className="text-lg font-sans flex-1">Lead paragraphs and prominent descriptions.</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border/30 pb-4">
              <span className="text-sm font-mono text-muted-foreground w-24 shrink-0">Body Base</span>
              <span className="text-base font-sans text-muted-foreground flex-1">Standard interface text, article content, and general reading.</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-mono text-muted-foreground w-24 shrink-0">Caption</span>
              <span className="text-sm font-sans text-muted-foreground flex-1 tracking-wide">METADATA, LABELS, AND MINOR DETAILS.</span>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-8 border-b pb-2">Readability Comparisons</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-destructive/30">
            <CardContent className="p-8">
              <div className="mb-4 inline-block bg-destructive/10 text-destructive px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Poor Legibility</div>
              <h3 className="text-xl font-bold mb-2 leading-none">Cramped Text Example</h3>
              <p className="text-sm text-muted-foreground leading-none tracking-tighter">This paragraph is very difficult to read because the line height is too tight and the tracking is negative. The characters bleed into each other, making the eye work harder to distinguish shapes. Cognitive load increases dramatically.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-primary/30">
            <CardContent className="p-8">
              <div className="mb-4 inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Good Legibility</div>
              <h3 className="text-xl font-display font-bold mb-4 leading-tight">Optimized Text Example</h3>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">This paragraph is much easier to read. A comfortable line height (typically 1.5 for body text) allows the eye to track back to the start of the next line easily. Appropriate margins and clean sans-serif typefaces reduce strain.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

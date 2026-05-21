import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const WCAG_CRITERIA = [
  {
    level: "A",
    title: "Non-text Content",
    description: "All non-text content has a text alternative that serves the equivalent purpose.",
    category: "Perceivable",
  },
  {
    level: "AA",
    title: "Contrast (Minimum)",
    description: "Text has a contrast ratio of at least 4.5:1 (3:1 for large text) against its background.",
    category: "Perceivable",
  },
  {
    level: "AA",
    title: "Resize Text",
    description: "Text can be resized up to 200% without loss of content or functionality.",
    category: "Perceivable",
  },
  {
    level: "A",
    title: "Keyboard Accessible",
    description: "All functionality is available from a keyboard without requiring specific timings.",
    category: "Operable",
  },
  {
    level: "AA",
    title: "Focus Visible",
    description: "Any keyboard operable UI component has a visible keyboard focus indicator.",
    category: "Operable",
  },
  {
    level: "A",
    title: "Language of Page",
    description: "The default human language of each web page can be programmatically determined.",
    category: "Understandable",
  },
  {
    level: "AA",
    title: "Error Identification",
    description: "Input errors are identified and described in text to the user.",
    category: "Understandable",
  },
  {
    level: "A",
    title: "Parsing",
    description: "Content implemented in markup languages has complete start/end tags and no duplication.",
    category: "Robust",
  },
];

const CONTRAST_PAIRS = [
  { bg: "#ffffff", text: "#1e293b", ratio: "16.1:1", level: "AAA", pass: true, label: "White on Slate 800" },
  { bg: "#4F46E5", text: "#ffffff", ratio: "5.9:1", level: "AA", pass: true, label: "White on Indigo" },
  { bg: "#e2e8f0", text: "#64748b", ratio: "2.6:1", level: "Fail", pass: false, label: "Gray on Light Gray" },
  { bg: "#0F766E", text: "#ffffff", ratio: "5.3:1", level: "AA", pass: true, label: "White on Teal" },
  { bg: "#fef9c3", text: "#ca8a04", ratio: "1.8:1", level: "Fail", pass: false, label: "Yellow on Yellow" },
];

type ColorBlindType = "normal" | "protanopia" | "deuteranopia" | "tritanopia";

const COLORBLIND_FILTERS: Record<ColorBlindType, string> = {
  normal: "none",
  protanopia: "url(#protanopia)",
  deuteranopia: "url(#deuteranopia)",
  tritanopia: "url(#tritanopia)",
};

const INCLUSIVE_CHECKLIST = [
  { done: true, item: "All images have meaningful alt text" },
  { done: true, item: "Color is never the sole means of conveying information" },
  { done: true, item: "Interactive elements have visible focus states" },
  { done: true, item: "Form fields are associated with labels" },
  { done: false, item: "Videos include captions or transcripts" },
  { done: true, item: "Text meets 4.5:1 contrast ratio minimum" },
  { done: false, item: "Skip navigation links are provided" },
  { done: true, item: "Page has a meaningful document title" },
  { done: true, item: "Headings follow a logical hierarchy (h1 → h2 → h3)" },
  { done: false, item: "Touch targets are at least 44×44px on mobile" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Accessibility() {
  const [colorBlind, setColorBlind] = useState<ColorBlindType>("normal");

  const categories = Array.from(new Set(WCAG_CRITERIA.map((c) => c.category)));

  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto">
      {/* SVG Filters for color blindness simulation */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.567 0.433 0 0 0  0.558 0.442 0 0 0  0 0.242 0.758 0 0  0 0 0 1 0" />
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.625 0.375 0 0 0  0.7 0.3 0 0 0  0 0.3 0.7 0 0  0 0 0 1 0" />
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.95 0.05 0 0 0  0 0.433 0.567 0 0  0 0.475 0.525 0 0  0 0 0 1 0" />
          </filter>
        </defs>
      </svg>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-4xl font-display font-bold mb-4">Accessibility & Inclusivity</h1>
        <p className="text-xl text-muted-foreground">
          Designing interfaces that work for everyone — regardless of ability, device, or context.
        </p>
      </motion.div>

      {/* WCAG Overview */}
      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-2 border-b pb-2">WCAG Guidelines Overview</h2>
        <p className="text-muted-foreground mb-8">
          The Web Content Accessibility Guidelines (WCAG) are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).
        </p>

        <Tabs defaultValue={categories[0]}>
          <TabsList className="mb-6 flex-wrap h-auto">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-0">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {WCAG_CRITERIA.filter((c) => c.category === cat).map((criterion, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <Card className="h-full bg-card/60">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-3">
                          <CardTitle className="text-base font-semibold">{criterion.title}</CardTitle>
                          <Badge
                            variant={criterion.level === "AAA" ? "default" : criterion.level === "AA" ? "secondary" : "outline"}
                            className="shrink-0"
                          >
                            {criterion.level}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{criterion.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Contrast Checker */}
      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-2 border-b pb-2">Color Contrast Examples</h2>
        <p className="text-muted-foreground mb-8">
          WCAG 2.1 requires a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONTRAST_PAIRS.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="overflow-hidden border">
                <div
                  className="h-28 flex items-center justify-center text-lg font-semibold px-4 text-center"
                  style={{ backgroundColor: pair.bg, color: pair.text }}
                >
                  Sample Text Aa Bb
                </div>
                <CardContent className="p-4 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium">{pair.label}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">Ratio: {pair.ratio}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {pair.pass ? (
                      <CheckCircle2 size={18} className="text-emerald-500" />
                    ) : (
                      <XCircle size={18} className="text-destructive" />
                    )}
                    <Badge variant={pair.pass ? "secondary" : "destructive"} className="text-xs">
                      {pair.level}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Color Blindness Simulation */}
      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-2 border-b pb-2">Color Blindness Simulation</h2>
        <p className="text-muted-foreground mb-6">
          Approximately 8% of men and 0.5% of women have some form of color vision deficiency. Toggle the filter to preview how your palette looks.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(Object.keys(COLORBLIND_FILTERS) as ColorBlindType[]).map((type) => (
            <button
              key={type}
              onClick={() => setColorBlind(type)}
              data-testid={`btn-colorblind-${type}`}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors border ${
                colorBlind === type
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              {type === "normal" ? "Normal Vision" : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div
          className="rounded-2xl overflow-hidden border border-border"
          style={{ filter: COLORBLIND_FILTERS[colorBlind] }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 h-32">
            <div className="bg-[#4F46E5] flex items-center justify-center text-white text-sm font-medium">Primary</div>
            <div className="bg-[#0F766E] flex items-center justify-center text-white text-sm font-medium">Success</div>
            <div className="bg-[#E11D48] flex items-center justify-center text-white text-sm font-medium">Danger</div>
            <div className="bg-[#D97706] flex items-center justify-center text-white text-sm font-medium">Warning</div>
          </div>
          <div className="p-6 bg-white border-t border-border">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-[#4F46E5] font-semibold text-sm">Active link</span>
              <span className="text-[#0F766E] font-semibold text-sm">Success message</span>
              <span className="text-[#E11D48] font-semibold text-sm">Error notice</span>
              <span className="text-[#D97706] font-semibold text-sm">Warning alert</span>
              <span className="text-slate-800 text-sm">Body text</span>
            </div>
          </div>
        </div>
        {colorBlind !== "normal" && (
          <p className="mt-3 text-sm text-muted-foreground flex items-center gap-1.5">
            <AlertCircle size={14} />
            Notice how some colors become harder to distinguish — use icons or patterns alongside color to convey meaning.
          </p>
        )}
      </section>

      {/* Focus States */}
      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-2 border-b pb-2">Focus State Demonstrations</h2>
        <p className="text-muted-foreground mb-8">
          Keyboard users rely on visible focus indicators to navigate interfaces. Tab through the elements below.
        </p>
        <Card className="bg-card/60">
          <CardContent className="p-8 flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="focus-input">
                Email address
              </label>
              <input
                id="focus-input"
                type="email"
                placeholder="you@example.com"
                data-testid="input-focus-demo"
                className="w-full max-w-sm px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm
                  focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                data-testid="btn-focus-primary"
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
                  hover:opacity-90 transition-opacity"
              >
                Primary Action
              </button>
              <button
                data-testid="btn-focus-secondary"
                className="px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
                  hover:bg-secondary transition-colors"
              >
                Secondary Action
              </button>
              <a
                href="#"
                data-testid="link-focus-demo"
                onClick={(e) => e.preventDefault()}
                className="px-5 py-2.5 text-primary text-sm font-medium underline-offset-4
                  hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                  focus:ring-offset-background rounded-lg"
              >
                A focused link
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Press <kbd className="px-2 py-0.5 rounded bg-secondary text-foreground font-mono text-xs border">Tab</kbd> to see each element's focus ring.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Inclusive Design Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-2 border-b pb-2">Inclusive Design Checklist</h2>
        <p className="text-muted-foreground mb-8">
          A practical checklist for ensuring your interface is welcoming to the broadest possible audience.
        </p>
        <Card className="bg-card/60">
          <CardContent className="p-6">
            <ul className="space-y-3">
              {INCLUSIVE_CHECKLIST.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  {item.done ? (
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${item.done ? "text-foreground" : "text-muted-foreground"}`}>
                    {item.item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

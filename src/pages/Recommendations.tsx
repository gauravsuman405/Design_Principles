import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Type, LayoutGrid, MousePointerClick, Eye, BookOpen, CheckCircle2, ExternalLink } from "lucide-react";

const RECOMMENDATIONS = [
  {
    icon: Palette,
    title: "Color Theory",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    takeaways: [
      "Always verify color contrast with WCAG 2.1 AA standards (minimum 4.5:1 for body text).",
      "Use color purposefully — never as the sole conveyor of information.",
      "Limit your palette to 2–3 primary colors with tonal variations, not a rainbow of hues.",
      "Test your design under color blindness conditions before shipping.",
    ],
  },
  {
    icon: Type,
    title: "Typography",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    takeaways: [
      "Establish a modular type scale (e.g. 12/14/16/20/24/32/48px) and stick to it.",
      "Limit to two typefaces: one display for headings, one sans-serif for body.",
      "Set line-height to 1.5–1.6 for body text for optimal readability.",
      "Keep line length between 60–80 characters for comfortable reading.",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Layout & Visual Hierarchy",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    takeaways: [
      "Use a consistent grid system (8pt or 4pt base) throughout the interface.",
      "Apply the Gestalt principle of proximity to group related information.",
      "Whitespace is not wasted space — it creates emphasis and reduces cognitive load.",
      "Establish a clear visual hierarchy: every page should have one dominant element.",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Visual Cues & Interaction",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    takeaways: [
      "Every interactive element must have a distinct affordance (look clickable).",
      "Provide immediate visual feedback for every user action within 100ms.",
      "Use micro-interactions to confirm state changes without interrupting flow.",
      "Ensure hover, active, and focus states are visually distinct and consistent.",
    ],
  },
  {
    icon: Eye,
    title: "Accessibility",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    takeaways: [
      "Target WCAG 2.1 AA compliance as a minimum for all new projects.",
      "Design keyboard-first — every feature must be reachable without a mouse.",
      "Provide visible focus indicators on all interactive elements.",
      "Use semantic HTML elements to aid screen reader navigation.",
    ],
  },
  {
    icon: BookOpen,
    title: "Consistency & Aesthetics",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    takeaways: [
      "Build and maintain a design system with reusable component tokens.",
      "Consistency reduces learning time — users should never wonder 'how does this work?'",
      "Visual aesthetics build trust — polish signals professionalism and reliability.",
      "Apply motion and animation consistently: same easing and duration for similar actions.",
    ],
  },
];

const REFERENCES = [
  {
    authors: "Nielsen, J.",
    year: "1994",
    title: "10 Usability Heuristics for User Interface Design",
    source: "Nielsen Norman Group",
    url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
  },
  {
    authors: "Lidwell, W., Holden, K., & Butler, J.",
    year: "2010",
    title: "Universal Principles of Design (2nd ed.)",
    source: "Rockport Publishers",
    url: null,
  },
  {
    authors: "World Wide Web Consortium (W3C)",
    year: "2018",
    title: "Web Content Accessibility Guidelines (WCAG) 2.1",
    source: "W3C Recommendation",
    url: "https://www.w3.org/TR/WCAG21/",
  },
  {
    authors: "Itten, J.",
    year: "1961",
    title: "The Art of Color",
    source: "John Wiley & Sons",
    url: null,
  },
  {
    authors: "Bringhurst, R.",
    year: "2004",
    title: "The Elements of Typographic Style (3rd ed.)",
    source: "Hartley & Marks",
    url: null,
  },
  {
    authors: "Krug, S.",
    year: "2014",
    title: "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
    source: "New Riders",
    url: null,
  },
  {
    authors: "Wertheimer, M.",
    year: "1923",
    title: "Laws of Organization in Perceptual Forms",
    source: "Psycologische Forschung",
    url: null,
  },
  {
    authors: "Norman, D.",
    year: "2013",
    title: "The Design of Everyday Things (Revised ed.)",
    source: "Basic Books",
    url: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 280, damping: 24 } },
};

export default function Recommendations() {
  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-4xl font-display font-bold mb-4">Best Practices & Recommendations</h1>
        <p className="text-xl text-muted-foreground">
          Synthesized guidance for applying graphic design principles to future UI/UX projects, drawn from research and demonstrated throughout this platform.
        </p>
      </motion.div>

      {/* Key Takeaways per Principle */}
      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-2 border-b pb-2">Key Takeaways by Principle</h2>
        <p className="text-muted-foreground mb-8">
          Actionable recommendations for each design domain covered in this study.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {RECOMMENDATIONS.map((rec, i) => {
            const Icon = rec.icon;
            return (
              <motion.div key={i} variants={itemVariants}>
                <Card className="h-full bg-card/60 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-1">
                      <div className={`w-9 h-9 rounded-lg ${rec.bg} flex items-center justify-center`}>
                        <Icon size={18} className={rec.color} />
                      </div>
                      <CardTitle className="text-base font-semibold">{rec.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {rec.takeaways.map((t, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Printable Checklist */}
      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-2 border-b pb-2">Project Checklist</h2>
        <p className="text-muted-foreground mb-8">
          Use this checklist when starting or reviewing a UI/UX project to ensure design principles are applied.
        </p>
        <Card className="bg-card/60 border print:border-none">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Graphic Design Principles Checklist</CardTitle>
              <Badge variant="outline" className="font-mono text-xs">v1.0</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5">
              {[
                "Color palette tested for WCAG AA contrast compliance",
                "Maximum 2 typefaces used throughout the interface",
                "Consistent 8pt spacing grid applied globally",
                "Clear visual hierarchy established on every page",
                "All interactive elements have hover + focus states",
                "Color blindness simulation reviewed",
                "Form fields linked to descriptive labels",
                "Alt text provided for all meaningful images",
                "Touch targets minimum 44×44px on mobile",
                "Type scale based on modular scale system",
                "Whitespace used intentionally, not avoided",
                "Gestalt grouping applied to related content",
                "Micro-interactions confirm every state change",
                "Error states are descriptive and actionable",
                "Dark mode tested for all color pairs",
                "Design system / component tokens documented",
              ].map((item, i) => (
                <label key={i} className="flex items-start gap-3 py-1.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    data-testid={`checkbox-checklist-${i}`}
                    className="w-4 h-4 mt-0.5 rounded border-border accent-primary shrink-0"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Literature References */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-2 border-b pb-2">Literature References</h2>
        <p className="text-muted-foreground mb-8">
          Foundational texts and resources that informed this research platform.
        </p>
        <div className="space-y-4">
          {REFERENCES.map((ref, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-4"
            >
              <span className="text-primary font-display font-bold text-sm w-6 shrink-0 mt-0.5">
                [{i + 1}]
              </span>
              <div className="min-w-0">
                <p className="text-sm text-foreground leading-relaxed">
                  {ref.authors} ({ref.year}).{" "}
                  <em className="font-medium not-italic text-foreground">{ref.title}</em>.{" "}
                  <span className="text-muted-foreground">{ref.source}.</span>
                </p>
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-reference-${i}`}
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                  >
                    <ExternalLink size={11} />
                    {ref.url}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-primary/5 border border-primary/20 p-8"
      >
        <h2 className="text-xl font-display font-bold mb-4">Conclusion</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Graphic design principles are not decorative add-ons to UI development — they are foundational tools that determine whether a digital product succeeds or fails at communicating with its users. As demonstrated throughout this platform, color theory, typography, layout, visual hierarchy, interactive affordances, and accessibility each play a measurable and interdependent role in shaping the user experience.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Future projects that systematically apply these principles — validated through user testing and iterative refinement — will produce interfaces that are not only more beautiful, but more trustworthy, more usable, and more inclusive for the full diversity of people who interact with them.
        </p>
      </motion.section>
    </div>
  );
}

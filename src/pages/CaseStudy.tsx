import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";

type Panel = "before" | "after";

const ANNOTATIONS = [
  {
    principle: "Color Contrast",
    issue: "Light gray text on white background fails WCAG AA (1.9:1 ratio).",
    fix: "Deep slate text on white achieves 16:1 ratio, well above WCAG AAA threshold.",
  },
  {
    principle: "Visual Hierarchy",
    issue: "All text rendered at same size and weight — no clear heading structure.",
    fix: "Display font at 2.5rem for page title, 1.125rem for labels, 0.875rem for metadata.",
  },
  {
    principle: "Spacing & Layout",
    issue: "Cramped 4px padding between elements creates cognitive overload.",
    fix: "Generous 24px padding, 16px gap between cards, breathing room between sections.",
  },
  {
    principle: "Typography",
    issue: "System default font (Times New Roman) used with no line-height control.",
    fix: "Inter at 1.6 line-height for body, Space Grotesk for display — optimized for screens.",
  },
  {
    principle: "Interactive Affordance",
    issue: "Action buttons styled identically to decorative boxes — no affordance.",
    fix: "Primary buttons with filled background, hover state, and consistent placement.",
  },
  {
    principle: "Consistency",
    issue: "Each section uses a different visual language — cards, lists, and raw text mixed.",
    fix: "Unified card component with border, background, and padding applied consistently.",
  },
];

const BEFORE_ISSUES = [
  "Font: Times New Roman, 14px, no hierarchy",
  "Primary text color: #aaaaaa on white (fails WCAG)",
  "Padding: 4px — elements feel cramped",
  "Buttons indistinguishable from containers",
  "No visual grouping or whitespace",
  "Inconsistent font sizes across sections",
];

const AFTER_FIXES = [
  "Font: Inter + Space Grotesk, type scale system",
  "Primary text: #1e293b on white (16:1 contrast ratio)",
  "Padding: 24px — elements have room to breathe",
  "Buttons have filled backgrounds and hover states",
  "Clear grid layout with deliberate whitespace",
  "Consistent typographic hierarchy throughout",
];

export default function CaseStudy() {
  const [activePanel, setActivePanel] = useState<Panel>("before");

  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-4xl font-display font-bold mb-4">Case Study: Before & After</h1>
        <p className="text-xl text-muted-foreground">
          A fictional app dashboard redesigned by applying the graphic design principles explored in this project.
        </p>
      </motion.div>

      {/* Toggle */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setActivePanel("before")}
            data-testid="btn-panel-before"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all ${
              activePanel === "before"
                ? "bg-destructive text-white border-destructive"
                : "bg-card border-border text-muted-foreground hover:border-destructive/50"
            }`}
          >
            Before
          </button>
          <ArrowRight size={16} className="text-muted-foreground" />
          <button
            onClick={() => setActivePanel("after")}
            data-testid="btn-panel-after"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all ${
              activePanel === "after"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            After
          </button>
        </div>

        {/* Simulated UI mockup */}
        <motion.div
          key={activePanel}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border overflow-hidden shadow-lg"
        >
          {activePanel === "before" ? (
            /* === BEFORE: intentionally bad design === */
            <div style={{ fontFamily: "Times New Roman, serif", background: "#f9f9f9", padding: "4px" }}>
              <div style={{ background: "#fff", padding: "4px", borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: "12px", color: "#aaaaaa", fontWeight: "normal" }}>
                  my app dashboard
                </span>
              </div>
              <div style={{ padding: "4px" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "4px" }}>
                  {["Total Users", "Revenue", "Sessions", "Bounce Rate"].map((label, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        padding: "4px",
                        background: "#fff",
                        border: "1px solid #eee",
                        fontSize: "11px",
                        color: "#aaaaaa",
                      }}
                    >
                      <div>{label}</div>
                      <div style={{ fontSize: "16px", color: "#bbb" }}>
                        {["1,204", "$8,451", "3,892", "42%"][i]}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "2px" }}>
                  <div style={{ flex: 2, background: "#fff", border: "1px solid #eee", padding: "4px", fontSize: "11px", color: "#aaa" }}>
                    <div style={{ marginBottom: "4px" }}>recent activity</div>
                    {["User signed up", "Payment received", "Report exported", "Bug reported"].map((item, i) => (
                      <div key={i} style={{ padding: "2px 0", borderBottom: "1px solid #f5f5f5", color: "#ccc" }}>
                        {item} — just now
                      </div>
                    ))}
                  </div>
                  <div style={{ flex: 1, background: "#fff", border: "1px solid #eee", padding: "4px", fontSize: "11px", color: "#aaa" }}>
                    <div style={{ marginBottom: "4px" }}>actions</div>
                    <div style={{ background: "#f0f0f0", padding: "4px", marginBottom: "2px", fontSize: "10px" }}>Export Data</div>
                    <div style={{ background: "#f0f0f0", padding: "4px", marginBottom: "2px", fontSize: "10px" }}>Add User</div>
                    <div style={{ background: "#f0f0f0", padding: "4px", fontSize: "10px" }}>Generate Report</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* === AFTER: design principles applied === */
            <div className="bg-background text-foreground">
              <div className="border-b border-border bg-sidebar px-6 py-4 flex items-center justify-between">
                <h2 className="font-display font-bold text-lg">Dashboard</h2>
                <button className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity" data-testid="btn-add-user-after">
                  Add User
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Total Users", value: "1,204", delta: "+12%" },
                    { label: "Revenue", value: "$8,451", delta: "+5.3%" },
                    { label: "Sessions", value: "3,892", delta: "+8.1%" },
                    { label: "Bounce Rate", value: "42%", delta: "-2%" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-4">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">{stat.label}</p>
                      <p className="text-2xl font-display font-bold">{stat.value}</p>
                      <p className="text-xs text-emerald-500 font-medium mt-1">{stat.delta} this month</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">Recent Activity</h3>
                    <ul className="space-y-3">
                      {["User signed up", "Payment received", "Report exported", "Bug reported"].map((item, i) => (
                        <li key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                          <span className="text-sm">{item}</span>
                          <span className="text-xs text-muted-foreground">Just now</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">Quick Actions</h3>
                    <div className="flex flex-col gap-2">
                      {["Export Data", "Generate Report"].map((label, i) => (
                        <button
                          key={i}
                          data-testid={`btn-action-${label.toLowerCase().replace(/ /g,'-')}-after`}
                          className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm font-medium text-left hover:bg-secondary transition-colors"
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Issue list */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(activePanel === "before" ? BEFORE_ISSUES : AFTER_FIXES).map((line, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm">
              {activePanel === "before" ? (
                <AlertTriangle size={15} className="text-destructive shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
              )}
              <span className={activePanel === "before" ? "text-muted-foreground" : "text-foreground"}>{line}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Design Decision Annotations */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-2 border-b pb-2">Design Decision Annotations</h2>
        <p className="text-muted-foreground mb-8">
          Each change was deliberate and grounded in a specific graphic design principle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ANNOTATIONS.map((ann, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full bg-card/60 border hover:border-primary/40 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</Badge>
                    <CardTitle className="text-base">{ann.principle}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{ann.issue}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm">{ann.fix}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

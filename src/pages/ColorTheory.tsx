import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

const COLORS = [
  { hex: "#4F46E5", name: "Electric Indigo", emotion: "Trust, Technology, Focus", useCases: "Primary actions, Branding" },
  { hex: "#0F766E", name: "Deep Teal", emotion: "Calm, Growth, Security", useCases: "Success states, Financial data" },
  { hex: "#E11D48", name: "Crimson", emotion: "Urgency, Passion, Danger", useCases: "Destructive actions, Errors" },
  { hex: "#D97706", name: "Amber", emotion: "Warmth, Warning, Energy", useCases: "Warnings, Highlights" },
  { hex: "#1E293B", name: "Slate 800", emotion: "Authority, Structure", useCases: "Typography, Backgrounds" },
];

export default function ColorTheory() {
  const [hue, setHue] = useState(250);

  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-4xl font-display font-bold mb-4">Color Theory in UX</h1>
        <p className="text-xl text-muted-foreground">How hue, contrast, and psychology influence user perception and behavior.</p>
      </motion.div>

      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-8 border-b pb-2">Color Psychology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {COLORS.map((c) => (
            <div key={c.hex} className="flex flex-col">
              <div 
                className="h-32 rounded-xl mb-4 shadow-sm border border-border/50"
                style={{ backgroundColor: c.hex }}
              />
              <h3 className="font-bold">{c.name}</h3>
              <p className="text-sm font-mono text-muted-foreground mb-2">{c.hex}</p>
              <div className="text-sm">
                <span className="font-medium text-foreground">Emotion:</span> <span className="text-muted-foreground">{c.emotion}</span>
              </div>
              <div className="text-sm mt-1">
                <span className="font-medium text-foreground">Usage:</span> <span className="text-muted-foreground">{c.useCases}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-8 border-b pb-2">Interactive Color Harmonies</h2>
        <Card className="bg-card">
          <CardContent className="p-8">
            <div className="mb-8">
              <label className="text-sm font-medium mb-4 block">Base Hue: {hue}°</label>
              <Slider 
                defaultValue={[250]} 
                max={360} 
                step={1} 
                onValueChange={(v) => setHue(v[0])}
                className="w-full"
              />
            </div>

            <Tabs defaultValue="complementary">
              <TabsList className="mb-8">
                <TabsTrigger value="complementary">Complementary</TabsTrigger>
                <TabsTrigger value="analogous">Analogous</TabsTrigger>
                <TabsTrigger value="triadic">Triadic</TabsTrigger>
              </TabsList>
              
              <TabsContent value="complementary" className="mt-0">
                <div className="flex h-32 rounded-xl overflow-hidden shadow-sm">
                  <div className="flex-1" style={{ backgroundColor: `hsl(${hue}, 80%, 60%)` }}></div>
                  <div className="flex-1" style={{ backgroundColor: `hsl(${(hue + 180) % 360}, 80%, 60%)` }}></div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">High contrast, good for drawing attention to specific elements.</p>
              </TabsContent>
              
              <TabsContent value="analogous" className="mt-0">
                <div className="flex h-32 rounded-xl overflow-hidden shadow-sm">
                  <div className="flex-1" style={{ backgroundColor: `hsl(${(hue - 30 + 360) % 360}, 80%, 60%)` }}></div>
                  <div className="flex-1" style={{ backgroundColor: `hsl(${hue}, 80%, 60%)` }}></div>
                  <div className="flex-1" style={{ backgroundColor: `hsl(${(hue + 30) % 360}, 80%, 60%)` }}></div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Low contrast, creates a serene and comfortable design.</p>
              </TabsContent>

              <TabsContent value="triadic" className="mt-0">
                <div className="flex h-32 rounded-xl overflow-hidden shadow-sm">
                  <div className="flex-1" style={{ backgroundColor: `hsl(${hue}, 80%, 60%)` }}></div>
                  <div className="flex-1" style={{ backgroundColor: `hsl(${(hue + 120) % 360}, 80%, 60%)` }}></div>
                  <div className="flex-1" style={{ backgroundColor: `hsl(${(hue + 240) % 360}, 80%, 60%)` }}></div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Vibrant even with pale colors, good for diverse data visualization.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

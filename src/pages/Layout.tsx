import React from "react";
import { motion } from "framer-motion";

export default function Layout() {
  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-4xl font-display font-bold mb-4">Layout & Hierarchy</h1>
        <p className="text-xl text-muted-foreground">Spatial organization, grids, and the principles of Gestalt.</p>
      </motion.div>

      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-8 border-b pb-2">Gestalt Principle: Proximity</h2>
        <p className="mb-6 text-muted-foreground">Elements placed close to each other are perceived as a related group.</p>
        
        <div className="bg-card border rounded-xl p-12 flex flex-col md:flex-row gap-12 items-center justify-center">
          
          <div className="flex flex-col items-center gap-2">
            <div className="text-sm font-bold text-muted-foreground mb-4">Poor Proximity</div>
            <div className="w-64 border rounded p-4 flex flex-col gap-4 bg-background">
              <div className="h-4 bg-muted w-1/2 rounded"></div>
              <div className="h-2 bg-muted/50 w-full rounded"></div>
              
              <div className="h-4 bg-muted w-1/2 rounded mt-6"></div>
              <div className="h-2 bg-muted/50 w-full rounded"></div>
              <div className="h-8 bg-primary/20 w-full rounded"></div>
            </div>
          </div>
          
         
          <div className="flex flex-col items-center gap-2">
            <div className="text-sm font-bold text-primary mb-4">Good Proximity</div>
            <div className="w-64 border rounded p-4 flex flex-col gap-4 bg-background">
              <div className="flex flex-col gap-1 mb-4">
                <div className="h-4 bg-foreground w-1/2 rounded"></div>
                <div className="h-2 bg-muted-foreground w-full rounded"></div>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="h-4 bg-foreground w-1/2 rounded"></div>
                <div className="h-2 bg-muted-foreground w-full rounded"></div>
              </div>
              <div className="h-8 bg-primary w-full rounded mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-8 border-b pb-2">The 12-Column Grid</h2>
        
        
        <div className="grid grid-cols-12 gap-4 h-64 bg-card border rounded-xl p-8 relative">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-primary/10 rounded h-full relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">{i + 1}</span>
            </div>
          ))}
          
          <div className="absolute left-8 top-8 right-8 bottom-8 grid grid-cols-12 gap-4 pointer-events-none">
            <div className="col-span-12 md:col-span-8 bg-primary/40 rounded border border-primary/50 flex items-center justify-center">
              <span className="text-primary-foreground font-bold">Main Content (8 cols)</span>
            </div>
            <div className="col-span-12 md:col-span-4 bg-secondary/80 rounded border border-border flex items-center justify-center">
              <span className="text-foreground font-bold text-sm">Sidebar (4 cols)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
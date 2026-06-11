import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function VisualCues() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSimulateAction = () => {
    setIsLoading(true);
    setIsSuccess(false);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2000);
    }, 1500);
  };

  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-4xl font-display font-bold mb-4">Visual Cues & Interaction</h1>
        <p className="text-xl text-muted-foreground">Affordances, micro-interactions, and state management.</p>
      </motion.div>

      {/* FIXED: Button Affordances Section with Responsive Grid */}
      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-8 border-b pb-2">Button Affordances</h2>
        <div className="bg-card border rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Primary Action */}
            <div className="flex flex-col justify-between space-y-3 border-b sm:border-b-0 pb-4 sm:pb-0">
              <div className="space-y-1">
                <Label className="text-sm font-bold text-slate-800 dark:text-slate-200">Primary Action</Label>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High contrast, solid fill indicates main CTA.
                </p>
              </div>
              <div className="pt-2">
                <Button className="w-full sm:w-fit">Save Changes</Button>
              </div>
            </div>

            {/* Secondary Action */}
            <div className="flex flex-col justify-between space-y-3 border-b sm:border-b-0 pb-4 sm:pb-0">
              <div className="space-y-1">
                <Label className="text-sm font-bold text-slate-800 dark:text-slate-200">Secondary Action</Label>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Border only, less visual weight.
                </p>
              </div>
              <div className="pt-2">
                <Button variant="outline" className="w-full sm:w-fit">Cancel</Button>
              </div>
            </div>

            {/* Destructive Action */}
            <div className="flex flex-col justify-between space-y-3 border-b sm:border-b-0 pb-4 sm:pb-0">
              <div className="space-y-1">
                <Label className="text-sm font-bold text-slate-800 dark:text-slate-200">Destructive</Label>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Red hue universally signifies danger/deletion.
                </p>
              </div>
              <div className="pt-2">
                <Button variant="destructive" className="w-full sm:w-fit">Delete Project</Button>
              </div>
            </div>

            {/* Ghost/Tertiary Action */}
            <div className="flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <Label className="text-sm font-bold text-slate-800 dark:text-slate-200">Ghost/Tertiary</Label>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  No bounds until hovered, very low priority.
                </p>
              </div>
              <div className="pt-2">
                <Button variant="ghost" className="w-full sm:w-fit justify-start sm:justify-center">Learn more</Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Micro-interactions Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-8 border-b pb-2">Micro-interactions: Loading States</h2>
        <div className="max-w-sm bg-card border rounded-xl p-8 space-y-4 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="name@example.com" disabled={isLoading || isSuccess} />
          </div>
          <Button 
            className="w-full" 
            onClick={handleSimulateAction} 
            disabled={isLoading || isSuccess}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4 text-green-400" />
                Subscribed
              </>
            ) : (
              "Subscribe to Newsletter"
            )}
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Providing immediate feedback when an action is taken prevents users from clicking multiple times and reduces anxiety.
          </p>
        </div>
      </section>
    </div>
  );
}

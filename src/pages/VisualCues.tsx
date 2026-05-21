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

      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-8 border-b pb-2">Button Affordances</h2>
        <div className="flex flex-wrap gap-8 items-center bg-card border rounded-xl p-8">
          <div className="space-y-2">
            <Label>Primary Action</Label>
            <Button>Save Changes</Button>
            <p className="text-xs text-muted-foreground w-32">High contrast, solid fill indicates main CTA.</p>
          </div>
          <div className="space-y-2">
            <Label>Secondary Action</Label>
            <Button variant="outline">Cancel</Button>
            <p className="text-xs text-muted-foreground w-32">Border only, less visual weight.</p>
          </div>
          <div className="space-y-2">
            <Label>Destructive</Label>
            <Button variant="destructive">Delete Project</Button>
            <p className="text-xs text-muted-foreground w-32">Red hue universally signifies danger/deletion.</p>
          </div>
          <div className="space-y-2">
            <Label>Ghost/Tertiary</Label>
            <Button variant="ghost">Learn more</Button>
            <p className="text-xs text-muted-foreground w-32">No bounds until hovered, very low priority.</p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold mb-8 border-b pb-2">Micro-interactions: Loading States</h2>
        <div className="max-w-sm bg-card border rounded-xl p-8 space-y-4">
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

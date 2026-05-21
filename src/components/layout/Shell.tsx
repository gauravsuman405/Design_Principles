import React from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Palette,
  Type,
  LayoutGrid,
  MousePointerClick,
  Eye,
  BookOpen,
  CheckCircle2,
  Home
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Overview", icon: Home },
  { href: "/color-theory", label: "Color Theory", icon: Palette },
  { href: "/typography", label: "Typography", icon: Type },
  { href: "/layout", label: "Layout & Hierarchy", icon: LayoutGrid },
  { href: "/visual-cues", label: "Visual Cues", icon: MousePointerClick },
  { href: "/accessibility", label: "Accessibility", icon: Eye },
  { href: "/case-study", label: "Case Study", icon: BookOpen },
  { href: "/recommendations", label: "Recommendations", icon: CheckCircle2 },
];

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const [location] = useLocation();

  return (
    <div className="flex flex-col h-full py-6">
      <div className="px-6 mb-8">
        <h2 className="text-xl font-display font-bold tracking-tight text-foreground flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <span className="font-display font-bold text-xs">UX</span>
          </div>
          Design Principles
        </h2>
        <p className="text-sm text-muted-foreground mt-2 font-sans">
          A visual museum of UX design fundamentals
        </p>
      </div>

      <ScrollArea className="flex-1 px-4">
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <div
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                  data-testid={`nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                >
                  <Icon size={18} />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      
      <div className="p-6 mt-auto border-t border-border/50">
        <div className="text-xs text-muted-foreground">
          Educational Resource
          <br/>© {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex w-full">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col fixed inset-y-0 z-50 border-r border-border bg-sidebar">
        <NavContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-72 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-40 flex h-16 items-center border-b border-border bg-background/80 backdrop-blur-md px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0 lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 border-r bg-sidebar">
              <NavContent />
            </SheetContent>
          </Sheet>
          <div className="ml-4 font-display font-bold">UX Principles</div>
        </header>

        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}

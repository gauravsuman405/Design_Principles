import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Shell from "@/components/layout/Shell";
import Home from "@/pages/Home";
import ColorTheory from "@/pages/ColorTheory";
import Typography from "@/pages/Typography";
import Layout from "@/pages/Layout";
import VisualCues from "@/pages/VisualCues";
import Accessibility from "@/pages/Accessibility";
import CaseStudy from "@/pages/CaseStudy";
import Recommendations from "@/pages/Recommendations";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Shell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/color-theory" component={ColorTheory} />
        <Route path="/typography" component={Typography} />
        <Route path="/layout" component={Layout} />
        <Route path="/visual-cues" component={VisualCues} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/case-study" component={CaseStudy} />
        <Route path="/recommendations" component={Recommendations} />
        <Route component={NotFound} />
      </Switch>
    </Shell>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base="">
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

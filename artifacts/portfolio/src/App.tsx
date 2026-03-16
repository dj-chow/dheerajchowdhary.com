import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudy1 from "@/pages/CaseStudy1";
import CaseStudy2 from "@/pages/CaseStudy2";
import CaseStudy3 from "@/pages/CaseStudy3";
import CaseStudy4 from "@/pages/CaseStudy4";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/case-studies/risk-platform" component={CaseStudy1} />
        <Route path="/case-studies/frtb-program" component={CaseStudy2} />
        <Route path="/case-studies/upgrad-google" component={CaseStudy3} />
        <Route path="/case-studies/nlp-assessment" component={CaseStudy4} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

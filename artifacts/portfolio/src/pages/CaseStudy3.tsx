import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Activity, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function CaseStudy3() {
  useDocumentMeta({
    title: "Google Partnership Case Study — Dheeraj Chowdhary",
    description: "How I built an Android development program with Google from scratch, scaled to 5,000+ learners, then led the data-driven decision to sunset it."
  });
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/#case-studies" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Case Studies
        </a>

        <motion.div initial="hidden" animate="show" variants={fadeUp} className="space-y-12">
          
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-sm py-1 px-3">$2.25B Edtech Unicorn</Badge>
              <span className="text-muted-foreground font-medium">Product Manager</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Building with Google — Then Knowing When to Stop
            </h1>
            <p className="text-2xl font-medium italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
              "I built a product from zero, partnered with Google, scaled to 5,000+ learners. Then I made the call to kill it."
            </p>
          </header>

          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-card border border-border/50 relative shadow-2xl shadow-black/50">
            <img 
              src={`${import.meta.env.BASE_URL}images/case-study-3.png`} 
              alt="Digital learning nodes concept" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <section className="grid md:grid-cols-[1fr_300px] gap-12">
            <div className="space-y-10">
              
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" /> The Problem
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    A $2.25B edtech startup wanted to launch an Android dev program in India. There was no content, no mentor network, no brand deals, and no students.
                  </p>
                  <p>
                    This was a blank page. The company needed someone to figure out if this product should exist, what it should look like, and how to bring it to market.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" /> What I Did
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong>Built the case:</strong> I started with market sizing and P&L modeling. Sized the target market, found the gap between free guides and paid programs, and built the case before anyone wrote a line of content.
                  </p>
                  <p>
                    <strong>Secured Google:</strong> Built the pitch, set the terms, closed the deal. One of only six national partners. This wasn't for show. It defined our credibility, pricing power, and edge. Made every product tradeoff: content structure, pricing, cohort sizes, sync vs. async ratios, mentor criteria. Each one was a tension between scale and quality.
                  </p>
                  <p>
                    <strong>Led launch, then led the wind-down:</strong> Led a 20-person team across content, video, marketing, and sales to launch. When finish rates and job outcomes dropped below quality bars, I didn't chase vanity growth. Learner count doesn't matter if the outcome you promised isn't landing. Ran a review, showed the data to leaders, and proposed a wind-down with zero learner impact.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card/60 border border-border/60 relative overflow-hidden">
                <Quote className="absolute -top-2 -left-2 w-14 h-14 text-primary/15 rotate-180" />
                <blockquote className="text-base text-foreground/80 leading-relaxed italic mb-5 relative z-10">
                  "Having run his own startup, he brought a fresh and entrepreneurial mindset to the team. He did market sizing, recruited a stellar team, did user research, worked on marketing campaigns, helped establish corporate partnerships and a lot more. Very professional, hard working and very data-driven."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary shrink-0">KB</div>
                  <div>
                    <div className="text-sm font-bold text-foreground leading-tight">Kushal Bhagia</div>
                    <div className="text-xs text-muted-foreground">Tech Investor</div>
                    <div className="text-xs text-muted-foreground/60">Colleague at this company</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Key Takeaway
                </h2>
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-foreground text-lg leading-relaxed font-medium">
                  The hardest product call is when to stop. The program worked by vanity metrics, but job outcomes told another story. Killing my own product when the data said stop taught me more than building it.
                </div>
              </div>

            </div>

            {/* Sticky Sidebar Metrics */}
            <div className="space-y-6">
              <div className="sticky top-32 p-6 rounded-2xl bg-card/50 border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" /> Outcomes
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">5,000+</div>
                    <div className="text-sm font-medium text-muted-foreground">Learners reached</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">1 of 6</div>
                    <div className="text-sm font-medium text-muted-foreground">Google national deals in India</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">0</div>
                    <div className="text-sm font-medium text-muted-foreground">Learner harm during wind-down</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-xl font-bold text-primary mb-1">Full Lifecycle</div>
                    <div className="text-sm font-medium text-muted-foreground">Zero to launch to scale to sunset</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}

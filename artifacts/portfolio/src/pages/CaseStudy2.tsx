import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function CaseStudy2() {
  useDocumentMeta({
    title: "Regulatory Program Case Study — Dheeraj Chowdhary",
    description: "How I resolved 10 critical design decisions across 6 delivery teams on a $20M+ regulatory program at Bank of Montreal."
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
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-sm py-1 px-3">Bank of Montreal, Regulatory Trading Programs</Badge>
              <span className="text-muted-foreground font-medium">Solution Architect</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Resolving 10 Critical Decisions on a $20M+ Program
            </h1>
            <p className="text-2xl font-medium italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
              "Six teams. Three years in. The hardest feature was not defined. I had to figure out what to build, not just how to ship it."
            </p>
          </header>

          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-card border border-border/50 relative shadow-2xl shadow-black/50">
            <img 
              src={`${import.meta.env.BASE_URL}images/case-study-2.png`} 
              alt="Network nodes data flow" 
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
                    The FRTB program was a $20M+ multi-year rule-driven push at a major bank. By year three, delivery had broken apart. Six teams worked in silos with competing goals.
                  </p>
                  <p>
                    The hardest problem: growing trade breakdown from one layer to many layers. Nobody had defined what this feature needed to do. Without it, the bank's capital costs were bloated. It was a "what to build" problem that nobody owned.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" /> What I Did
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Teams weren't clashing over fixes. They clashed because nobody had defined what the product needed to do. My first move was to own the spec, not the process. I sat with traders, traced data flows end-to-end, and turned user reality into product needs for all six teams.
                  </p>
                  <p>
                    <strong>Forced shared clarity:</strong> I replaced siloed calls with joint design sessions. Tracing data flows gave all teams the same source of truth.
                  </p>
                  <p>
                    <strong>Led 10 design reviews:</strong> In regulated settings, rules aren't overhead. Each review was a product call with an audit trail: data ownership, method, reporting order, pros and cons, and a pick to defend. I used it as the tool to resolve gray areas.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Key Takeaway
                </h2>
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-foreground text-lg leading-relaxed font-medium">
                  The highest-value PM skill in a large program is stating the problem clearly enough that shared views become possible. Once I wrote the spec from the user's side, the "politics" resolved on their own.
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
                    <div className="text-3xl font-bold text-primary mb-1">10</div>
                    <div className="text-sm font-medium text-muted-foreground">Key design calls resolved</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">6</div>
                    <div className="text-sm font-medium text-muted-foreground">Siloed teams aligned</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">Capital</div>
                    <div className="text-sm font-medium text-muted-foreground">Costs cut via trade breakdown feature</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">Pass</div>
                    <div className="text-sm font-medium text-muted-foreground">Full rating achieved</div>
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

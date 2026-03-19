import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Target, Activity, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function CaseStudy1() {
  useDocumentMeta({
    title: "Risk Platform Case Study — Dheeraj Chowdhary",
    description: "How I turned a failed risk reporting pilot into a 250+ user self-serve platform, cutting executive reporting requests by 60% on a $50K budget."
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
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-sm py-1 px-3">Bank of Montreal, Risk Reporting</Badge>
              <span className="text-muted-foreground font-medium">Product Owner</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Turning a Failed Pilot into a 250+ User Risk Platform
            </h1>
            <p className="text-2xl font-medium italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
              "Leaders were making risk calls from sheets on their phones. The first attempt to fix it failed."
            </p>
          </header>

          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-card border border-border/50 relative shadow-2xl shadow-black/50">
            <img 
              src={`${import.meta.env.BASE_URL}images/case-study-1.png`} 
              alt="Data visualization interface" 
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
                    The risk team built reports by hand. Leaders checked key data on phones between meetings. A prior pilot had failed fully.
                  </p>
                  <p>
                    But it wasn't just a tech failure. The tool was built to speed up old work, not solve the problem users had. I was given a blank page, one developer, and $50K.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" /> What I Did
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    A better version of the wrong product is still wrong. Instead of rebuilding, I started over with people. Ran research with analysts and leaders. Found two pain points: analysts wanted to stop chasing data, and leaders feared red flags they couldn't defend.
                  </p>
                  <p>
                    <strong>Built for real behavior:</strong> Leaders checked breach status on their phones, scanning only for problems. So I built breach status as the top view, mobile-first. Analyst notes sat below so every flag had context before a leader saw it.
                  </p>
                  <p>
                    <strong>Shipped under constraints:</strong> People wanted custom views, but a 2-person team couldn't maintain those. I said no and built self-serve dashboards instead. Adoption over custom work. Tested with early fans before scaling to the full org.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card/60 border border-border/60 relative overflow-hidden">
                <Quote className="absolute -top-2 -left-2 w-14 h-14 text-primary/15 rotate-180" />
                <blockquote className="text-base text-foreground/80 leading-relaxed italic mb-5 relative z-10">
                  "Dheeraj is a high performing consultant who knows how to solve the most technical and complex of problems while being able to communicate them in succinct and easy-to-understand solutions. He is stakeholder-oriented and knows how to balance customer needs with project budget and timeline constraints."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary shrink-0">AW</div>
                  <div>
                    <div className="text-sm font-bold text-foreground leading-tight">Aaron W, CBAP, CSPO</div>
                    <div className="text-xs text-muted-foreground">Lead Product Owner / Associate Director · RBC</div>
                    <div className="text-xs text-muted-foreground/60">Client on this project</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Key Takeaway
                </h2>
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-foreground text-lg leading-relaxed font-medium">
                  The stated problem is almost never the real one. The first pilot failed because nobody saw the fear behind the push-back. Once I found that, the product built itself. Discovery isn't just a phase, it's the job.
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
                    <div className="text-3xl font-bold text-primary mb-1">60%</div>
                    <div className="text-sm font-medium text-muted-foreground">Fewer reporting requests</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">250+</div>
                    <div className="text-sm font-medium text-muted-foreground">Active users across risk teams</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">$50K</div>
                    <div className="text-sm font-medium text-muted-foreground">MVP budget (2-person team)</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">$200K/yr</div>
                    <div className="text-sm font-medium text-muted-foreground">Freed in manual effort</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">50%</div>
                    <div className="text-sm font-medium text-muted-foreground">Drop in support requests</div>
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

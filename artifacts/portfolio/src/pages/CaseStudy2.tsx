import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function CaseStudy2() {
  useDocumentMeta({
    title: "FRTB Program Case Study — Dheeraj Chowdhary",
    description: "How I resolved 10 critical design decisions across 6 delivery teams on a $20M+ regulatory program at BMO."
  });
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/case-studies" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Case Studies
        </Link>

        <motion.div initial="hidden" animate="show" variants={fadeUp} className="space-y-12">
          
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-sm py-1 px-3">Bank of Montreal</Badge>
              <span className="text-muted-foreground font-medium">Solution Architect</span>
              <span className="text-muted-foreground font-medium">2021-2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Resolving 10 Critical Decisions on a $20M+ Program
            </h1>
            <p className="text-2xl font-medium italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
              "I stepped into the third year of a high-stakes program where features were built in silos and critical decisions were unresolved across six teams."
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
                    The FRTB (Fundamental Review of the Trading Book) program was a massive, multi-year regulatory initiative. By year three, the delivery momentum had fractured.
                  </p>
                  <p>
                    Six delivery teams were working in silos with competing priorities. Critical architectural and product design decisions had been stalled. The most complex feature — expanding trade decomposition from single-layer to multi-layer instruments (funds of funds) — was completely undefined and holding up compliance.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" /> What I Did
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong>Built Coalitions:</strong> I replaced the siloed decision-making process with Joint Analysis and Design (JAD) sessions, forcing all affected parties—front office, risk, and tech—into the same room to hash out dependencies.
                  </p>
                  <p>
                    <strong>Authored the Specs:</strong> For the complex trade decomposition feature, I embedded directly with front office users. I traced the data flows end-to-end as a newcomer, learned their workflows, and translated that reality into execution specs for all six delivery teams.
                  </p>
                  <p>
                    <strong>Drove the Design Authority:</strong> I held the pen on cross-functional decisions, leading 10 critical submissions through the Design Authority. I treated every dependency conversation as a coordination win, not an escalation.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Key Takeaway
                </h2>
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-foreground text-lg leading-relaxed font-medium">
                  Adversarial relationships between teams are almost always a process failure, not a people failure. Give people a shared forum and a shared definition of done, and the dynamic shifts.
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
                    <div className="text-sm font-medium text-muted-foreground">Critical Design Authority decisions resolved</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">6</div>
                    <div className="text-sm font-medium text-muted-foreground">Siloed delivery teams successfully aligned</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">Capital</div>
                    <div className="text-sm font-medium text-muted-foreground">Requirements directly reduced via trade decomposition feature</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">Pass</div>
                    <div className="text-sm font-medium text-muted-foreground">Satisfactory enterprise compliance rating achieved</div>
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

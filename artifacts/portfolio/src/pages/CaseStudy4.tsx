import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Activity, Quote, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function CaseStudy4() {
  useDocumentMeta({
    title: "AI Adoption Case Study — Dheeraj Chowdhary",
    description: "How I turned the most resistant team into the first AI champions, unlocking $2M+ in enterprise contracts across Southeast Asia."
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
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-sm py-1 px-3">AI-Powered Talent Assessment Platform</Badge>
              <span className="text-muted-foreground font-medium">Product Consultant</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Turning AI Resistance into Enterprise Adoption
            </h1>
            <p className="text-2xl font-medium italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
              "The client's own team was blocking the deal. They thought the AI tool was coming for their jobs."
            </p>
          </header>

          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-card border border-border/50 relative shadow-2xl shadow-black/50">
            <img
              src={`${import.meta.env.BASE_URL}images/case-study-1.png`}
              alt="AI assessment platform"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          </div>

          <section className="grid md:grid-cols-[1fr_300px] gap-12">
            <div className="space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" /> The Problem
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    The product was an NLP-based talent review tool. Strong on the tech side. POC results were solid. But large deals kept stalling across Southeast Asia.
                  </p>
                  <p>
                    The blocker was the client's ops team. They ran manual screening. They saw the AI tool as a direct threat to their jobs. They dodged meetings, raised every concern they could, and quietly killed POCs from inside.
                  </p>
                  <p>
                    At the time, "AI pushback" wasn't a phrase anyone used. But the pattern was there.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" /> What I Found
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    I went on-site at the first client to learn why people were blocking it.
                  </p>
                  <p>
                    Informal talks with the ops team surfaced a theme. "This tool screens people on its own, so what do we do?" The word "automated" in every piece of our content confirmed what they feared. It was a messaging problem that had become a trust problem.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BrainCircuit className="w-6 h-6 text-primary" /> The Pivot
                </h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Reframed the whole pitch from "automated screening" to "expert copilot." New message: the tool handles repeat work, you handle judgment. Your value goes up, not down.
                  </p>
                  <p>
                    Rewrote all sales and setup materials. Changed how we sold: instead of going around the ops team, brought the most resistant members into the beta. Gave them ownership of the internal rollout. The people blocking the deal became the people pushing it forward.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card/60 border border-border/60 relative overflow-hidden">
                <Quote className="absolute -top-2 -left-2 w-14 h-14 text-primary/15 rotate-180" />
                <blockquote className="text-base text-foreground/80 leading-relaxed italic mb-5 relative z-10">
                  "Dheeraj has a strong analytical bent of mind and brings a very disciplined and structured approach to his work. He is an active listener and adept at talking to clients to understand their requirements, suggesting a suitable solution backed by a data-driven approach."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary shrink-0">RM</div>
                  <div>
                    <div className="text-sm font-bold text-foreground leading-tight">Rajat Mathur</div>
                    <div className="text-xs text-muted-foreground">Director · Aspiring Minds</div>
                    <div className="text-xs text-muted-foreground/60">Direct manager on this project</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Key Takeaway
                </h2>
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-foreground text-lg leading-relaxed font-medium">
                  I learned this in 2012, before "AI pushback" was a phrase. Every product I've touched since follows the same rule: if the people closest to the work feel replaced, they will kill your product from inside. The fix wasn't technical. It was framing and trust.
                </div>
              </div>

            </div>

            <div className="space-y-6">
              <div className="md:sticky top-32 p-6 rounded-2xl bg-card/50 border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" /> Outcomes
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">$2M+</div>
                    <div className="text-sm font-medium text-muted-foreground">Large contracts across Southeast Asia</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />

                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">0 to 1</div>
                    <div className="text-sm font-medium text-muted-foreground">Most resistant team became the first internal champion</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />

                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">2012</div>
                    <div className="text-sm font-medium text-muted-foreground">AI pushback navigation, before it was a mainstream PM problem</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {["NLP / AI Product", "Enterprise Sales", "Change Management", "Southeast Asia"].map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
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

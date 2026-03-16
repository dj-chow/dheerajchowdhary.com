import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Wrench, ArrowRight, Quote, ShieldCheck, GitMerge, Layers, Linkedin } from "lucide-react";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function About() {
  useDocumentMeta({
    title: "About Dheeraj Chowdhary — Career Story & Strengths",
    description: "From Indian startups to enterprise banking at BMO. 14+ years of product work under IT titles in regulated environments. MBA, CSPO, Prosci certified."
  });
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="show" variants={container}>
          
          <motion.div variants={item} className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">My Story</h1>
            
            <div className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 mb-8 relative overflow-hidden">
              <Quote className="absolute -top-4 -left-4 w-24 h-24 text-primary/10 rotate-180" />
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed relative z-10">
                "My titles at BMO have been analyst, architect, delivery lead — because in Risk Technology, product ownership doesn't come with a product title. The work was product work: discovery, defining what to build, driving adoption. I'm now making the title match the work."
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a product leader who bridges business and technology to turn complex, compliance-heavy processes into products people actually use. My career spans 14+ years across startups in India and enterprise banking in Canada.
            </p>
          </motion.div>

          {/* 3 Act Career Narrative */}
          <motion.div variants={item} className="space-y-12 mb-20">
            <h2 className="text-2xl font-bold border-b border-border pb-4">Career Arc</h2>
            
            <div className="relative pl-8 border-l-2 border-border space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary" />
                <Badge className="mb-3">Act 1: Venture Mode (2012-2017)</Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">Building from zero, securing partnerships, driving commercial outcomes.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Aspiring Minds, I drove adoption of an NLP assessment tool and contributed to $2M+ in enterprise contracts across Southeast Asia. I co-founded Get Set Sorted, a career guidance platform reaching 2,000+ students. At UpGrad, I built an Android development program with Google from scratch, scaling to 5,000+ learners — then led the data-driven decision to sunset it when metrics fell below our threshold.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary" />
                <Badge className="mb-3">Act 2: Scale Mode (2017-Present)</Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">Mastering complexity, governance, and delivery at enterprise scale.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Inside BMO — North America's 7th largest bank — I built a risk KPI data warehouse across 5 business areas. Inherited a failed risk reporting pilot and redesigned it as a self-serve platform that grew to 250+ users and cut executive reporting requests by 60%. Most recently, I drove 10 critical design decisions on a $20M+ regulatory program spanning 6 delivery teams.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                <Badge className="mb-3 bg-primary text-primary-foreground">Act 3: Synthesis Mode (Next)</Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">Venture-mode instinct with scale-mode governance muscle.</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Applying a builder's instinct to regulated environments. Looking for a Senior PM role at a mid-to-large fintech where the title finally matches the work I've been doing for years.
                </p>
                <Button asChild>
                  <Link href="/case-studies">See the evidence <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Spiky Strengths */}
          <motion.div variants={item} className="mb-20">
            <h2 className="text-2xl font-bold border-b border-border pb-4 mb-8">What Sets Me Apart</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Governance-to-Value Translation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Most PMs understand compliance OR user value. I do both. At BMO, I shipped self-serve dashboards under strict regulatory mandates that cut reporting requests by 60% and grew to 250+ users.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Operated under FRTB, audit, and enterprise compliance mandates</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>BAU support requests dropped 50%</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Governance meetings shifted from defensive debates to strategic conversations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <GitMerge className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Cross-Functional Alignment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    360 feedback is unanimous: I connect business and tech. Resolved 10 architectural decisions across risk, tech, and ops on a $20M+ program with 6 delivery teams.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>10 Design Authority submissions approved</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Facilitated post-mortems in high-tension environments</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Alignment in multi-party environments with competing incentives</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Redesigning for Adoption</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    I take something broken or underbuilt, figure out what's actually needed, and redesign it to work at scale with less friction.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Failed pilot to 250+ active users (risk platform)</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Blank page to 5,000+ learners (UpGrad)</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>2,000+ students across 20+ schools (Get Set Sorted)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* LinkedIn CTA */}
          <motion.div variants={item} className="mb-20">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-foreground mb-1">Want the full picture?</p>
                  <p className="text-sm text-muted-foreground">Connect with me on LinkedIn for recommendations, endorsements, and more detail on my career journey.</p>
                </div>
                <Button asChild className="shrink-0">
                  <a href="https://linkedin.com/in/dheerajchowdhary" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" /> View LinkedIn Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Tools */}
          <motion.div variants={item} className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-foreground">MBA, General Management</div>
                    <div className="text-sm text-primary mb-1">Faculty of Management Studies, Univ. of Delhi</div>
                    <div className="text-xs text-muted-foreground">Top 5 business school in India; 1:450 selection ratio</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  <div>
                    <div className="font-semibold text-foreground">B.E., Electronics & Communication</div>
                    <div className="text-sm text-primary mb-1">Netaji Subhas Institute of Technology</div>
                    <div className="text-xs text-muted-foreground">1:260 selection ratio</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-bold">Certifications</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"/> Certified Scrum Product Owner (CSPO)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"/> Prosci Certified Change Practitioner</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"/> CFA Level 1</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"/> BMO AI for All</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-bold">Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Jira", "Confluence", "SQL", "Kibana", "Power Apps", "AWS (Foundational)", "Clarity"].map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-secondary/50">{tool}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight, BarChart3, ShieldCheck, Layers, GitMerge,
  Workflow, Smartphone, Bot, Cpu, BrainCircuit, Quote,
  Mail, Linkedin, Github, FileDown, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function Home() {
  useDocumentMeta({
    title: "Dheeraj Chowdhary — Senior Product Manager Portfolio",
    description: "Senior PM with 14+ years building products that get adopted in complex, regulated environments. Bank of Montreal, fintech, and startups."
  });

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const caseStudies = [
    {
      id: "risk-platform",
      title: "Turning a Failed Pilot into a 250+ User Platform",
      company: "Bank of Montreal, Risk Reporting",
      role: "Product Owner",
      hook: "Executives were making risk decisions by squinting at spreadsheets on their phones.",
      metrics: ["60% Drop in Reports", "250+ Users", "$50K MVP Budget"],
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      image: "case-study-1.png"
    },
    {
      id: "frtb-program",
      title: "Resolving 10 Critical Decisions on a $20M+ Program",
      company: "Bank of Montreal, Regulatory Trading Programs",
      role: "Solution Architect",
      hook: "Six delivery teams working in silos. Critical design decisions stalled for months.",
      metrics: ["10 Core Decisions Resolved", "6 Teams Aligned", "Capital Requirements Reduced"],
      icon: <Workflow className="w-8 h-8 text-primary" />,
      image: "case-study-2.png"
    },
    {
      id: "upgrad-google",
      title: "Building with Google — Then Knowing When to Stop",
      company: "$2.25B Edtech Unicorn",
      role: "Product Manager",
      hook: "Hired to build an Android Development program from a blank page.",
      metrics: ["5,000+ Learners", "Google Partnership", "Data-Driven Sunset"],
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      image: "case-study-3.png"
    },
    {
      id: "nlp-assessment",
      title: "Turning AI Resistance into Enterprise Adoption",
      company: "AI-Powered Talent Assessment Platform",
      role: "Product Consultant",
      hook: "The client's own team was blocking the deal. They thought the AI tool was coming for their jobs.",
      metrics: ["$2M+ in Contracts", "Southeast Asia Rollout", "NLP / AI Product"],
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      image: "case-study-1.png",
      aiTag: true
    }
  ];

  const voices = [
    {
      snippet: "He did market sizing, recruited a stellar team, did user research, worked on marketing campaigns, helped establish corporate partnerships and a lot more. Very professional, hard working and very data-driven.",
      fullQuote: "Having run his own startup, he brought a fresh and entrepreneurial mindset to the team. He did market sizing, recruited a stellar team, did user research, worked on marketing campaigns, helped establish corporate partnerships and a lot more. Very professional, hard working and very data-driven.",
      name: "Kushal Bhagia",
      title: "Tech Investor",
      company: "superdm.com",
      relationship: "Colleague, UpGrad",
      initials: "KB"
    },
    {
      snippet: "He knows how to solve the most technical and complex of problems while being able to communicate them in succinct, easy-to-understand solutions. He is stakeholder-oriented and knows how to balance customer needs with project budget and timeline constraints.",
      fullQuote: "Dheeraj is a high performing consultant who knows how to solve the most technical and complex of problems while being able to communicate them in succinct and easy-to-understand solutions. He is stakeholder-oriented and knows how to balance customer needs with project budget and timeline constraints.",
      name: "Aaron W, CBAP, CSPO",
      title: "Lead Product Owner / Associate Director",
      company: "RBC",
      relationship: "Client",
      initials: "AW"
    },
    {
      snippet: "He genuinely takes the time to understand the business needs and partner with the business to deliver on those needs.",
      fullQuote: "He genuinely takes the time to understand the business needs and partner with the business to deliver on those needs. Dheeraj has quickly become the go-to SME and has been the team lead for an entire application, responsible for end-to-end deliverables and presentations to senior leadership.",
      name: "Ikram Ataullah, PMP, Prosci, CBAP",
      title: "Project Manager",
      company: "TELUS",
      relationship: "Teammate, BMO Operations",
      initials: "IA"
    },
    {
      snippet: "He has been amazing at identifying and attracting great talent, business development and developing new products and business models.",
      fullQuote: "He has been amazing at identifying and attracting great talent, business development and developing new products and business models. One of the qualities I really admire is that he is able to keep his cool even in very tough situations, an invaluable asset for any team.",
      name: "Saahil Narang",
      title: "Kellogg MBA, Ex-Meta, Bain",
      company: "Tech Founder",
      relationship: "Co-founder, Get Set Sorted",
      initials: "SN"
    },
    {
      snippet: "Dheeraj has a strong analytical bent of mind and brings a very disciplined and structured approach to his work. He is an active listener and adept at talking to clients to understand their requirements.",
      fullQuote: "Dheeraj has a strong analytical bent of mind and brings a very disciplined and structured approach to his work. He is an active listener and adept at talking to clients to understand their requirements, suggesting a suitable solution backed by a data-driven approach.",
      name: "Rajat Mathur",
      title: "Director",
      company: "Aspiring Minds",
      relationship: "Direct Manager",
      initials: "RM"
    }
  ];

  return (
    <div className="w-full">

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-background">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Hero abstract background"
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="show" variants={container} className="max-w-3xl">
            <motion.div variants={item} className="mb-6 flex items-center gap-3">
              <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                Senior Product Manager
              </Badge>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
              I've built products that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">get adopted</span> in complex, regulated environments.
            </motion.h1>

            <motion.p variants={item} className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              14+ years across startups and enterprise. Currently at Bank of Montreal. Previously launched a program with Google, drove $2M+ in enterprise contracts, and co-founded a startup.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-xl text-base px-8 h-14 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
                <a href="#case-studies" onClick={(e) => { e.preventDefault(); document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" }); }}>
                  View Case Studies <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Metrics Bar ──────────────────────────────── */}
      <section className="py-12 border-y border-border bg-card/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
            {[
              { metric: "60%", label: "Reduction in executive reporting requests" },
              { metric: "250+", label: "Active users shipped on a $50K MVP budget" },
              { metric: "$200K/yr", label: "Annual savings from automated workflows" },
              { metric: "5,000+", label: "Learners reached via Google partnership" },
              { metric: "$2M+", label: "Enterprise contracts influenced" },
            ].map((stat, i) => (
              <div key={i} className="pt-6 sm:pt-0 sm:px-6 flex flex-col items-start first:pl-0 last:pr-0">
                <div className="text-3xl font-bold text-foreground mb-1">{stat.metric}</div>
                <div className="text-sm text-muted-foreground font-medium leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I Build ──────────────────────────────── */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">How I Build</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              I operate at the intersection of complex regulatory frameworks and intuitive user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Governance-to-Value Translation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I understand both compliance and user value, a rare mix in regulated environments. I shipped self-serve dashboards under strict regulatory mandates that cut reporting requests by 60% and grew to 250+ users.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GitMerge className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Cross-Functional Alignment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Led cross-functional alignment across risk, technology, and operations teams on a $20M+ program, resolving 10 key design decisions across 6 delivery teams without direct authority.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Redesigning for Adoption</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I take something broken or underbuilt, figure out what's actually needed, and redesign it to work at scale. Failed pilot to 250+ users. Blank page to 5,000+ learners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── My Story / Career Arc ────────────────────── */}
      <section id="story" className="py-24 bg-card/10 border-t border-border/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">My Story</h2>
            <div className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 mb-8 relative overflow-hidden">
              <Quote className="absolute -top-4 -left-4 w-24 h-24 text-primary/10 rotate-180" />
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed relative z-10">
                "I take ambiguous operational problems, align the people who own pieces of the workflow, and deliver solutions that get used, not just released."
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I bridge business and technology. My career spans 14 years across startups in India and one of Canada's largest banks. The pattern is the same everywhere: find the real problem, align the people, ship something that sticks.
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-border space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary" />
              <Badge className="mb-3">Act 1: Venture Mode (2012-2017)</Badge>
              <h3 className="text-xl font-bold text-foreground mb-3">Building from zero. Securing partnerships. Driving results.</h3>
              <p className="text-muted-foreground leading-relaxed">
                I started my career building from scratch. At Aspiring Minds, I drove adoption of an AI assessment tool. That work led to $2M in contracts across Southeast Asia. I also co-founded Get Set Sorted, a student career platform. We reached 2,000 students across 20 schools. At a leading edtech company, I built an Android program with Google from zero. It grew to 5,000 learners. When the numbers dropped, I ran a post-mortem and recommended we shut it down. We did it with zero disruption to students.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary" />
              <Badge className="mb-3">Act 2: Scale Mode (2017-Present)</Badge>
              <h3 className="text-xl font-bold text-foreground mb-3">Mastering complexity and delivery at enterprise scale.</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Bank of Montreal, I built a risk reporting platform from the ground up. As Product Owner, I took a failed pilot and redesigned it as a self-serve tool. It grew to 250 users. Reporting requests from senior leaders dropped by 60 percent. I also joined a $20M program in year three. Six delivery teams were working in silos. I resolved 10 critical design decisions and got everyone aligned.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
              <Badge className="mb-3 bg-primary text-primary-foreground">Act 3: Synthesis Mode (Next)</Badge>
              <h3 className="text-xl font-bold text-foreground mb-3">Startup speed. Enterprise judgment.</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I take on hard problems and own the outcome. The domain: financial services, fintech, payments, or developer platforms. Companies like Wealthsimple, Shopify, or the banks I already know. I work best where the stakes are real, the environment is complex, and the team needs someone who can bridge strategy and execution without losing the thread.
              </p>
              <Button asChild>
                <a href="#case-studies" onClick={(e) => { e.preventDefault(); document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" }); }}>
                  See the evidence <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials (5-card horizontal scroll) ──── */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">What Clients and Colleagues Say</h2>
            <a
              href="https://linkedin.com/in/dheerajchowdhary/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
            >
              <Linkedin className="w-4 h-4" /> All recommendations on LinkedIn
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {voices.map((v, i) => (
              <div key={i} className="snap-start shrink-0 w-80 md:w-96 p-6 rounded-2xl bg-card/40 border border-border/50 flex flex-col gap-4">
                <Quote className="w-8 h-8 text-primary/30 shrink-0 -mb-2" />
                <p className="text-base text-foreground/80 leading-relaxed italic flex-1">"{v.snippet}"</p>
                <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                      {v.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground leading-tight">{v.name}</div>
                      <div className="text-xs text-muted-foreground">{v.title} · {v.company}</div>
                      <div className="text-xs text-muted-foreground/60 mt-0.5">{v.relationship}</div>
                    </div>
                  </div>
                  <a
                    href="https://linkedin.com/in/dheerajchowdhary/details/recommendations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read full recommendation <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────── */}
      <section id="case-studies" className="py-24 bg-card/20 border-t border-border/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              How I've solved complex product challenges in regulated environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((c) => (
              <Link key={c.id} href={`/case-studies/${c.id}`} className="group">
                <Card className="h-full bg-card/40 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="h-48 w-full relative overflow-hidden bg-background">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${c.image}`}
                      alt={c.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    <div className="absolute bottom-4 left-6">{c.icon}</div>
                    {c.aiTag && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/90 text-primary-foreground text-xs">AI Product</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold tracking-wider uppercase text-primary">{c.company}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{c.role}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <div className="p-4 rounded-xl bg-background border border-border/50 mb-5 flex-1">
                      <p className="text-sm font-medium italic text-muted-foreground">"{c.hook}"</p>
                    </div>
                    <div className="space-y-3 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {c.metrics.map(m => (
                          <Badge key={m} variant="secondary" className="bg-secondary/60 text-secondary-foreground text-xs">{m}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm font-bold text-primary pt-2 border-t border-border/50">
                        Read Full Case Study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PM in the AI Era ─────────────────────────── */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">PM in the AI Era</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              I use AI tools daily. I have also shipped one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://github.com/dj-chow/job-fit-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/40 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">Shipped a Claude Skill</h3>
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">GitHub</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built a job-fit analyzer using Claude and Claude Code. It scores roles on work activities, not keywords. Published and open source.
                </p>
              </div>
              <div className="flex items-center text-sm font-bold text-primary mt-auto">
                View on GitHub <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">AI in Daily Work</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use Copilot (M365) at work for requirements synthesis, sprint documentation, and stakeholder briefing prep. Less repeatable work. More product thinking.
                </p>
              </div>
            </div>

            <Link href="/case-studies/nlp-assessment" className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/40 transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">AI Adoption Since 2012</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I navigated enterprise AI resistance before it was a mainstream PM problem. The pattern hasn't changed. It's just affecting more products now.
                </p>
              </div>
              <div className="flex items-center text-sm font-bold text-primary mt-auto">
                Read the case study <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section id="contact" className="py-24 bg-background border-t border-border/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">Let's Connect</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building in fintech, financial services, or payments and need a PM who can work across strategy, regulation, and delivery? Let's talk.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:dheeraj@hey.com" className="group">
              <Card className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">dheeraj@hey.com</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://linkedin.com/in/dheerajchowdhary" target="_blank" rel="noopener noreferrer" className="group">
              <Card className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Linkedin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">dheerajchowdhary</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://github.com/dj-chow" target="_blank" rel="noopener noreferrer" className="group">
              <Card className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Github className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">GitHub</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">dj-chow</p>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href={`${import.meta.env.BASE_URL}Dheeraj_Chowdhary_Resume.pdf`} download className="group">
              <Card className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <FileDown className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Resume</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Download PDF</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

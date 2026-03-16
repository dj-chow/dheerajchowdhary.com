import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, BarChart3, Users, Building2, TrendingUp, ShieldCheck, Layers, GitMerge, Workflow, Smartphone, Bot, Cpu, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function Home() {
  useDocumentMeta({
    title: "Dheeraj Chowdhary — Product Manager | PM Portfolio",
    description: "Product Manager with 14+ years building products across startups and enterprise banking. Specializing in turning compliance complexity into products people adopt."
  });
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const caseStudies = [
    {
      id: "risk-platform",
      title: "Turning a Failed Pilot into a 250+ User Platform",
      company: "Top 10 North American Bank",
      role: "Product Owner",
      hook: "Executives were making risk decisions by squinting at spreadsheets on their phones.",
      metrics: ["60% Drop in Reports", "250+ Users", "$50K MVP Budget"],
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      image: "case-study-1.png"
    },
    {
      id: "frtb-program",
      title: "Resolving 10 Critical Decisions on a $20M+ Program",
      company: "Top 10 North American Bank",
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
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Image / Effects */}
        <div className="absolute inset-0 -z-10 bg-background">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Hero abstract background" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
            className="max-w-3xl"
          >
            <motion.div variants={item} className="mb-6 flex items-center gap-3">
              <Badge variant="outline" className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                Product Manager
              </Badge>
              <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for Senior Roles
              </span>
            </motion.div>
            
            <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
              I turn compliance complexity into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">products people actually adopt.</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              14+ years building products across startups and enterprise. Currently shipping at Bank of Montreal. Previously launched a program in partnership with Google, drove $2M+ in enterprise contracts, and co-founded a startup.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-xl text-base px-8 h-14 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
                <a href="#case-studies">
                  View Case Studies <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl text-base px-8 h-14 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 border-y border-border bg-card/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
            {[
              { metric: "60%", label: "Reduction in executive reporting requests", icon: <TrendingUp className="w-5 h-5 text-primary mb-2" /> },
              { metric: "250+", label: "Active users shipped on a $50K MVP budget", icon: <Users className="w-5 h-5 text-primary mb-2" /> },
              { metric: "$200K/yr", label: "Annual savings from automated workflows", icon: <BarChart3 className="w-5 h-5 text-primary mb-2" /> },
              { metric: "5,000+", label: "Learners reached via Google partnership", icon: <Building2 className="w-5 h-5 text-primary mb-2" /> },
              { metric: "$2M+", label: "Enterprise contracts influenced", icon: <Layers className="w-5 h-5 text-primary mb-2" /> },
            ].map((stat, i) => (
              <div key={i} className="pt-6 sm:pt-0 sm:px-6 flex flex-col items-start first:pl-0 last:pr-0">
                {stat.icon}
                <div className="text-3xl font-bold text-foreground mb-1">{stat.metric}</div>
                <div className="text-sm text-muted-foreground font-medium leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do / Spiky Strengths */}
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
                  Most PMs understand compliance OR user value. I do both. I shipped self-serve dashboards under strict regulatory mandates that cut reporting requests by 60% and grew to 250+ users.
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
                  360 feedback is unanimous: I connect business and tech. Resolved 10 architectural decisions across risk, tech, and ops on a $20M+ program with 6 delivery teams.
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
                  I take something broken or underbuilt, figure out what's actually needed, and redesign it to work at scale. Failed pilot → 250+ users. Blank page → 5,000+ learners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PM in the AI Era */}
      <section className="py-20 bg-card/10 border-t border-border/50">
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

      {/* Case Studies — directly on home page */}
      <section id="case-studies" className="py-24 bg-card/20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Case Studies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                How I've solved complex product challenges in regulated environments.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-xl shrink-0">
              <Link href="/case-studies">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((c) => (
              <Link key={c.id} href={`/case-studies/${c.id}`} className="group">
                <Card className="h-full bg-card/40 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="h-44 w-full relative overflow-hidden bg-background">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${c.image}`}
                      alt={c.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    <div className="absolute bottom-4 left-6">{c.icon}</div>
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

      {/* Career Timeline Teaser */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Experience Highlight</h2>
              <p className="text-lg text-muted-foreground">From venture-backed startups to enterprise banking.</p>
            </div>
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/about">
                Read My Full Story <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { company: "Bank of Montreal", role: "Agile Delivery Lead / Solution Architect", years: "2017 - Present", tag: "Scale Mode" },
              { company: "UpGrad", role: "Product Manager", years: "2016 - 2017", tag: "Venture Mode" },
              { company: "Get Set Sorted", role: "Co-Founder", years: "2015 - 2016", tag: "Venture Mode" },
              { company: "Aspiring Minds", role: "Product Consultant", years: "2012 - 2015", tag: "Venture Mode" },
            ].map((job, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card/40 border border-border/50 hover:border-primary/30 transition-colors">
                <Badge variant="secondary" className="mb-4 bg-secondary text-xs">{job.tag}</Badge>
                <div className="text-sm font-medium text-primary mb-1">{job.years}</div>
                <h4 className="text-lg font-bold text-foreground mb-1">{job.company}</h4>
                <div className="text-sm text-muted-foreground">{job.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

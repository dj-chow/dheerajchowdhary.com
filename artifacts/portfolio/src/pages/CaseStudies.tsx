import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Workflow, Smartphone } from "lucide-react";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function CaseStudies() {
  useDocumentMeta({
    title: "Case Studies — Dheeraj Chowdhary",
    description: "Deep dives into complex product challenges: risk platform adoption, $20M+ regulatory program alignment, and building an edtech program with Google."
  });
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const cases = [
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
      hook: "Six delivery teams working in silos. Critical design decisions stalled.",
      metrics: ["10 Core Decisions Resolved", "6 Teams Aligned", "Capital Requirements Reduced"],
      icon: <Workflow className="w-8 h-8 text-primary" />,
      image: "case-study-2.png"
    },
    {
      id: "upgrad-google",
      title: "Building a Program with Google — Then Knowing When to Stop",
      company: "$2.25B Edtech Unicorn",
      role: "Product Manager",
      hook: "Hired to build the Android Development program from a blank page.",
      metrics: ["5,000+ Learners", "Google Partnership", "Data-Driven Sunset"],
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      image: "case-study-3.png"
    }
  ];

  return (
    <div className="w-full pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="show" variants={container}>
          
          <motion.div variants={item} className="mb-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Case Studies</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deep dives into how I've solved complex product challenges, driven adoption, and aligned cross-functional teams in highly regulated environments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((c) => (
              <motion.div key={c.id} variants={item} className="h-full flex">
                <Link href={`/case-studies/${c.id}`} className="w-full flex">
                  <Card className="w-full bg-card/40 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group flex flex-col overflow-hidden">
                    <div className="h-48 w-full relative overflow-hidden bg-background">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/${c.image}`} 
                        alt={c.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                      <div className="absolute bottom-4 left-6">
                        {c.icon}
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold tracking-wider uppercase text-primary">{c.company}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{c.role}</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                        {c.title}
                      </h2>
                      
                      <div className="p-4 rounded-xl bg-background border border-border/50 mb-6 flex-1">
                        <p className="text-sm font-medium italic text-muted-foreground">"{c.hook}"</p>
                      </div>

                      <div className="space-y-4 mt-auto">
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
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}

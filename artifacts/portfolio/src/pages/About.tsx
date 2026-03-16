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
    description: "14+ years building products at startups and a top Canadian bank. MBA, CSPO, Prosci certified. Senior PM targeting fintech and financial services."
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
                "I build products people actually use. I have done it at startups. I have done it at one of Canada's top banks. The method is always the same: talk to the right people, find the real problem, and ship a fix that sticks."
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I bridge business and technology. I turn complex processes into products that work. My career spans 14 years. I have built at startups in India and at a top Canadian bank.
            </p>
          </motion.div>

          {/* 3 Act Career Narrative */}
          <motion.div variants={item} className="space-y-12 mb-20">
            <h2 className="text-2xl font-bold border-b border-border pb-4">Career Arc</h2>
            
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
                  At a top North American bank, I built a risk reporting platform from the ground up. As Product Owner, I took a failed pilot and redesigned it as a self-serve tool. It grew to 250 users. Reporting requests from senior leaders dropped by 60 percent. I also joined a $20M program in year three. Six delivery teams were working in silos. I resolved 10 critical design decisions and got everyone aligned.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                <Badge className="mb-3 bg-primary text-primary-foreground">Act 3: Synthesis Mode (Next)</Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">Startup speed. Enterprise judgment.</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I bring a builder's mindset to large, complex environments. I know how to move fast and still get things right. I am looking for a Senior PM role with clear product accountability. I want to set direction, make calls, and own the outcome. What matters is the scope to lead and the trust to deliver.
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
                  <h3 className="text-lg font-bold text-foreground mb-3">Compliance Meets User Value</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Most PMs handle rules or user needs. I work with both. I shipped a self-serve risk tool under strict rules. It cut reporting requests by 60 percent and grew to 250 users.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Delivered under FRTB, audit, and bank compliance mandates</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>BAU support requests dropped 50%</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Risk meetings shifted from defense to strategy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <GitMerge className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Cross-Team Alignment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    My 360 feedback is consistent: I connect business and tech. I resolved 10 design decisions on a $20M program. Six teams were involved. All were aligned by the end.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>10 Design Authority decisions approved</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Led post-mortems in high-pressure settings</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Aligned teams with competing goals and timelines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Built for Adoption</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    I take broken or half-built products and fix them. I start with the real user need. Then I redesign for scale. Failed pilot to 250 users. Blank page to 5,000 learners.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Failed pilot to 250 active users</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>Blank page to 5,000 learners</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0"/>2,000 students across 20 schools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div variants={item} className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-border pb-4">
              <h2 className="text-2xl font-bold">What Colleagues Say</h2>
              <a
                href="https://linkedin.com/in/dheerajchowdhary"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
              >
                <Linkedin className="w-4 h-4" /> All recommendations on LinkedIn
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  quote: "Dheeraj is a high performing consultant who knows how to solve the most technical and complex of problems while being able to communicate them in succinct and easy-to-understand solutions. He is stakeholder-oriented and knows how to balance customer needs with project budget and timeline constraints.",
                  name: "Aaron W, CBAP, CSPO",
                  title: "Lead Product Owner / Associate Director",
                  company: "RBC",
                  relationship: "Client",
                  tag: "Risk Platform",
                  tagHref: "/case-studies/risk-platform",
                  initials: "AW"
                },
                {
                  quote: "He genuinely takes the time to understand the business needs and partner with the business to deliver on those needs. Dheeraj has quickly become the go-to SME and has been the team lead for an entire application, responsible for end-to-end deliverables and presentations to senior leadership.",
                  name: "Ikram Ataullah, PMP, Prosci, CBAP",
                  title: "Project Manager",
                  company: "TELUS",
                  relationship: "Teammate, BMO Operations",
                  tag: "Risk Platform",
                  tagHref: "/case-studies/risk-platform",
                  initials: "IA"
                },
                {
                  quote: "Having run his own startup, he brought a fresh and entrepreneurial mindset to the team. He did market sizing, recruited a stellar team, did user research, worked on marketing campaigns, helped establish corporate partnerships and a lot more. Very professional, hard working and very data-driven.",
                  name: "Kushal Bhagia",
                  title: "Tech Investor",
                  company: "superdm.com",
                  relationship: "Colleague, UpGrad",
                  tag: "UpGrad · Google",
                  tagHref: "/case-studies/upgrad-google",
                  initials: "KB"
                },
                {
                  quote: "He has been amazing at identifying and attracting great talent, business development and developing new products and business models. One of the qualities I really admire is that he is able to keep his cool even in very tough situations, an invaluable asset for any team.",
                  name: "Saahil Narang",
                  title: "Kellogg MBA, Ex-Meta, Bain",
                  company: "Tech Founder",
                  relationship: "Co-founder, Get Set Sorted",
                  tag: "Leadership",
                  tagHref: null,
                  initials: "SN"
                },
                {
                  quote: "Dheeraj has a strong analytical bent of mind and brings a very disciplined and structured approach to his work. He is an active listener and adept at talking to clients to understand their requirements, suggesting a suitable solution backed by a data-driven approach.",
                  name: "Rajat Mathur",
                  title: "Director",
                  company: "Aspiring Minds",
                  relationship: "Direct Manager",
                  tag: "Stakeholder Management",
                  tagHref: null,
                  initials: "RM"
                },
              ].map((rec, i) => (
                <div key={i} className={`p-6 rounded-2xl bg-card/40 border border-border/50 hover:bg-card hover:border-border transition-all duration-300 flex flex-col gap-5 ${i === 4 ? "md:col-span-2 md:max-w-xl" : ""}`}>
                  <Quote className="w-8 h-8 text-primary/30 shrink-0 -mb-2" />
                  <p className="text-base text-foreground/80 leading-relaxed italic flex-1">
                    "{rec.quote}"
                  </p>
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        {rec.initials}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground leading-tight">{rec.name}</div>
                        <div className="text-xs text-muted-foreground">{rec.title} · {rec.company}</div>
                        <div className="text-xs text-muted-foreground/60 mt-0.5">{rec.relationship}</div>
                      </div>
                    </div>
                    {rec.tagHref ? (
                      <Link href={rec.tagHref}>
                        <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs shrink-0 cursor-pointer">
                          {rec.tag}
                        </Badge>
                      </Link>
                    ) : (
                      <Badge variant="secondary" className="text-xs shrink-0">{rec.tag}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* LinkedIn CTA */}
          <motion.div variants={item} className="mb-20">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-foreground mb-1">Want the full picture?</p>
                  <p className="text-sm text-muted-foreground">See my full work history, endorsements, and more on LinkedIn.</p>
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
                    <div className="text-xs text-muted-foreground">Top 5 business school in India. 1:450 selection ratio.</div>
                  </div>
                  <div className="w-full h-px bg-border/50" />
                  <div>
                    <div className="font-semibold text-foreground">B.E., Electronics and Communication</div>
                    <div className="text-sm text-primary mb-1">Netaji Subhas Institute of Technology</div>
                    <div className="text-xs text-muted-foreground">1:260 selection ratio.</div>
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
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"/> AI for All</li>
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

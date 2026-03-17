import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function Contact() {
  useDocumentMeta({
    title: "Contact Dheeraj Chowdhary — Get in Touch",
    description: "Reach out to Dheeraj Chowdhary for Senior PM opportunities in fintech, regtech, and financial services. Based in Toronto, ON."
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
    <div className="w-full pt-20 pb-24 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div initial="hidden" animate="show" variants={container}>
          
          <motion.div variants={item} className="mb-12 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Let's Connect</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently exploring Senior Product Manager opportunities in fintech, regtech, and financial services. Open to hybrid roles in the Greater Toronto Area or remote.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Toronto, ON</span>
            </div>
          </motion.div>

          <motion.div variants={item} className="grid sm:grid-cols-3 gap-6 mb-16">
            <a href="mailto:dheeraj@hey.com" className="group">
              <Card className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">dheeraj@hey.com</p>
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
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">linkedin.com/in/dheerajchowdhary</p>
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
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">github.com/dj-chow</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          <motion.div variants={item} className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card to-background border border-border/50 text-center max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-foreground mb-4 relative z-10">What I'm Looking For</h2>
            <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
              Senior PM roles at companies building products in financial services, fintech, payments, or developer platforms. I want to own platform, data, or internal products end-to-end. Banks, fintechs like Wealthsimple, or tech companies like Shopify and Stripe. I do my best work in complex, cross-functional environments where the problem is hard and the stakes are real.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

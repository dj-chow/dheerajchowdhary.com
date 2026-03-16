import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function Contact() {
  useDocumentMeta({
    title: "Contact Dheeraj Chowdhary — Get in Touch",
    description: "Reach out to Dheeraj Chowdhary for Senior PM opportunities in fintech, regtech, and financial services. Based in Mississauga, ON."
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
          </motion.div>

          <motion.div variants={item} className="grid sm:grid-cols-3 gap-6 mb-8">
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

          <motion.div variants={item} className="grid sm:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
            <div className="group cursor-default">
              <Card className="bg-card/30 border-border/30 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                    <Phone className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 647-787-8917</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group cursor-default">
              <Card className="bg-card/30 border-border/30 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Mississauga, ON, Canada</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div variants={item} className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card to-background border border-border/50 text-center max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-foreground mb-4 relative z-10">What I'm Looking For</h2>
            <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
              Senior PM roles at mid-to-large companies where I can own platform, data, or internal products end-to-end — from discovery through delivery to adoption. I thrive in regulated environments where cross-functional alignment and stakeholder management are critical superpowers.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

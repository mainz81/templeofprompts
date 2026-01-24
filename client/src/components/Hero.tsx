import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBg from "@/assets/hero-bg.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="container relative z-10 mx-auto px-4 sm:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-sm text-indigo-600 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
            Re-engineered for Creativity
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl font-heading">
            Your AI Prompt Library
          </h1>
          <p className="mb-10 text-lg text-slate-600 sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover, organize, and share the best prompts for writing, coding, and creativity. 
            Build your personal library of thoughts.
          </p>

          <div className="mx-auto flex max-w-xl items-center gap-2 rounded-full border border-border bg-background/80 p-2 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted/50 text-muted-foreground">
              <Search className="h-5 w-5" />
            </div>
            <Input 
              type="text" 
              placeholder="Search for prompts..." 
              className="h-full border-0 bg-transparent px-2 text-base shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/70"
            />
            <Button size="default" className="rounded-full px-6 font-semibold shadow-md">
              Search
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center gap-4 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Popular:</span>
            <span className="hover:text-primary cursor-pointer transition-colors border-b border-transparent hover:border-primary/30">#marketing</span>
            <span className="hover:text-primary cursor-pointer transition-colors border-b border-transparent hover:border-primary/30">#coding</span>
            <span className="hover:text-primary cursor-pointer transition-colors border-b border-transparent hover:border-primary/30">#midjourney</span>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
      </div>
    </section>
  );
}

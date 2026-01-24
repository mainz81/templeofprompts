import { categories, mockPrompts } from "@/lib/mockData";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromptCard } from "@/components/PromptCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrompts = activeCategory === "All" 
    ? mockPrompts 
    : mockPrompts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />

      <main className="container mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-heading font-bold text-foreground">Trending Prompts</h2>
            <p className="text-muted-foreground">Explore the most popular prompts from the community this week.</p>
          </div>
          
          <div className="flex items-center gap-3">
             <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <ArrowUpDown className="h-4 w-4" />
              Sort
            </Button>
          </div>
        </div>

        <Tabs defaultValue="All" className="w-full mb-10" onValueChange={setActiveCategory}>
          <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 bg-transparent gap-2 no-scrollbar">
            {categories.map((cat) => (
              <TabsTrigger 
                key={cat} 
                value={cat}
                className="rounded-full px-4 py-2 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm border border-transparent data-[state=inactive]:border-border data-[state=inactive]:bg-background hover:bg-secondary transition-all"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </motion.div>

        {filteredPrompts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">No prompts found in this category.</p>
            <Button variant="link" onClick={() => setActiveCategory("All")} className="mt-2">
              View all prompts
            </Button>
          </div>
        )}
      </main>

      <footer className="border-t border-border/60 bg-muted/20 py-12 mt-20">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <p className="font-heading font-bold text-lg">PromptLab</p>
            <p className="text-sm text-muted-foreground mt-1">© 2024 PromptLab. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

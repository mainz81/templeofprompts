import { mockPrompts } from "@/lib/mockData";
import { Navbar } from "@/components/Navbar";
import { PromptCard } from "@/components/PromptCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";

export default function Library() {
  // In a real app, this would filter by user ID. For now, we'll show "favorites" and some random ones as "mine".
  const myPrompts = mockPrompts.filter(p => p.isFavorite || p.author.name === "Mike Mainland"); // Assuming logged in user is Mike Mainland or has favorites

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <BookMarked className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-heading font-bold text-foreground">My Library</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Your collection of saved prompts and personal creations.
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {myPrompts.length > 0 ? (
            myPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))
          ) : (
             <div className="col-span-full py-20 text-center border rounded-xl border-dashed">
                <p className="text-muted-foreground mb-4">You haven't saved any prompts yet.</p>
                <Button>Explore Prompts</Button>
             </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

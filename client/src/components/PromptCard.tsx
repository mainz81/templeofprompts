import { Prompt } from "@/lib/mockData";
import { Heart, Copy, Share2, CornerUpRight, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface PromptCardProps {
  prompt: Prompt;
}

const categoryColors: Record<string, string> = {
  Writing: "bg-orange-100 text-orange-700 hover:bg-orange-100/80 border-orange-200",
  Coding: "bg-blue-100 text-blue-700 hover:bg-blue-100/80 border-blue-200",
  Productivity: "bg-green-100 text-green-700 hover:bg-green-100/80 border-green-200",
  Creative: "bg-purple-100 text-purple-700 hover:bg-purple-100/80 border-purple-200",
  Education: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100/80 border-yellow-200",
  Marketing: "bg-pink-100 text-pink-700 hover:bg-pink-100/80 border-pink-200",
};

export function PromptCard({ prompt }: PromptCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="group h-full flex flex-col overflow-hidden border-border/60 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
        <CardHeader className="p-5 pb-3 space-y-3">
          <div className="flex items-start justify-between">
            <Badge 
              variant="outline" 
              className={`font-medium border px-2.5 py-0.5 rounded-md ${categoryColors[prompt.category] || "bg-gray-100 text-gray-700"}`}
            >
              {prompt.category}
            </Badge>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
               <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                <Bookmark className={`h-4 w-4 ${prompt.isFavorite ? "fill-current text-primary" : ""}`} />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold leading-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {prompt.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {prompt.description}
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="p-5 pt-0 flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {prompt.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-sm">
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-4 border-t border-border/40 bg-muted/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6 border border-border">
              <AvatarImage src={prompt.author.avatar} />
              <AvatarFallback>{prompt.author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium text-muted-foreground truncate max-w-[80px]">
              {prompt.author.name}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex items-center gap-1 text-xs">
              <Heart className={`h-3.5 w-3.5 ${prompt.isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              <span>{prompt.likes > 1000 ? (prompt.likes / 1000).toFixed(1) + 'k' : prompt.likes}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Copy className="h-3.5 w-3.5" />
              <span>{prompt.copies > 1000 ? (prompt.copies / 1000).toFixed(1) + 'k' : prompt.copies}</span>
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7 -mr-2 text-muted-foreground hover:text-primary hover:bg-primary/10">
              <CornerUpRight className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

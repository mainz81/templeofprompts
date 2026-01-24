import { Link, useLocation } from "wouter";
import { Search, Plus, User, BookMarked, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-8">
          <Link href="/">
            <a className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-5 w-5 fill-current" />
              </div>
              PromptLab
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-foreground" : "text-muted-foreground"}`}>
                Explore
              </a>
            </Link>
            <Link href="/library">
              <a className={`text-sm font-medium transition-colors hover:text-primary ${location === "/library" ? "text-foreground" : "text-muted-foreground"}`}>
                Library
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>

          <Button className="hidden sm:flex gap-2 rounded-full font-medium" size="sm">
            <Plus className="h-4 w-4" />
            Create Prompt
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9 border border-border">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Mike Mainland</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    mike@promptlab.io
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BookMarked className="mr-2 h-4 w-4" />
                <span>My Library</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

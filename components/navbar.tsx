"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/achievements",
    label: "Achievements",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg">Portfolio</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === route.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <div className="md:hidden">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {routes.map((route) => (
                  <DropdownMenuItem key={route.href} asChild>
                    <Link href={route.href} className="w-full">
                      {route.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Link href="https://github.com/AishwaryaKoppad3" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/aishwarya-koppad-0395b6301/" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
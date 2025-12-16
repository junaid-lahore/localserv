import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const StickyHeader = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        {/* Logo with Transparent Background and Beta */}
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="https://static.databutton.com/public/6d2026dc-40c8-4858-b8dc-b265ab48e64d/EraXpert  (17).png" 
            alt="Local Serv Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="font-bold text-xl">LocalServ</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">beta</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Join Waitlist Button */}
          <Button 
            onClick={() => document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white font-medium px-6"
          >
            Join Waitlist
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button 
                  onClick={() => document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-medium px-6"
                >
                  Join Waitlist
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

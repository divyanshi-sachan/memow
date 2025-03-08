'use client'

import Link from "next/link";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function MobileNav() {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const togglePackages = () => {
    setIsPackagesOpen(!isPackagesOpen);
  };

  const toggleTools = () => {
    setIsToolsOpen(!isToolsOpen);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="mr-2 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Memow menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader className="hidden">
            <SheetTitle className=" hidden"></SheetTitle>
            <SheetDescription className="hidden"></SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col gap-4">
            <Link href="/" className="flex items-center" onClick={handleLinkClick}>
              <span className="text-xl font-bold">Memow</span>
            </Link>
            <Separator className="my-2" />
            <Link href="/" className="block py-2 text-lg font-semibold" onClick={handleLinkClick}>
              Home
            </Link>
            <div>
              <button
                onClick={togglePackages}
                className="flex items-center justify-between w-full py-2 text-lg font-semibold"
              >
                Packages
                {isPackagesOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {isPackagesOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link href="/packages/occasions" className="block py-1 text-base" onClick={handleLinkClick}>
                    Occasions
                  </Link>
                  <Link href="/packages/business" className="block py-1 text-base" onClick={handleLinkClick}>
                    Business
                  </Link>
                  <Link href="/packages/instant-booking" className="block py-1 text-base" onClick={handleLinkClick}>
                    Instant Booking
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={toggleTools}
                className="flex items-center justify-between w-full py-2 text-lg font-semibold"
              >
                Tools
                {isToolsOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {isToolsOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link href="/tools/image-modifiers" className="block py-1 text-base" onClick={handleLinkClick}>
                    Image Modifiers
                  </Link>
                  <Link href="/image-converter" className="block py-1 text-base" onClick={handleLinkClick}>
                    Image Converter
                  </Link>
                </div>
              )}
            </div>
            <Link href="/faqs" className="block py-2 text-lg font-semibold" onClick={handleLinkClick}>
              FAQ'S
            </Link>
            <Link href="/blog" className="block py-2 text-lg font-semibold" onClick={handleLinkClick}>
              Blogs
            </Link>
            <Link href="/contact-us" className="block py-2 text-lg font-semibold" onClick={handleLinkClick}>
              Contact Us
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}




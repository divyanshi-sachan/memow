"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { History } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";
import SearchBar from "./search";
import LoginModal from "./login-modal";
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import ScrollProgress from "../ui/scroll-progress";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Occasions",
    href: "/packages/occasions",
    description: "Check out our latest products and collections.",
  },
  {
    title: "Business",
    href: "/packages/business",
    description: "Discover our most popular items.",
  },
  {
    title: "Instant Booking",
    href: "/packages/instant-booking",
    description: "Discover our most popular items.",
  },
];

export default function MainNav() {

   // State for toggling audio and visual indicator
   const [isAudioPlaying, setIsAudioPlaying] = useState(false);
   const [isIndicatorActive, setIsIndicatorActive] = useState(false);
 
   // Refs for audio and navigation container
   const audioElementRef = useRef(null);
   const navContainerRef = useRef(null);
 
   const { y: currentScrollY } = useWindowScroll();
   const [isNavVisible, setIsNavVisible] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
 
   // Toggle audio and visual indicator
   const toggleAudioIndicator = () => {
     setIsAudioPlaying((prev) => !prev);
     setIsIndicatorActive((prev) => !prev);
   };
 
   // Manage audio playback
 //   useEffect(() => {
 //     if (isAudioPlaying) {
 //       audioElementRef.current.play();
 //     } else {
 //       audioElementRef.current.pause();
 //     }
 //   }, [isAudioPlaying]);
 
   useEffect(() => {
     if (currentScrollY === 0) {
       // Topmost position: show navbar without floating-nav
       setIsNavVisible(true);
       //@ts-ignore
       navContainerRef.current.classList.remove("floating-nav");
     } else if (currentScrollY > lastScrollY) {
       // Scrolling down: hide navbar and apply floating-nav
       setIsNavVisible(false);
       //@ts-ignore
       navContainerRef.current.classList.add("floating-nav");
     } else if (currentScrollY < lastScrollY) {
       // Scrolling up: show navbar with floating-nav
       setIsNavVisible(true);
       //@ts-ignore
       navContainerRef.current.classList.add("floating-nav");
     }
 
     setLastScrollY(currentScrollY);
   }, [currentScrollY, lastScrollY]);
 
   useEffect(() => {
     gsap.to(navContainerRef.current, {
       y: isNavVisible ? 0 : -100,
       opacity: isNavVisible ? 1 : 0,
       duration: 0.2,
     });
   }, [isNavVisible]);

  return (
    <>
    <ScrollProgress  className="sticky top-0 z-50"/>
    <div ref={navContainerRef} className="supports-backdrop-blur:bg-background/90 fixed top-0 bg-background/50 backdrop-blur-xl z-50 lg:px-16 w-full">
      <header className="dark:bg-gray-900 z-50">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <MobileNav />
            <Link href="/" className="flex items-center space-x-2">
            <Image
               src="https://www.memowries.com/static/media/logo.55d5fba70a1667bc1185.png"
               alt="Cotton T-Shirt"
               priority
               width={45}
               height={20}
             />
              <span className="text-xl font-bold dark:text-white text-black">
              Mémow
              </span>
            </Link>
          </div>
          <NavigationMenu className="hidden md:flex font-bold">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "group inline-flex text-base font-bold h-9 w-max bg-transparent items-center justify-center rounded-md px-4 py-2 dark:hover:bg-gray-500 "
                  )}
                >
                  <Link href="/" className="">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-bold bg-transparent dark:text-white dark:hover:bg-gray-500">
                  Packages
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:bg-gray-800 bg-white">
                    {components.map((component) => (
                      <li key={component.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={component.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors dark:hover:bg-gray-700 hover:bg-gray-100 dark:focus:bg-gray-700 focus:bg-gray-100 dark:text-white"
                          >
                            <div className="text-sm font-medium leading-none">
                              {component.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground dark:text-gray-400">
                              {component.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" bg-transparent font-bold ">
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:bg-gray-800 bg-white">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full text-base w-full select-none flex-col justify-end rounded-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium dark:text-white">
                           Community Image Showcase
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground dark:text-gray-400">
                          Explore user transformations with easy navigation using pagination.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none "
                          href="/tools/image-modifiers"
                        >
                          <div className="text-sm font-medium leading-none">
                           Image Modifiers
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground dark:text-gray-400">
                           Revive old or damaged images effortlessly
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none "
                          href="/image-converter"
                        >
                          <div className="text-sm font-medium leading-none">
                           Image Converter
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground dark:text-gray-400">
                           Fill in missing areas of images seamlessly
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button variant="ghost" asChild className="font-semibold">
                    <Link href="/blog">Blogs</Link>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button variant="ghost" asChild className="font-semibold">
                    <Link href="/faqs">FAQs</Link>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink asChild>
                  <Button variant="ghost" asChild className="font-semibold">
                    <Link href="/contact-us">Contact US</Link>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center ">
            <SearchBar />
            <Button
              variant="ghost"
              size="icon"
              className="relative dark:hover:bg-gray-700 dark:text-white"
            >
              <Link href="/past-booking"><History className="h-8 w-8 stroke-[2.5px]" /></Link>
            </Button>
            <SignedOut>
            <Link href="/sign-in">
            <LoginModal />
            </Link>
            </SignedOut>
            <SignedIn>
              <button className="relative mr-2 ml-2">
                <UserButton />
              </button>
            </SignedIn>
          </div>
        </div>
      </header>
      </div>
    </>
  );
}
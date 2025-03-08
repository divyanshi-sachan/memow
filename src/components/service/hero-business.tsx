"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


export default function HeroServicebusiness() {
  const router = useRouter()
  function toRoute(route : string){
    router.push(route)
  }
  return (
    <div className="from-muted/20 to-muted/50 relative flex h-96 w-full items-center justify-center overflow-hidden bg-gradient-to-b mt-20">
    <Image
      src="https://proedu.com/cdn/shop/articles/unnamed_0dca8c0f-c44d-4c5a-a4a9-3fb753525c0a.jpg?v=1642348154&width=2048"
      alt="Background"
      fill
      className="object-cover "
      priority
    />
    <div className="absolute inset-0 bg-black/30" />
    <div className="z-10 flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
      Book Your Shoot, Save Your Mémories Instantly.
      </h1>
      <p className="text-muted-foreground mb-4 md:text-lg text-white">
      Explore All Product For Your Occasions
      </p>
      <div className="flex gap-4">
      {/* packageBusiness */}
          <Button size="lg" variant="default" className="bg-white text-black hover:bg-white/90" onClick={()=>{toRoute('#packageBusiness')}}>
            View Packages
          </Button>
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20 hover:text-white" onClick={()=>{toRoute('/contact-us')}}>
            Contact Us
          </Button>
      </div>
    </div>
  </div>
  );
}

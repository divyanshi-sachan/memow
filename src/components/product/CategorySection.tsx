"use client"
import React, { useState } from 'react';
import { FloatingBar } from "@/components/ui/floatingbar";
import { PricingPlan } from '../cardcomponents/pricing-plan';
import { IdeasSection } from '../cardcomponents/idea-section';
import { DetailsSection } from '../cardcomponents/details-section';
import { motion } from 'framer-motion';
interface Package {
  name: string;
  originalPrice: number;
  offerPrice?: number;
  description: string;
  features: string[];
  ideasImages: string[];
}

interface CategorySectionProps {
  title: string;
  oneline: string;
  description: string;
  packages: Package[];
}

export function CategorySection({ title, oneline, description, packages }: CategorySectionProps) {
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const sections = [
    { id: "pricing", label: "Pricing Plans" },
    { id: "ideas", label: "Ideas" },
    { id: "details", label: "Details" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 bg-gray-100 p-8 w-screen"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 bg-black text-transparent bg-clip-text">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {oneline}
          </p>
        </div>
      </motion.div>
      
      {/* Floating bar + content */}
      <div className="relative flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FloatingBar sections={sections} />
        
        <div className="flex-1 ml-[250px] space-y-16">
          <PricingPlan packages={packages} activePackage={activePackage} setActivePackage={setActivePackage} />
          <IdeasSection categoryTitle={title} images={packages.flatMap(pkg => pkg.ideasImages)} />
          <DetailsSection title={title} description={description} />
        </div>
      </div>
    </section>
  );
}

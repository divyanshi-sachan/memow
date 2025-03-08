"use client"

import React, { useEffect, useRef, useState } from 'react'

interface FloatingBarProps {
  sections: {
    id: string
    label: string
  }[]
}

export function FloatingBar({ sections }: FloatingBarProps) {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [isSticky, setIsSticky] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observeIntersection = () => {
      // Remove existing observer if any
      if (observerRef.current) {
        observerRef.current.disconnect()
      }

      // Create new intersection observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { 
          root: null, 
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0 
        }
      )

      // Observe all sections
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id)
        if (sectionElement && observerRef.current) {
          observerRef.current.observe(sectionElement)
        }
      })

      // Clean up on unmount
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect()
        }
      }
    }

    observeIntersection()
  }, [sections])

  return (
    <div 
      ref={containerRef}
      className="fixed left-10 top-[40%] z-10 w-[230px] bg-white rounded-r-lg shadow-md"
    >
      {sections.map((section, index) => (
        <div 
          key={section.id}
          className={`py-4 px-6 cursor-pointer transition-colors duration-300 
            ${activeSection === section.id 
              ? 'bg-black text-white rounded-tr-lg' 
              : 'hover:bg-gray-100'}`}
          onClick={() => scrollToSection(section.id)}
        >
          {section.label}
        </div>
      ))}
    </div>
  )
}

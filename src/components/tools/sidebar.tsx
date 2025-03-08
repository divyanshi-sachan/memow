"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Image, Sparkles, Eraser, Palette, ShoppingCart, Layers2, LayoutDashboard } from 'lucide-react'

import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "Dashboard",
    mbtitle: "dashboard",
    icon: LayoutDashboard,
    href: "/tools/image-modifiers",
  },
  {
    title: "Image Restore",
    mbtitle: "Restore",
    icon: Image,
    href: "/tools/image-modifiers/transformations/add/restore",
  },
  {
    title: "Generative Fill",
    mbtitle: "Fill",
    icon: Sparkles,
    href: "/tools/image-modifiers/transformations/add/fill",
  },
  {
    title: "Object Remove",
    mbtitle: "Remove",
    icon: Eraser,
    href: "/tools/image-modifiers/transformations/add/remove",
  },
  {
    title: "Object Recolor",
    mbtitle: "Recolor",
    icon: Palette,
    href: "/tools/image-modifiers/transformations/add/recolor",
  },
  {
    title: "Background Remove",
    mbtitle: "Background",
    icon: Layers2,
    href: "/tools/image-modifiers/transformations/add/removeBackground",
  },
  {
    title: "Buy Credits",
    mbtitle: "Credits",
    icon: ShoppingCart,
    href: "/tools/image-modifiers/buy-credits",
  },
]

export function NavMenu() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed left-0 hidden h-screen w-62 flex-col border-r bg-background p-4 pt-8 md:flex">
        <nav className="flex flex-1 flex-col gap-1 py-20">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-base font-bold transition-colors",
                  isActive ? "bg-muted" : "hover:bg-muted",
                  // Add margin-top to create separation for the last one items
                  index === menuItems.length - 1 || index === menuItems.length - 1
                    ? "mt-auto"
                    : ""
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-background md:hidden">
        <nav className="grid h-16 grid-cols-6 items-center px-4">
          {menuItems.slice(0, 6).map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 text-xs",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.mbtitle}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}


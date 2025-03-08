import MainNav from "@/components/navbar/main-nav"
import { NavMenu } from "@/components/tools/sidebar"

export default function ToolsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <div className="flex min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-40 border-b bg-background">
            <MainNav/>   
            </div>
           <NavMenu />
           <main className="flex-1 pb-16 md:pb-0 md:ml-64 ">
            {children}
          </main>
        </div>
      </>
    )
  }
  
  
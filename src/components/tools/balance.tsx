import { Zap, ImageIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Balance() {
  const availableCredits = 150
  const imagesModified = 75
  return (
    <>
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="absolute top-0 right-0 md:right-6 lg:right-8 flex items-end space-y-2 mt-20 gap-2">
          <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-md">
            <Zap className="w-5 h-5 text-purple-600" />
            <span className="sm:inline-block ml-2 text-sm font-semibold">{availableCredits}</span><span className="hidden sm:inline-block ml-2 text-sm font-semibold">Credits Available</span>
          </div>
          <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-md">
            <ImageIcon className="w-5 h-5 text-purple-600" />
            <span className="sm:inline-block ml-2 text-sm font-semibold">{imagesModified}</span><span className="hidden sm:inline-block ml-2 text-sm font-semibold">Images Modified</span>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="left" className="sm:hidden">
        <p>{availableCredits} Credits Available</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  {/* <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="absolute top-4 right-4 md:right-6 lg:right-8 flex flex-col items-end space-y-2 mt-20">
          <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
            <Zap className="w-5 h-5 text-purple-600" />
            <span className="hidden sm:inline-block ml-2 text-sm font-semibold">{availableCredits} Credits Available</span>
          </div>
          <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
            <ImageIcon className="w-5 h-5 text-purple-600" />
            <span className="hidden sm:inline-block ml-2 text-sm font-semibold">{imagesModified} Images Modified</span>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="left" className="sm:hidden">
        <p>{imagesModified} Images Modified</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider> */}
  </>
  )
}


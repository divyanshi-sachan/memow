import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CoolMode } from "../ui/cool-mode"
import MorphingText from "../ui/morphing-text"
import ScratchToReveal from "../ui/scratch-to-reveal"


const texts = [
  "MEMOWRIES",
  "CAPTURE",
  "PRESERVE",
  "Smooth",
  "Transition",
];

export default function BeverageLanding() {
  return (
    <div className="container mx-auto min-h-screen max-w-8xl bg-white relative overflow-hidden p-4 md:p-8">
      {/* Background Text */}
      <div className="absolute top-0 left-0 text-gray-100 text-[150px] md:text-[300px] font-bold leading-none z-0">
       CAPTURE
      </div>
      <div className="absolute bottom-0 right-0 text-gray-100 text-[150px] md:text-[300px] font-bold leading-none z-0">
        PRESERVE
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col gap-4 md:gap-8">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            {/* Polaroid 1 */}
            <div className="invisible md:visible transform -rotate-12 bg-white p-1 shadow-md ">
              <Image
                src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-freestockpro-3278215.jpg&fm=jpg"
                alt="Beverage image"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            
            {/* Explore Product Button */}
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              EXPLORE SERVICE
            </Button>
          </div>

          {/* Main Title */}
          <div className="flex flex-col items-center gap-2">
            {/* <h1 className="text-6xl md:text-9xl font-bold text-[#FF7748] text-center leading-none">
              MEMOWRIES
            </h1> */}
            {/* <HyperText
              className="text-6xl md:text-9xl font-bold text-[#FF7748] text-center leading-none"
              text="MEMOWRIES"
            /> */}
            <MorphingText texts={texts} className="text-6xl md:text-9xl font-bold text-[#FF7748] text-center leading-none"/>
            {/* Polaroid 2 */}
            <div className="md:hidden transform rotate-6 bg-white p-1 shadow-md">
              {/* <Image
                src="https://nestmatrimony.com/blog/wp-content/uploads/2021/03/indian-4160039-scaled.jpg"
                alt="Product showcase"
                width={320}
                height={320}
                className="object-cover"
              /> */}

            <ScratchToReveal
            width={250}
            height={250}
            minScratchPercentage={70}
            className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
            // onComplete={handleComplete}
            gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
            >
            <p className="text-9xl">😎</p>
            </ScratchToReveal>
            </div>
          </div>

          {/* Middle Section */}
          <div className="text-center mt-4">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
            YOUR MEMOWRIES<br />PATNER
            </h2>
            
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center mt-4 md:mt-8">
            <p className="text-sm md:text-base text-gray-800 text-center max-w-lg">
              Crafted With High-Quality, Non-Toxic Materials To Ensure Safety, Durability, And Peace Of Mind For Everyday Use
            </p>
            <CoolMode>
            <Button
              className="mt-4 bg-[#FF7748] hover:bg-[#ff8f69] text-white px-6 py-2 rounded-full text-sm font-semibold"
            >
              Start Making Memories
            </Button>
            </CoolMode>
          </div>

          {/* Polaroid 3 */}
          <div className="hidden md:block absolute bottom-4 -right-16 transform -rotate-6 bg-white p-1 shadow-md">
            <Image
              src="https://www.themodelbuilders.co.uk/wp-content/uploads/2021/12/shutterstock_1599272944.jpg"
              alt="Product detail"
              width={350}
              height={350}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


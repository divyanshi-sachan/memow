import { Image, Sparkles, Eraser, Palette, Layers2 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function FeatureSection() {
  return (
    <Card className="w-full hidden md:block max-w-7xl mx-auto bg-banner bg-cover bg-no-repeat overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-br from-amber-400 to-yellow-600 p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-2xl mx-auto">
            Unleash Your Creative Vision with Memowries
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-white rounded-full p-4 w-14 h-14 flex items-center justify-center">
                <Image className="w-8 h-8 text-amber-600" />
              </div>
              <span className="text-center font-medium">Image Restore</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-white rounded-full p-4 w-14 h-14 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-amber-600" />
              </div>
              <span className="text-center font-medium">Generative Fill</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-white rounded-full p-4 w-14 h-14 flex items-center justify-center">
                <Eraser className="w-8 h-8 text-amber-600" />
              </div>
              <span className="text-center font-medium">Object Remove</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-white rounded-full p-4 w-14 h-14 flex items-center justify-center">
                <Palette className="w-8 h-8 text-amber-600" />
              </div>
              <span className="text-center font-medium">Object Recolor</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-white rounded-full p-4 w-14 h-14 flex items-center justify-center">
                <Layers2 className="w-8 h-8 text-amber-600" />
              </div>
              <span className="text-center font-medium">BG Remove</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


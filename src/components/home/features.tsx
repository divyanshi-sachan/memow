import { Camera, Wand2, Users, Palette } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Feature6 = () => (
  <div className="w-full py-20 lg:py-40 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Offering</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              See what we have to offer
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              Managing a small business today is already tough.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0">
              <Image 
                src="https://madisongreyphotography.com/wp-content/uploads/2023/03/photography-sessions.jpg" 
                alt="Instant Shoots" 
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10">
              <Camera className="w-8 h-8 stroke-1 text-white" />
            </div>
            <div className="flex flex-col mt-4 relative z-10">
              <h3 className="text-xl tracking-tight text-white">Instant Shoots</h3>
              <p className="text-white/80 max-w-xs text-base">
                MEMOW offers instant access to photographers and videographers, ensuring you can book a shoot at a moment's notice.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0">
              <Image 
                src="https://www.eyerys.com/sites/default/files/adobe-photoshop-generative-fill.webp" 
                alt="AI-Powered Tools" 
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10">
              <Wand2 className="w-8 h-8 stroke-1 text-white" />
            </div>
            <div className="flex flex-col mt-4 relative z-10">
              <h3 className="text-xl tracking-tight text-white">AI-Powered Tools</h3>
              <p className="text-white/80 max-w-xs text-base">
                AI Powered tools from shoring that organizes your photos to generative fills, enhance, recoloring, background and object removals etc.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0">
              <Image 
                src="https://isteam.wsimg.com/ip/a24c91a1-eb02-4268-af5d-b36a833e1c18/Elev8edstudios_sysex-studios2.jpg" 
                alt="Creative Space" 
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10">
              <Users className="w-8 h-8 stroke-1 text-white" />
            </div>
            <div className="flex flex-col mt-4 relative z-10">
              <h3 className="text-xl tracking-tight text-white">Creative Space</h3>
              <p className="text-white/80 max-w-xs text-base">
                MEMOW isn't just a platform-it's a community. Showcase your portfolio, connect with potential clients, and collaborate with other creatives.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0">
              <Image 
                src="https://theloftonking.com/wp-content/uploads/2020/12/featured-image-776x517.jpg" 
                alt="Personalized Services" 
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10">
              <Palette className="w-8 h-8 stroke-1 text-white" />
            </div>
            <div className="flex flex-col mt-4 relative z-10">
              <h3 className="text-xl tracking-tight text-white">Personalized Services</h3>
              <p className="text-white/80 max-w-xs text-base">
                MEMOW provides personalized services that cater to your specific creative vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


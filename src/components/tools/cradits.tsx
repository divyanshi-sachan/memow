import { Check, X, Zap, ImageIcon } from 'lucide-react'


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PricingTier {
  name: string
  price: number
  credits: number
  features: {
    name: string
    included: boolean
  }[]
  ctaText: string
  popular?: boolean
}

const tiers: PricingTier[] = [
  {
    name: "Free",
    price: 0,
    credits: 20,
    features: [
      { name: "20 Free Credits", included: true },
      { name: "Basic Access to Services", included: true },
      { name: "Priority Customer Support", included: false },
      { name: "Priority Updates", included: false },
    ],
    ctaText: "Free Consumable",
  },
  {
    name: "Pro Package",
    price: 40,
    credits: 120,
    features: [
      { name: "120 Credits", included: true },
      { name: "Full Access to Services", included: true },
      { name: "Priority Customer Support", included: true },
      { name: "Priority Updates", included: false },
    ],
    ctaText: "Buy Credit",
    popular: true,
  },
  {
    name: "Premium Package",
    price: 199,
    credits: 2000,
    features: [
      { name: "2000 Credits", included: true },
      { name: "Full Access to Services", included: true },
      { name: "Priority Customer Support", included: true },
      { name: "Priority Updates", included: true },
    ],
    ctaText: "Buy Credit",
  },
]

export default function PricingPage() {
    const availableCredits = 150
    const imagesModified = 75
  return (
    <div className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto mt-20">
      <div className="flex flex-row justify-center items-center items-end space-y-2 gap-4">
        <div className="items-center bg-white rounded-lg px-3 py-2 shadow-md">
          <span className="hidden sm:inline-block ml-2 text-lg font-semibold text-[#2D2A53]">Credits Available</span>  
          <div className='flex justify-center items-center'>
          <Zap className="w-5 h-5 text-purple-600" /><span className="sm:inline-block ml-2 text-lg font-semibold text-[#2D2A53]">{availableCredits}</span>
          </div>
        </div>
        <div className="items-center bg-white rounded-lg px-3 py-2 shadow-md">
          <span className="hidden sm:inline-block ml-2 text-lg font-semibold">Images Modified</span>  
          <div className='flex justify-center items-center'>
          <ImageIcon className="w-6 h-6 text-purple-600" /><span className="sm:inline-block ml-2 text-lg font-semibold">{imagesModified}</span>
          </div>
        </div>
      </div>
      <div className="text-center mb-12 mt-8">
        <h1 className="text-4xl font-bold tracking-tight text-[#2D2A53] mb-4">Buy Credits</h1>
        <p className="text-xl text-muted-foreground">
          Choose a credit package that suits your needs!
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card key={tier.name} className="relative flex flex-col">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold tracking-tight">
                    ${tier.price}
                  </span>
                </div>
                <p className="text-muted-foreground mt-2">
                  {tier.credits} Credits
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-purple-600" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground" />
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={tier.price === 0 ? "secondary" : "default"}
              >
                {tier.ctaText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


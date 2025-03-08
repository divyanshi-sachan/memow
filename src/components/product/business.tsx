'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { AutoScrollImage } from "./auto-scroll-image"
import { useRouter } from "next/navigation"

const experiences = [
    {
     tag: "Full experience",
     title: "Brand Shoot",
     description: "This format involves active participation in the day-to-day affairs of the farm, from caring for the animals to harvesting the crops",
     images: [
       "https://assets.entrepreneur.com/content/3x2/2000/1665079203-Personal-branding-photography-by-Rosie-Parsons---Stella-Grow-Magazine-16.jpg?format=pjeg&auto=webp&crop=1:1",
       "https://atelieroostamsterdam.nl/wp-content/uploads/2022/11/AtelierOost_0079.jpg",
       "https://i.pinimg.com/236x/ea/59/78/ea5978c46fc2d25522b2ea31a2aff0b6.jpg",
     ],
     link: "/packages/business/package?routeAttachment=Brand Shoot"
    },
    {
        tag: "Full experience",
        title: "Croporate Profile And Headshot",
        description: "This format involves active participation in the day-to-day affairs of the farm, from caring for the animals to harvesting the crops",
        images: [
          "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
          "https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg",
          "https://www.whiteroomstudio.com.sg/wordpress/wp-content/uploads/2021/10/professional-headshots-singapore-32-white-room-studio.jpeg",
        ],
        link: "/packages/business/package?routeAttachment=Croporate Profile And Headshot"
       },
  {
    tag: "Full experience",
    title: "Political Profile And Headshot",
    description: "This format involves active participation in the day-to-day affairs of the farm, from caring for the animals to harvesting the crops",
    images: [
      "https://media.istockphoto.com/id/1355106725/photo/indian-politician-greeting-by-doing-namaste-concept-of-welcome-gesture-showing-on-yellow.jpg?s=612x612&w=0&k=20&c=1SqJxKXfbl0hKZtC1KgZ35Nwzq7PUuAMS2CYtQJmnGU=",
      "https://media.istockphoto.com/id/1357134978/photo/confident-senior-politician-looking-at-camera-by-crossing-arms-on-yellow-background-concept.jpg?s=612x612&w=0&k=20&c=JyGhneun1wIOfUKD8KXQqHR40-_CVcaohwf2eBdj5eY=",
      "https://www.shutterstock.com/image-photo/former-indian-minister-giving-fake-600nw-2094036532.jpg",
    ],
    link: "/packages/business/package?routeAttachment=Political Profile And Headshot"
  },
  {
    tag: "Only relax",
    title: "Portfolio",
    description: "Enjoy the beautiful scenery, fresh air and tranquility without having to do a thing. Take a walk along the scenic trails, relax with a book or just enjoy the quiet",
    images: [
      "https://www.bringitonline.in/uploads/2/2/4/5/22456530/modelling-portfolio-photography-54_orig.jpg",
      "https://www.a-rrajani.com/wp-content/uploads/2021/10/13-14.jpg.webp",
      "https://images.pexels.com/photos/2772099/pexels-photo-2772099.jpeg",
    ],
    link: "/packages/business/package?routeAttachment=Portfolio"
  },
]

export default function BusinessCards() {
    const router = useRouter()

    const [hoveredCard, setHoveredCard] = useState<number | null>(null)
    function handelOnclik(link : string) {
      router.push(link)
    }
    return (
      <>
      <div id='packageBusiness' className="mb-12 text-center mt-10">
          <h2 className="mb-4 text-3xl font-bold">Photography Packages</h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect package for your special moments
          </p>
        </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
        {experiences.map((experience, index) => (
          <Card 
            key={index} 
            className="relative overflow-hidden rounded-3xl border-0 aspect-[4/5]"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handelOnclik(experience.link)}
          >
            <AutoScrollImage 
              images={experience.images} 
              alt={experience.title} 
              isPaused={hoveredCard === index}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 p-8 flex flex-col justify-end">
              <div className="bg-white/20 text-white text-sm w-fit px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {experience.tag}
              </div>
              <h2 className="text-white text-2xl font-bold mt-4 mb-3">
                {experience.title}
              </h2>
              <p className="text-white/90 text-sm">
                {experience.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
      </>
    )
  }
  
  
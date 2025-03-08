"use client";

import React from "react";
import { useEffect, useState } from "react";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";

const heading = {
  title: "Sample Shoot",
  subtitle:
    "Inspire and let yourself be inspired, from one unique fashion to another.",
};

export default function HeadSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000);
  }, [api, current]);
  return (
    <div className=" md:mt-7 mb-4 ml-4 mr-4 pb-16">
      <div className=" flex items-center justify-center gap-4 p-5  md:p-10 flex-col text-center">
        <div className=" text-3xl md:text-5xl  tracking-tight  ">
          {heading.title}
        </div>
        <div className="text-sm md:text-base">{heading.subtitle}</div>
      </div>
      <div className="">
        <Carousel setApi={setApi} className=" p-0">
          <CarouselContent className=" p-0">
            <CarouselItem className="md:basis-1/2 p-0 ">
              <div>
                <Image
                  src="https://bidunart.com/wp-content/uploads/2020/04/Portrait183a-1280x640.jpg"
                  alt="Ribbed Tank Top"
                  width={700}
                  height={900}
                  className="object-cover w-full p-1 aspect-square md:aspect-video"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 p-0 ">
              <div>
                <Image
                  src="https://staceyoliverphotography.co.uk/wp-content/uploads/2022/07/pentre-mawr-4-scaled.jpg"
                  alt="Ribbed Tank Top"
                  width={700}
                  height={900}
                  className="object-cover  w-full p-1 aspect-square md:aspect-video"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 p-0 ">
              <div>
                <Image
                  src="https://staceyoliverphotography.co.uk/wp-content/uploads/2022/07/pentre-mawr-4-scaled.jpg"
                  alt="Ribbed Tank Top"
                  width={700}
                  height={900}
                  className="object-cover  w-full p-1 aspect-square md:aspect-video"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 p-0 ">
              <div>
                <Image
                  src="https://staceyoliverphotography.co.uk/wp-content/uploads/2022/07/pentre-mawr-4-scaled.jpg"
                  alt="Ribbed Tank Top"
                  width={700}
                  height={900}
                  className="object-cover  w-full p-1 aspect-square md:aspect-video"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 p-0 ">
              <div>
                <Image
                  src="https://staceyoliverphotography.co.uk/wp-content/uploads/2022/07/pentre-mawr-4-scaled.jpg"
                  alt="Ribbed Tank Top"
                  width={700}
                  height={900}
                  className="object-cover  w-full p-1 aspect-square md:aspect-video"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 p-0 ">
              <div>
                <Image
                  src="https://staceyoliverphotography.co.uk/wp-content/uploads/2022/07/pentre-mawr-4-scaled.jpg"
                  alt="Ribbed Tank Top"
                  width={700}
                  height={900}
                  className="object-cover  w-full p-1 aspect-square md:aspect-video"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

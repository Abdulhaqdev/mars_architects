"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface DesignData {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface DesignProps {
  designData: DesignData[];
}

export default function Design({ designData }: DesignProps) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container max-w-screen-2xl mx-auto my-8 md:my-10" id="design">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="w-full">
            {designData.map((item) => (
              <CarouselItem className="w-full" key={item.id}>
                <div className="flex w-full flex-col lg:flex-row gap-8 lg:gap-14">
                  {/* Text Section */}
                  <div className="space-y-4 lg:w-2/5">
                    <div className="space-y-4 md:space-y-6 lg:space-y-10">
                      <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight">
                        {t("design.title")}
                      </h1>
                      <div className="lg:max-w-sm">
                        <p className="text-sm md:text-base leading-relaxed">
                          {t("design.description")}
                        </p>
                      </div>
                    </div>
                    <div className="text-start lg:text-end">
                      <span className="text-[#d6d6d6] opacity-30 text-6xl md:text-7xl lg:text-8xl font-light">
                        {item.id < 10 ? `0${item.id}` : item.id}
                      </span>
                    </div>
                  </div>

                  {/* Image and Description Section */}
                  <div className="lg:w-3/5">
                    <div className="relative aspect-[8/5] w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="w-full h-full object-cover"
                        priority
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="flex items-end ml-20 w-2 justify-start mt-6 relative">
                        <CarouselPrevious />
                        <CarouselNext />
                      </div>
                      <div className="w-full flex justify-center">
                        <div className="mt-6 md:ml-24 max-w-xl flex flex-col gap-3">
                          <h2 className="text-3xl font-bold">{item.name}</h2>
                          {item.description.split("\n").map((text: string, index: number) => (
                            <p key={index} className="text-sm leading-relaxed mb-4">
                              {text}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
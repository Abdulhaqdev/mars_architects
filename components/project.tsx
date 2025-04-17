import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface PortfolioData {
  id: number;
  name: string;
  description: string;
  image: string;
  short_description: string;
}

interface ProjectProps {
  portfolioData: PortfolioData[];
}

export default function Project({ portfolioData }: ProjectProps) {
  return (
    <section id="projects" className="w-full bg-white text-black py-16">
      <div className="container max-w-screen-2xl mx-auto flex flex-col gap-10">
        <div className="flex items-start gap-6 md:gap-10">
          <div className="hidden md:block w-72 h-[2px] bg-gray-300 mt-4 flex-shrink-0" />
          <div>
            <h2 className="text-5xl font-medium mb-6">АРХИТЕКТУРНЫЕ ПРОЕКТЫ</h2>
            <p className="text-gray-700 max-w-4xl text-[15px] md:text-[16px] leading-tight">
              Мы создаем архитектуру, которая гармонично сочетает эстетику,
              функциональность и инновационные технологии. В портфолио нашей
              студии — уникальные проекты жилых, коммерческих и общественных
              пространств, разработанные с учетом современных тенденций и
              индивидуальных потребностей наших клиентов.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {portfolioData.map((item) => (
              <CarouselItem key={item.id}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="text-9xl font-light text-gray-200 hidden md:block">
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </div>
                  <div className="md:w-1/2 relative">
                    <Image
                      src={item.image}
                      alt="The Space Ship project"
                      objectFit="top"
                      width={1000}
                      height={700}
                      className="w-full h-[300px] md:h-full object-cover"
                    />
                    {/*  */}
                  </div>
                  <div className="md:w-1/2 space-y-4 md:px-10">
                    <h3 className="text-5xl font-thin">{item.name}</h3>
                    <p className="text-black">{item.short_description}</p>
                    <div className="space-y-4 text-base font-light text-gray-600">
                      {item.description.split("\n").map((text: string, index: number) => (
                        <p key={index} className="text-gray-600">
                          {text}
                        </p>
                      ))}
                    </div>
                    <div className="flex gap-8 flex-col mt-8">
                      <div className="flex gap-2">
                        <div className="flex items-center ml-16 gap-4 mt-6 relative">
                          <CarouselPrevious />
                          <CarouselNext />
                        </div>
                      </div>
                      <div>
                        <Button className= " bg-red-600 rounded-none hover:bg-red-700 font-light text-xs text-white">
                          ОБСУДИТЬ ПРОЕКТ
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
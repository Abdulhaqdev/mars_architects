import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface PublicationData {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

interface WhyweProps {
  publicationsData: PublicationData[];
}

export default function Whywe({ publicationsData }: WhyweProps) {
  return (
    <div className="bg-white">
      <section className="relative container max-w-screen-2xl mx-auto text-white py-16">
        <div className="absolute inset-0 z-0 md:w-11/12 mx-auto h-2/5 md:h-3/5 mt-12">
          <Image
            src="/whyus.png"
            alt="Planet background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto space-y-12 py-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-12 hidden md:block h-[1px] bg-gray-500 mr-4"></span>
              ПОЧЕМУ МЫ
            </h2>
            <p className="text-gray-300 max-w-4xl mb-12">
              Мы создаем не просто архитектуру, а среду, соответствующую образу
              жизни и потребностям человека и функциональности. Каждый проект
              уникален и разрабатывается индивидуально для каждого клиента. Наша
              цель — создать пространство для жизни.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white text-black p-6 shadow-md">
                <div className="w-14 h-14 rounded-sm flex items-center justify-center mb-4">
                  {/* SVG for Experience */}
                  <svg width="46" height="58" viewBox="0 0 46 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG Path */}
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-3 text-[#101420]">
                  Опыт и профессионализм
                </h3>
                <p className="text-gray-600 text-sm">
                  Наша команда состоит из опытных архитекторов и дизайнеров с
                  многолетним стажем работы. Мы постоянно совершенствуем свои
                  навыки и следим за последними тенденциями в архитектуре и
                  дизайне.
                </p>
              </div>
              <div className="bg-white text-black p-6 shadow-md">
                <div className="w-14 h-14 rounded-sm flex items-center justify-center mb-4">
                  {/* SVG for Individual Approach */}
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG Path */}
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-3 text-[#101420]">
                  Индивидуальный подход
                </h3>
                <p className="text-gray-600 text-sm">
                  Мы внимательно изучаем потребности и пожелания каждого
                  клиента, чтобы создать пространство, которое идеально
                  соответствует его образу жизни и эстетическим предпочтениям.
                </p>
              </div>
              <div className="bg-white text-black p-6 shadow-md">
                <div className="w-14 h-14 rounded-sm flex items-center justify-center mb-4">
                  {/* SVG for Quality */}
                  <svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG Path */}
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-3 text-[#101420]">
                  Качество и надежность
                </h3>
                <p className="text-gray-600 text-sm">
                  Мы гарантируем высокое качество выполнения всех работ и
                  соблюдение сроков. Наши проекты отличаются продуманностью
                  деталей, функциональностью и долговечностью.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="publications" className="relative container max-w-screen-2xl mx-auto text-white md:mb-96 py-10 md:py-20">
        <div className="absolute inset-0 z-0 md:w-10/12 mx-auto bg-[#101420] h-96 mt-12"></div>
        <div className="relative px-4 right-0 z-10">
          <div className="max-w-5xl mx-auto relative space-y-12 py-10">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center">
                <div className="flex items-start md:items-center md:ml-11">
                  <div className="w-12 hidden md:block h-[1px] bg-gray-500 text-start md:mr-4"></div>
                  <h2 className="text-3xl font-light tracking-wide">ПУБЛИКАЦИИ</h2>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center ml-10 gap-4 mt-6 relative">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </div>
              </div>
              <div className="grid md:absolute md:-right-32 w-full p-2">
                <CarouselContent className="w-full">
                  {publicationsData.map((post, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3 gap-6 py-10 pl-8"
                    >
                      <div className="relative text-black p-8">
                        <div className="w-full h-72">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                        <div className="absolute top-6 left-6 bg-[#d6d6d6] bg-opacity-80 px-4 py-2">
                          <p className="text-[#000000] font-medium text-xs">Интерьер</p>
                        </div>
                        <div className="absolute -bottom-10 p-5 left-0 right-0 mx-4 bg-[#101420] bg-opacity-95 sm:p-4">
                          <div className="space-y-2">
                            <p className="text-[#ffffff] text-sm">{post.date}</p>
                            <h2 className="text-[#ffffff] text-xl font-light leading-tight">
                              {post.title}
                            </h2>
                            <div className="flex items-center pt-4">
                              <p className="text-[#ffffff] text-sm uppercase tracking-wider mr-3">
                                ПОДРОБНЕЕ
                              </p>
                              <ArrowRight className="text-[#ffffff] w-6 h-6" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="w-full container max-w-screen-2xl mx-auto md:p-14 px-4">
        <div className="md:space-y-20 py-5 md:py-0">
          <div className="border-gray-200 pb-2">
            <h2 className="text-center text-3xl md:text-6xl text-[#101420] font-medium tracking-wide">
              НАШИ КЛИЕНТЫ
            </h2>
          </div>
          <div className="flex md:flex-wrap justify-center items-center gap-3 md:gap-10">
            <div className="h-8 flex justify-center items-center">
              <Image
                src="/Subtract.png"
                alt="Newsweek"
                width={180}
                height={22}
                className="object-contain"
              />
            </div>
            <div className="h-8 flex justify-center items-center">
              <Image
                src="/Vector (1).png"
                alt="TIME"
                width={180}
                height={22}
                className="object-contain"
              />
            </div>
            <div className="h-8 flex justify-center items-center">
              <Image
                src="/path2.png"
                alt="The New Yorker"
                width={180}
                height={22}
                className="object-contain"
              />
            </div>
            <div className="h-8 flex justify-center items-center">
              <Image
                src="/Union.png"
                alt="Bloomberg"
                width={180}
                height={22}
                className="object-contain"
              />
            </div>
            <div className="h-8 flex justify-center items-center">
              <Image
                src="/Union (1).png"
                alt="POLITICO"
                width={180}
                height={22}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
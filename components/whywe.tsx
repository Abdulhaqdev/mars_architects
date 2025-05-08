import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Translation } from '@/i18n/client'
import { useParams } from 'next/navigation'
// import { Translation } from '@/i18n/server'
// import { }

interface PublicationData {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}
export interface lngParams {
  lng: string;
}
interface WhyweProps {
  publicationsData: PublicationData[];
}

export default  function Whywe({ publicationsData }: WhyweProps ) {
const { lng } = useParams()
  const {t} =  Translation(lng as string) // params ni React.use bilan ochamiz;
  return (
    <div className="bg-white">
    
      <section id="publications" className="relative container max-w-screen-2xl mx-auto text-white  py-4 md:py-20">
        <div className="absolute inset-0 z-0 md:w-9/12 w-full  mx-auto bg-[#101420] h-96 mt-12"></div>
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
                  <h2 className="text-3xl font-light tracking-wide">Публикации</h2>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center ml-10 gap-4 mt-6 relative">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </div>
              </div>
              <div className="grid w-full p-2">
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
            <h1 className='text-black text-1xl sm:text-2xl md:text-5xl'>NIIAT</h1>
            </div>
            <div className="h-8 flex justify-center items-center">
              <Image
                src="/bat.png"

                alt="Newsweek"
                width={150}
                height={22}
                className="object-contain"
              />
            </div>
            <div className="h-8 flex justify-center items-center">
              <Image
                src="/koc.png"
                alt="TIME"
                width={150}
                height={22}
                className="object-contain"
              />
            </div>
            <div className="h-8 flex justify-center items-center">
              <Image
                src="/sherin.png"
                alt="Bloomberg"
                width={150}
                height={22}
                className="object-contain"
              />
            </div>
            <div className="h-8 flex justify-center items-center">
              <Image
                src="/east.png"
                alt="The New Yorker"
                width={150}
                height={22}
                className="object-contain"
              />
            </div>
            
            <div className="h-8 flex justify-center items-center">
              <Image
                src="/thetowe.png"
                alt="POLITICO"
                width={150}
                height={22}
                className="object-contain"
              />
            </div>
           
            <div className="h-8 flex justify-center items-center">
            <h1 className='text-black text-1xl  sm:text-2xl md:text-5xl'>Viniks</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
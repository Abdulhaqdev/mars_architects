import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Aboutus() {
  return (
    <div className="relative min-h-screen bg-gray-900 md:py-10 text-white">
      {/* Background Image - Positioned Behind Content */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aboutus.png" // Replace with your actual background image path
          alt="Planet background"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      {/* Main Content - Positioned Above Background */}
      <div className="relative z-10">
        {/* First Section: Image + Text */}
        <section className="container grid grid-cols-1 md:grid-cols-2  md:mb-20 md:py-3">
          {/* Left Column - Image */}
          <div className="relative h-[476px] md:h-[700px] ">
            <Image
              src="/aboutus1.png" // Replace with your actual image path
              alt="Architectural design"
              fill
              className="w-[576px] md:pr-40 object-cover"
            />
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col justify-start gap-10 md:pr-20 md:gap-28">
            <h1 className="text-5xl  md:mb-12">О НАС</h1>
            <div className="space-y-6 text-[#C4C4C4] text-base">
              <p>
                Мы — архитектурная студия, где творческие возможности и
                функциональность сливаются воедино, создавая пространства,
                которые вдохновляют и трансформируют повседневную жизнь.
              </p>
              <p>
                Мы фокусируемся на разработке решений для жилых и коммерческих
                объектов, которые не только эстетически привлекательны, но и
                практичны. Наша команда профессионалов стремится к совершенству
                в каждом проекте.
              </p>
              <p>
                Каждый проект — это уникальное путешествие, которое начинается с
                понимания ваших потребностей и заканчивается созданием
                пространства, которое превосходит ваши ожидания.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section: Creative Path */}
        <section className="container py-7 md:py-0 mt-16">
          {/* Heading - Centered Across the Section */}

          <div className="flex flex-col-reverse gap-20 md:grid md:grid-cols-2  ">
            {/* Left Column - Text */}
            <div className="">
              <h2 className="text-5xl md:text-6xl font-bold mb-10 ">
                Творческий путь
              </h2>
              <div className="space-y-6 text-[#C4C4C4] text-base">
                <div>
                  <p className="text-sm text-[#C4C4C4] ">Архитектор-дизайнер</p>
                  <h3 className="text-2xl text-white font-bold mb-1">
                    Дмитрий Аркадьевич <br />
                    Кефхаянц
                  </h3>
                </div>
                <p className="text-sm text-[#C4C4C4] ">
                  Я родился в 1988 году в городе Ташкент. Закончил в 2005 году
                  школу и поступил в ТАСИ на факультет дизайн архитектурной
                  среды. Закончил институт в 2009 году с одним из самых высоких
                  баллов
                </p>
                <p className="text-sm text-[#C4C4C4] ">
                  В 2008 году занял первое место на Международном архитектур-ном
                  конкурсе MACCA - 1 место (диплом) Минск, Беларусь.
                </p>
                <p className="flex items-start ml-8">
                  <span className="inline-block p-1 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Свою харизму и талант Гоустфасер раскрывает в 2006 году, когда
                  впервые выступает на сцене. Занимая первое место в 2008 году,
                  он становится известным в кругах профессионалов.
                </p>
                <p className="flex items-start ml-8">
                  <span className="inline-block p-1 bg-red-600 rounded-full mr-3 mt-2"></span>
                  В 2009 году, после победы на международном конкурсе, он
                  становится известным не только в России, но и за её пределами.
                </p>
                <p className="flex items-start ml-8">
                  <span className="inline-block p-1 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Уже в 2010 году Гоустфасер становится членом жюри на
                  международных конкурсах, а в 2012 году — главным судьёй на
                  чемпионате мира.
                </p>
                <p className="flex items-start ml-8">
                  <span className="inline-block p-1 bg-red-600 rounded-full mr-3 mt-2"></span>
                  Сегодня Гоустфасер продолжает вдохновлять миллионы людей по
                  всему миру, делясь своим опытом и знаниями.
                </p>
                <p className="text-sm">
                  Свою первую работу и свой первый проект я получил в 2009 году
                  в возрасте 21 год, с этого момента и по сей день я занимаюсь
                  только одним делом, архитектурой и дизайном.
                </p>
                <p className="text-sm">
                  На данным момент, я основал свою студию архитектуры и дизайна,
                  для реализации всего опыта и потенциала, накопленного годами.
                </p>
              </div>
            </div>
            {/* Right Column - Image */}
            <div className="relative h-[607px] md:h-[800px]">
              <Image
                src="/aboutus2.png"
                alt="Dmitry Arkadyev portrait"
                fill
                objectPosition="top"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Aboutus;

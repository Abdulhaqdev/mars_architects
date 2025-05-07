"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Aboutus() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aboutus.png"
          alt={t("about.backgroundAlt")}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto py-6 md:py-10">
        {/* First Section: Image + Text */}
        <section className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-28 lg:mb-20">
          {/* Image */}
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/aboutus1.png"
              alt={t("about.image1Alt")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-start gap-6 lg:gap-12">
            <h1 className="text-4xl lg:text-5xl font-bold">{t("about.title")}</h1>
            <div className="space-y-4 text-[#C4C4C4] text-sm md:text-base max-w-prose">
              <p>{t("about.description1")}</p>
              <p>{t("about.description2")}</p>
              <p>{t("about.description3")}</p>
            </div>
          </div>
        </section>

        {/* Second Section: Creative Path */}
        <section className="container py-6 md:py-10 mt-12">
          <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-2">
            {/* Text */}
            <div className="leading-tight">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-10">
                {t("about.creativePath.title")}
              </h2>
              <div className="space-y-4 text-[#C4C4C4] text-sm md:text-base">
                <div>
                  <p className="text-xs md:text-sm text-[#C4C4C4]">
                    {t("about.creativePath.role")}
                  </p>
                  <h3 className="text-xl md:text-2xl text-white font-bold mb-1">
                    {t("about.creativePath.name")}
                  </h3>
                </div>
                <p>{t("about.creativePath.description1")}</p>
                <p>{t("about.creativePath.description2")}</p>
                <p className="flex items-start ml-6 leading-tight">
                  <span className="inline-block p-1 bg-red-600 rounded-full mr-2 mt-1.5"></span>
                  {t("about.creativePath.description3")}
                </p>
                <p className="flex items-start ml-6 leading-tight">
                  <span className="inline-block p-1 bg-red-600 rounded-full mr-2 mt-1.5"></span>
                  {t("about.creativePath.description4")}
                </p>
                <p className="flex items-start ml-6 leading-tight">
                  <span className="inline-block p-1 bg-red-600 rounded-full mr-2 mt-1.5"></span>
                  {t("about.creativePath.description5")}
                </p>
                <p className="flex items-start ml-6 leading-tight">
                  <span className="inline-block p-1 bg-red-600 rounded-full mr-2 mt-1.5"></span>
                  {t("about.creativePath.description6")}
                </p>
                <p>{t("about.creativePath.description7")}</p>
                <p>{t("about.creativePath.description8")}</p>
                <p>{t("about.creativePath.description9")}</p>
                <p>{t("about.creativePath.description10")}</p>

                <p>{t("about.creativePath.description01")}</p>
              </div>
            </div>
            {/* Image */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/aboutus2.png"
                alt={t("about.image2Alt")}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 50vw"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
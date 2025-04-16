"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/hero";
import Aboutus from "@/components/aboutus";
import Project from "@/components/project";
import Design from "@/components/design";
import Whywe from "@/components/whywe";
import Footer from "@/components/footer";
import ContactUs from "@/components/contactus";
import axios from "axios";

interface FooterData {
  id: number;
  title: string;
  description: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  telegram: string;
  address: string;
  working_hours: string;
}

interface DesignData {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface PortfolioData {
  id: number;
  name: string;
  description: string;
  image: string;
  short_description: string;
}

interface PublicationData {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export default function Home() {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [designData, setDesignData] = useState<DesignData[]>([]);
  const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([]);
  const [publicationsData, setPublicationsData] = useState<PublicationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        // Fetch all API data concurrently
        const [footerRes, designRes, portfolioRes, publicationsRes] =
          await Promise.all([
            axios.get("https://api.mars-architects.us/aboutus/about-us/"),
            axios.get(
              "https://api.mars-architects.us/portfolio/interior-design/"
            ),
            axios.get(
              "https://api.mars-architects.us/portfolio/architectural-projects/"
            ),
            axios.get(
              "https://api.mars-architects.us/publications/publications/"
            ),
          ]);

        setFooterData(footerRes.data.data[0]);
        setDesignData(designRes.data.data);
        setPortfolioData(portfolioRes.data.data);
        setPublicationsData(publicationsRes.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#101420] text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#c2000a]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#101420] text-white">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main className="text-white">
      <Hero footerData={footerData} />
      <Aboutus />
      <Project portfolioData={portfolioData} />
      <Design designData={designData} />
      <Whywe publicationsData={publicationsData} />
      <ContactUs />
      <Footer footerData={footerData} />
    </main>
  );
}
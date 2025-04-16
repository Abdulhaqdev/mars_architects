"use client";

import Link from "next/link";
import { Facebook, Instagram, Clock, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Footer() {
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

  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.mars-architects.us/aboutus/about-us/");
        setFooterData(res.data.data[0]);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="bg-[#151921] text-gray-300 py-8 px-6">
      <div className="max-w-6xl container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <div>
            <Image
              src="/logogray.png"
              alt="Mars architecture logo"
              height={150}
              width={80}
              className=""
              priority
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-1">
          <h3 className="text-sm font-medium mb-4">Контактные данные</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">{footerData?.phone || "Loading..."}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">{footerData?.email || "Loading..."}</span>
            </li>
            <li className="flex items-center md:items-start gap-2">
              <MapPin className="h-6 w-6" />
              <span className="text-sm">{footerData?.address || "Loading..."}</span>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="md:col-span-1">
          <h3 className="text-sm font-medium mb-4">Режим работы</h3>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{footerData?.working_hours || "Loading..."}</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="md:col-span-1">
          <h3 className="text-sm font-medium mb-4">Мы тут</h3>
          <div className="flex items-center gap-4">
            {footerData?.facebook && (
              <Link
                href={footerData.facebook}
                className="hover:text-white transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_156)">
                    <path
                      d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 17.9906 4.3875 22.9547 10.125 23.8547V15.4688H7.07812V12H10.125V9.35625C10.125 6.34922 11.9156 4.6875 14.6578 4.6875C15.9703 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8297C14.3391 7.875 13.875 8.80078 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8547C19.6125 22.9547 24 17.9906 24 12Z"
                      fill="#F2F2F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_156">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            )}
            {footerData?.instagram && (
              <Link
                href={footerData.instagram}
                className="hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM9.26164 5.53867C9.94431 5.5076 10.1624 5.5 11.9006 5.5H11.8986C13.6373 5.5 13.8546 5.5076 14.5373 5.53867C15.2186 5.56987 15.684 5.67774 16.092 5.836C16.5133 5.99934 16.8693 6.21801 17.2253 6.57401C17.5813 6.92975 17.8 7.28682 17.964 7.70776C18.1213 8.11469 18.2293 8.57977 18.2613 9.26111C18.292 9.94378 18.3 10.1619 18.3 11.9001C18.3 13.6382 18.292 13.8558 18.2613 14.5385C18.2293 15.2196 18.1213 15.6848 17.964 16.0918C17.8 16.5126 17.5813 16.8697 17.2253 17.2255C16.8697 17.5815 16.5132 17.8007 16.0924 17.9641C15.6852 18.1224 15.2196 18.2303 14.5382 18.2615C13.8556 18.2925 13.6381 18.3001 11.8998 18.3001C10.1618 18.3001 9.94378 18.2925 9.26111 18.2615C8.5799 18.2303 8.11469 18.1224 7.70749 17.9641C7.28682 17.8007 6.92975 17.5815 6.57414 17.2255C6.21827 16.8697 5.99961 16.5126 5.836 16.0917C5.67787 15.6848 5.57 15.2197 5.53867 14.5384C5.50773 13.8557 5.5 13.6382 5.5 11.9001C5.5 10.1619 5.508 9.94365 5.53853 9.26097C5.5692 8.5799 5.6772 8.11469 5.83587 7.70762C5.99987 7.28682 6.21854 6.92975 6.57454 6.57401C6.93028 6.21814 7.28735 5.99947 7.70829 5.836C8.11523 5.67774 8.5803 5.56987 9.26164 5.53867Z"
                    fill="#F2F2F2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4265 6.75335C11.538 6.75317 11.6579 6.75323 11.7873 6.75328L12.0006 6.75335C13.7094 6.75335 13.912 6.75948 14.5868 6.79015C15.2108 6.81868 15.5495 6.92295 15.7751 7.01055C16.0737 7.12655 16.2867 7.26522 16.5105 7.48922C16.7345 7.71322 16.8732 7.92656 16.9895 8.22523C17.0771 8.45056 17.1815 8.78924 17.2099 9.41324C17.2405 10.0879 17.2472 10.2906 17.2472 11.9986C17.2472 13.7066 17.2405 13.9093 17.2099 14.584C17.1813 15.208 17.0771 15.5466 16.9895 15.772C16.8735 16.0706 16.7345 16.2833 16.5105 16.5072C16.2865 16.7312 16.0739 16.8699 15.7751 16.9859C15.5497 17.0739 15.2108 17.1779 14.5868 17.2064C13.9121 17.2371 13.7094 17.2437 12.0006 17.2437C10.2917 17.2437 10.0891 17.2371 9.41447 17.2064C8.79046 17.1776 8.45179 17.0733 8.22605 16.9857C7.92739 16.8697 7.71405 16.7311 7.49005 16.507C7.26604 16.283 7.12738 16.0702 7.01111 15.7714C6.92351 15.5461 6.81911 15.2074 6.79071 14.5834C6.76004 13.9088 6.75391 13.7061 6.75391 11.997C6.75391 10.2879 6.76004 10.0863 6.79071 9.41164C6.81924 8.78764 6.92351 8.44896 7.01111 8.22336C7.12711 7.92469 7.26604 7.71136 7.49005 7.48735C7.71405 7.26335 7.92739 7.12468 8.22605 7.00842C8.45166 6.92042 8.79046 6.81641 9.41447 6.78775C10.0049 6.76108 10.2337 6.75308 11.4265 6.75175V6.75335ZM15.4169 7.81602C14.9929 7.81602 14.6489 8.15963 14.6489 8.58377C14.6489 9.00777 14.9929 9.35177 15.4169 9.35177C15.8409 9.35177 16.1849 9.00777 16.1849 8.58377C16.1849 8.15976 15.8409 7.81576 15.4169 7.81576V7.81602ZM8.71393 12.0001C8.71393 10.185 10.1855 8.71344 12.0005 8.71337C13.8156 8.71337 15.2868 10.185 15.2868 12.0001C15.2868 13.8152 13.8157 15.2861 12.0006 15.2861C10.1855 15.2861 8.71393 13.8152 8.71393 12.0001Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M12.0005 9.86671C13.1787 9.86671 14.1339 10.8218 14.1339 12.0001C14.1339 13.1782 13.1787 14.1334 12.0005 14.1334C10.8223 14.1334 9.86719 13.1782 9.86719 12.0001C9.86719 10.8218 10.8223 9.86671 12.0005 9.86671Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </Link>
            )}
            {footerData?.telegram && (
              <Link
                href={footerData.telegram}
                className="hover:text-white transition-colors"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8.03576 10.9008C6.83367 11.4256 5.59854 11.9649 4.46913 12.587L4.46905 12.5871C3.8793 13.0188 4.66319 13.3243 5.39852 13.6107C5.51543 13.6563 5.63111 13.7014 5.73985 13.7464C5.83033 13.7742 5.92235 13.8035 6.01559 13.8332C6.83343 14.0938 7.74537 14.3843 8.53935 13.9472C9.84363 13.198 11.0745 12.3318 12.3044 11.4662C12.7074 11.1827 13.1102 10.8991 13.5155 10.6198C13.5345 10.6077 13.556 10.5938 13.5794 10.5786C13.9247 10.3548 14.7012 9.85146 14.414 10.545C13.7347 11.2878 13.0072 11.9454 12.2757 12.6065C11.7827 13.052 11.288 13.4992 10.805 13.9752C10.3843 14.317 9.94747 15.0044 10.4185 15.483C11.5034 16.2426 12.6053 16.9837 13.7066 17.7243C14.065 17.9654 14.4233 18.2064 14.7809 18.4479C15.387 18.9318 16.3343 18.5404 16.4675 17.7842C16.5268 17.4364 16.5863 17.0886 16.6458 16.7408C16.9745 14.8184 17.3035 12.8954 17.594 10.9667C17.6335 10.6642 17.6783 10.3617 17.7231 10.059C17.8316 9.32549 17.9403 8.59104 17.9742 7.85354C17.8867 7.11757 16.9944 7.27939 16.4977 7.44488C13.9451 8.41618 11.418 9.45948 8.90093 10.5212C8.61579 10.6475 8.32674 10.7737 8.03576 10.9008Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
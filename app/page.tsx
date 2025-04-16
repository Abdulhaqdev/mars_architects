'use client'

import Hero from '@/components/hero'
import Aboutus from '@/components/aboutus'
import Project from '@/components/project'
import Design from '@/components/design'
import Whywe from '@/components/whywe'
import Footer from '@/components/footer'
import ContactUs from '@/components/contactus'

export default function Home() {


  return (
    <main className="  text-white ">
				<Hero/>
				<Aboutus/>
				<Project/>
				<Design/>
				<Whywe/>
				<ContactUs/>
				<Footer/>
    </main>
  )
}
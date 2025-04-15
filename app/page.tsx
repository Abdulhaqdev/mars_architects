'use client'

import Hero from '@/components/hero'
import Aboutus from '@/components/aboutus'
import Project from '@/components/project'
import Design from '@/components/design'
import Whywe from '@/components/whywe'
import Footer from '@/components/footer'

export default function Home() {


  return (
    <main className="  text-white ">
				<Hero/>
				<Aboutus/>
				<Project/>
				<Design/>
				<Whywe/>
				<Footer/>
    </main>
  )
}
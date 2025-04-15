import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Car, ChevronLeft, ChevronRight } from 'lucide-react'
import axios from 'axios'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel'

function Project() {
	interface Portfolio {
		id: number
		name: string
		description: string
		image: string
		short_description: string
	}

	const [portfolio, setPprtfolio] = useState<Portfolio[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					'https://api.mars-architects.us/portfolio/architectural-projects/'
				)
				setPprtfolio(res.data.data)
				console.log(res.data.data)
			} catch (error) {
				console.error('Error fetching footer data:', error)
			}
		}
		fetchData()
	}, [])
	return (
		<section className='w-full bg-white text-black py-16'>
			<div className='container flex flex-col gap-10 '>
				<div className='flex items-start gap-6 md:gap-10'>
					{/* Chiziq https://api.mars-architects.us/portfolio/architectural-projects/
					 */}
					<div className='hidden md:block w-72 h-[2px] bg-gray-300 mt-4 flex-shrink-0' />

					{/* Matn bloki */}
					<div>
						<h2 className='text-4xl font-medium mb-6'>АРХИТЕКТУРНЫЕ ПРОЕКТЫ</h2>

						<p className='text-gray-700 max-w-3xl text-[15px] md:text-[18px] leading-relaxed'>
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
						align: 'start',
					}}
					className='w-full '
				>
					<CarouselContent>
						{portfolio &&
							portfolio.map(item => (
								<CarouselItem key={item.id}>
									<div className='flex flex-col md:flex-row gap-8'>
										{/* Project Number */}
										<div className='text-9xl font-light text-gray-200 hidden md:block'>
											{item.id < 10 ? `0${item.id}` : item.id}
										</div>

										{/* Project Image */}
										<div className='md:w-1/2 relative'>
											<Image
												src={item.image}
												alt='The Space Ship project'
												objectFit='top'
												width={1000}
												height={500}
												className='w-full h-[300px]  md:h-auto object-cover'
											/>

											{/* Project Navigation */}
											<div className='absolute bottom-4 right-4 flex items-center gap-2'>
												<div className='text-sm text-white'>01 / 06</div>
												<button className='p-1 rounded-full bg-white/20 backdrop-blur-sm'>
													<ChevronRight className='h-5 w-5 text-white' />
												</button>
											</div>
										</div>

										{/* Project Description */}
										<div className='md:w-1/2 space-y-4 md:px-10'>
											<h3 className='text-5xl font-thin'>{item.name}</h3>

											<p className='text-black '>{item.short_description}</p>

											<div className='space-y-4 text-base font-light text-gray-600'>
                        {item.description.split('\n').map((text: string, index: number) => (
                          <p key={index} className='text-gray-600'>
                            {text}
                          </p>
                        ))}
											</div>

											{/* Navigation and Button */}
											<div className='flex  gap-8  flex-col mt-8'>
												<div className='flex gap-2 '>
													<div className='flex items-center ml-16  gap-4 mt-6 relative'>
														<CarouselPrevious />
														<CarouselNext />
													</div>
												</div>
												<div>
													<Button className='bg-red-600 hover:bg-red-700 text-white'>
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
	)
}

export default Project

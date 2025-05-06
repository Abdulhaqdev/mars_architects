'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel'

interface PortfolioData {
	id: number
	name: string
	description: string
	image: string
	short_description: string
}

interface ProjectProps {
	portfolioData: PortfolioData[]
}

export default function Project({ portfolioData }: ProjectProps) {
	const { t } = useTranslation()

	return (
		<section
			id='projects'
			className='w-full bg-white text-black py-12 md:py-16 px-4'
		>
			<div className='container max-w-screen-2xl mx-auto flex flex-col gap-8'>
				{/* Header Section */}
				<div className='flex items-start gap-4 md:gap-6'>
					<div className='hidden lg:block w-48 h-[2px] bg-gray-300 mt-4 flex-shrink-0' />
					<div>
						<h2 className='text-4xl md:text-5xl font-medium mb-4 md:mb-6'>
							{t('projects.title')}
						</h2>
						<p className='text-gray-700 max-w-3xl text-sm md:text-[15px] lg:text-[16px] leading-tight'>
							{t('projects.description')}
						</p>
					</div>
				</div>

				{/* Carousel Section */}
				<Carousel opts={{ align: 'start' }} className='w-full'>
					<CarouselContent>
						{portfolioData.map(item => (
							<CarouselItem key={item.id}>
								<section className=' grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 '>
									{/* Image */}
									<div className='relative aspect-[3/4] w-full'>
										<Image
											src={item.image}
											alt={item.name}
											fill
											className='object-cover'
											sizes='(max-width: 1024px) 90vw, 50vw'
										/>
									</div>

									{/* Text */}
									<div className='flex flex-col justify-start gap-6 lg:gap-12 lg:px-8'>
										<h3 className='text-3xl md:text-4xl lg:text-5xl font-thin'>
											{item.name}
										</h3>
										<p className='text-black text-sm md:text-base'>
											{item.short_description}
										</p>
										<div className='space-y-3 text-sm md:text-base font-light text-gray-600'>
											{item.description
												.split('\n')
												.map((text: string, index: number) => (
													<p key={index} className='text-gray-600'>
														{text}
													</p>
												))}
										</div>

										<div className='flex w-12 flex-col gap-6 mt-6 px-10'>
											<div className='flex justify-start'>
												<div className='flex items-center ml-4 py-6 relative'>
													<CarouselPrevious />
													<CarouselNext />
												</div>
											</div>
										</div>
									</div>
								</section>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	)
}

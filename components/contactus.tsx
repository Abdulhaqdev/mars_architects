'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactUs() {
	const { t } = useTranslation()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')

	const handleChange = (e: { target: { id: any; value: any } }) => {
		const { id, value } = e.target
		setFormData(prev => ({
			...prev,
			[id]: value,
		}))
	}

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		setError('')
		setSuccess('')
		setLoading(true)

		if (
			!formData.name ||
			!formData.email ||
			!formData.phone ||
			!formData.message
		) {
			setError(t('contacts.errors.required'))
			setLoading(false)
			return
		}

		if (!validateEmail(formData.email)) {
			setError(t('contacts.errors.invalidEmail'))
			setLoading(false)
			return
		}

		try {
			const response = await axios.post(
				'https://api.mars-architects.us/contacts/send/',
				{
					name: formData.name,
					email: formData.email,
					phone: formData.phone,
					message: formData.message,
				}
			)

			setSuccess(t('contacts.success'))
			setFormData({ name: '', email: '', phone: '', message: '' })
		} catch (err) {
			setError(t('contacts.errors.submitError'))
			console.error('API Error:', err)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='w-full bg-[#101420] py-12 lg:py-24 xl:py-24' id='contacts'>
			<div className='max-w-6xl mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 xl:gap-24'>
				<div className='flex flex-col mx-auto gap-4 min-w-[300px]'>
					<div className='space-y-2'>
						<h1 className='text-2xl font-bold tracking-tighter sm:text-5xl text-white'>
							{t('contacts.title')}
						</h1>
						<p className='max-w-[600px] text-gray-500 md:text-lg/relaxed dark:text-gray-400'>
							{t('contacts.description')}
						</p>
					</div>
					<form onSubmit={handleSubmit} className='grid gap-4'>
						<div className='flex flex-col gap-1.5'>
							<Label htmlFor='name' className='text-sm text-white'>
								{t('contacts.labels.name')}
							</Label>
							<Input
								id='name'
								placeholder={t('contacts.placeholders.name')}
								value={formData.name}
								onChange={handleChange}
								className='bg-gray-800 text-white border-gray-600'
							/>
						</div>
						<div className='flex flex-col gap-1.5'>
							<Label htmlFor='phone' className='text-sm text-white'>
								{t('contacts.labels.phone')}
							</Label>
							<Input
								id='phone'
								placeholder={t('contacts.placeholders.phone')}
								value={formData.phone}
								onChange={handleChange}
								className='bg-gray-800 text-white border-gray-600'
							/>
						</div>
						<div className='flex flex-col gap-1.5'>
							<Label htmlFor='email' className='text-sm text-white'>
								{t('contacts.labels.email')}
							</Label>
							<Input
								id='email'
								placeholder={t('contacts.placeholders.email')}
								value={formData.email}
								onChange={handleChange}
								className='bg-gray-800 text-white border-gray-600'
							/>
						</div>
						<div className='flex flex-col gap-1.5'>
							<Label htmlFor='message' className='text-sm text-white'>
								{t('contacts.labels.message')}
							</Label>
							<Textarea
								id='message'
								placeholder={t('contacts.placeholders.message')}
								value={formData.message}
								onChange={handleChange}
								className='min-h-[100px] resize-none bg-gray-800 text-white border-gray-600'
							/>
						</div>
						{error && <p className='text-red-500 text-sm'>{error}</p>}
						{success && <p className='text-green-500 text-sm'>{success}</p>}
						<Button
							size='lg'
							disabled={loading}
							className='bg-[#c2000a] hover:bg-[#c2000a9b]'
						>
							{loading
								? t('contacts.button.loading')
								: t('contacts.button.submit')}
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}

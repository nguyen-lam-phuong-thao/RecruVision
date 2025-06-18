import { type JSX, useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import toast, { Toaster } from 'react-hot-toast'
import './Support.css'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export const Support = (): JSX.Element => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name')
      return false
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return false
    }
    if (!formData.subject.trim()) {
      toast.error('Please enter a subject')
      return false
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message')
      return false
    }
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      toast.success('Message sent successfully! We will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[url('images/png/bg-wave.png')] bg-cover bg-center py-48">
      <Toaster position="top-center" />
      <div className="flex flex-col items-center justify-center mb-20">
        <h1 className="text-4xl font-bold text-white mb-4">How can we help you?</h1>
        <p className="text-lg text-white mb-4">Find answers to common questions or reach out to our support team.</p>
      </div>
      <div className="flex flex-col items-center justify-center mb-30">
        <h1 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <Accordion.Root type="single" collapsible className="w-[600px] space-y-4">
          <Accordion.Item value="item-1" className="accordion-item">
            <Accordion.Trigger className="accordion-trigger">
              <h2 className="text-lg font-bold">How do I get started with RecruVision?</h2>
              <ChevronDownIcon className="accordion-icon w-5 h-5" />
            </Accordion.Trigger>
            <Accordion.Content className="accordion-content">
              <div className="accordion-content-wrapper">
                <p className="text-sm text-gray-500">
                  Simply sign up for an account and follow our quick setup guide. Our onboarding process will help you get started in minutes.
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2" className="accordion-item">
            <Accordion.Trigger className="accordion-trigger">
              <h2 className="text-lg font-bold">What payment methods do you accept?</h2>
              <ChevronDownIcon className="accordion-icon w-5 h-5" />
            </Accordion.Trigger>
            <Accordion.Content className="accordion-content">
              <div className="accordion-content-wrapper">
                <p className="text-sm text-gray-500">
                  We accept all major credit cards, PayPal, and offer enterprise billing options for larger organizations.
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3" className="accordion-item">
            <Accordion.Trigger className="accordion-trigger">
              <h2 className="text-lg font-bold">Can I cancel my subscription anytime?</h2>
              <ChevronDownIcon className="accordion-icon w-5 h-5" />
            </Accordion.Trigger>
            <Accordion.Content className="accordion-content">
              <div className="accordion-content-wrapper">
                <p className="text-sm text-gray-500">
                  Yes, you can cancel your subscription at any time. No long-term contracts required.
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col p-5 bg-white rounded-lg w-[600px] space-y-4">
        <h1 className="text-lg font-bold">Contact Us</h1>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter your name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter your email"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter subject"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[120px]"
            placeholder="Enter your message"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-3 font-medium hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

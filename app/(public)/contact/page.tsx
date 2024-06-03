import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import React from 'react'

export default function Contactpage() {
    return (
        <main className='bg-brand-primary-bg min-h-screen'>
            <div className='w-full p-4 md:pt-20 md:px-16 md:grid grid-cols-2 space-y-4'>
                <ContactInfo />
                <ContactForm />
            </div>
            
        </main>
    )
}

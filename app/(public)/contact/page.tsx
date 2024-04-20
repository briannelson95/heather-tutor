import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import React from 'react'

export default function Contactpage() {
    return (
        <main className='bg-gray-300 min-h-screen'>
            <div className='w-full pt-20 px-16 grid grid-cols-2'>
                <ContactInfo />
                <ContactForm />
            </div>
            
        </main>
    )
}

import React from 'react'

export default function ContactInfo() {
    return (
        <div className='space-y-4'>
            <h1 className='text-3xl md:text-6xl font-bold'>Contact Info</h1>
            <div className='md:w-1/2 flex flex-col gap-4'>
                <p>Email, call or fill out the form to get tutoring help today</p>
                <a href="mailto:info@example.com" className='underline'>info@example.com</a>
                <a href='tel:3212221234' className='underline'>(321) 222-1234</a>
            </div>
        </div>
    )
}

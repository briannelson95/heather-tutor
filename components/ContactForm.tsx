"use client"
import React, { useState } from 'react'
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';

export default function ContactForm() {
    const subjects = ['Math', 'Science', 'History', 'English', 'Other'];

    const defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    }

    const [emailData, setEmailData]: any = useState(defaultValues);

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        // SEND EMAIL
        const response = await fetch('api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emailData })
        });

        if (response.status === 200) {
            setEmailData({});
            // toast.success('Email Sent')
        }
        setEmailData(defaultValues)
    }

    const handleChangeSelection = (e: any) => {
        setEmailData({ ...emailData, subject: e.target.value })
    }

    return (
        <div className='bg-white rounded-xl p-4'>
            <h2 className='text-2xl md:text-5xl'>Get in Touch</h2>
            <form className='mt-4 space-y-4'>
                <fieldset className='flex gap-4 w-full'>
                    <input
                        type='text'
                        id='fname'
                        name='fname'
                        placeholder='First Name'
                        value={emailData.firstName}
                        onChange={(e: any) => setEmailData({ ...emailData, firstName: e.target.value })}
                        className='rounded-lg border-2 border-brand-primary-bg/50 p-2 w-1/2'
                        required
                    />
                    <input
                        type='text'
                        id='lname'
                        name='lname'
                        placeholder='Last Name'
                        value={emailData.lastName}
                        onChange={(e: any) => setEmailData({ ...emailData, lastName: e.target.value })}
                        className='rounded-lg border-2 border-brand-primary-bg/50 p-2 w-1/2'
                    />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor='email' className='relative w-full'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400'>
                            <MailIcon />
                        </div>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            placeholder='Email'
                            value={emailData.email}
                            onChange={(e: any) => setEmailData({ ...emailData, email: e.target.value })}
                            className='rounded-lg border-2 border-brand-primary-bg/50 p-2 pl-10 w-full'
                            required
                        />
                    </label>
                    <label htmlFor='phone' className='relative w-full'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400'>
                            <PhoneIcon />
                        </div>
                        <input
                            type='text'
                            id='phone'
                            name='phone'
                            placeholder='Phone'
                            value={emailData.phone}
                            onChange={(e: any) => setEmailData({ ...emailData, phone: e.target.value })}
                            className='rounded-lg border-2 border-brand-primary-bg/50 p-2 pl-10 w-full'
                        />
                    </label>
                    <label htmlFor='subject' className='relative'>
                        <select 
                            id='subject'
                            name='subject'
                            className='rounded-lg border-2 border-brand-primary-bg/50 p-2 w-full text-gray-400'
                            value={emailData.subject} 
                            onChange={handleChangeSelection}
                        >
                            <option value="" disabled>Select a subject</option>
                            {subjects.map((item: any, index: number) => (
                                <option 
                                    key={index} 
                                    value={item} 
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder='Message'
                        rows={5}
                        value={emailData.message}
                        onChange={(e: any) => setEmailData({ ...emailData, message: e.target.value })}
                        className='rounded-lg border-2 border-brand-primary-bg/50 p-2 w-full'
                        required
                    />
                </fieldset>
                <div className='flex justify-end'>
                    <button 
                        onClick={handleSubmit}
                        className='bg-brand-secondary text-white font-bold text-xl py-3 px-10 rounded-lg disabled:bg-gray-200'
                        disabled={emailData.firstName == '' || emailData.email == '' || emailData.message == ''}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

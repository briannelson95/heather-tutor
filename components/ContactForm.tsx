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
        subject: 'Math' || 'Science' || 'History' || 'English' || 'Other',
        message: '',
    }

    const [data, setData]: any = useState(defaultValues);

    const handleSubmit = (e: any) => {
        e.preventDefault()

        // HANDLE CONTACT API 
        console.log(data)
        setData(defaultValues)
    }

    return (
        <div className='bg-white rounded-xl p-4'>
            <h2 className='text-5xl'>Get in Touch</h2>
            <form className='mt-4 space-y-4'>
                <fieldset className='flex gap-4 w-full'>
                    <input
                        type='text'
                        id='fname'
                        name='fname'
                        placeholder='First Name'
                        value={data.firstName}
                        onChange={(e: any) => setData({ ...data, firstName: e.target.value })}
                        className='rounded-lg border-2 border-gray-300 p-2 w-1/2'
                        required
                    />
                    <input
                        type='text'
                        id='lname'
                        name='lname'
                        placeholder='Last Name'
                        value={data.lastName}
                        onChange={(e: any) => setData({ ...data, lastName: e.target.value })}
                        className='rounded-lg border-2 border-gray-300 p-2 w-1/2'
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
                            value={data.email}
                            onChange={(e: any) => setData({ ...data, email: e.target.value })}
                            className='rounded-lg border-2 border-gray-300 p-2 pl-10 w-full'
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
                            value={data.phone}
                            onChange={(e: any) => setData({ ...data, phone: e.target.value })}
                            className='rounded-lg border-2 border-gray-300 p-2 pl-10 w-full'
                        />
                    </label>
                    <label htmlFor='subject' className='relative'>
                        <select 
                            id='subject'
                            name='subject'
                            className='rounded-lg border-2 border-gray-300 p-2 w-full text-gray-400'
                        >
                            {subjects.map((item: any, index: number) => (
                                <option 
                                    key={index} 
                                    value={item} 
                                    onChange={(e: any) => setData({ ...data, subject: e.target.value })}
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
                        value={data.message}
                        onChange={(e: any) => setData({ ...data, message: e.target.value })}
                        className='rounded-lg border-2 border-gray-300 p-2 w-full'
                        required
                    />
                </fieldset>
                <div className='flex justify-end'>
                    <button 
                        onClick={handleSubmit}
                        className='bg-gray-400 text-white font-bold text-xl py-3 px-10 rounded-lg disabled:bg-gray-200'
                        disabled={data.firstName == '' || data.email == '' || data.message == ''}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

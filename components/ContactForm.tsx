"use client"
import React, { useState } from 'react'
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';

export default function ContactForm() {

    const defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
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
            <h2 className='text-2xl md:text-5xl'>Contact Form</h2>
            <form className='mt-4 space-y-4'>
                
            </form>
        </div>
    )
}

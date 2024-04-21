import React from 'react'
import InstagramIcon from './icons/InstagramIcon'
import FacebookIcon from './icons/FacebookIcon'

export default function Footer() {
    return (
        <footer className='py-6 px-16'>
            <div className="grid grid-cols-5">
                <div className='space-y-2'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-6 h-6 aspect-square rounded-full bg-gray-700' />
                        <h2 className='text-2xl font-bold'>Weir&apos;s Tutoring</h2>
                    </div>
                    <div className='space-y-2'>
                        <p className='font-medium'>Follow Me</p>
                        <div className='flex gap-2'>
                            <InstagramIcon />
                            <FacebookIcon />
                        </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center text-gray-500 text-sm'>
                <p>Website designed and developed by <a href="https://briannelson.dev/" className='underline'>Brian Nelson</a></p>
            </div>
        </footer>
    )
}

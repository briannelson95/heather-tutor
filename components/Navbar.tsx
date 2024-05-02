import Link from 'next/link'
import React from 'react'
import PrimaryButton from './PrimaryButton'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='py-4 px-16 flex justify-between items-center'>
            <ul className='flex gap-12 text-xl items-center'>
                <li>
                    <Link href={'/'}>
                        <img
                            src='/Weir-Logo.png'
                            height={200}
                            width={200}
                            alt='Weir Logo'
                            className='h-24 w-24'
                        />
                        {/* <h1 className='text-2xl font-bold'>Weir's Tutoring</h1> */}
                    </Link>
                </li>
                <li>
                    <Link href={'/about'}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={'/contact'}>
                        Contact
                    </Link>
                </li>
            </ul>
            <PrimaryButton link='/contact' text='Get Started' />
        </nav>
    )
}

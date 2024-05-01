import Link from 'next/link'
import React from 'react'
import PrimaryButton from './PrimaryButton'

export default function Navbar() {
    return (
        <nav className='py-6 px-16 flex justify-between items-center'>
            <ul className='flex gap-12 text-xl'>
                <li>
                    <Link href={'/'}>
                        <h1 className='text-2xl font-bold'>Weir's Tutoring</h1>
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

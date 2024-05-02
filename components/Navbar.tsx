"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import PrimaryButton from './PrimaryButton'
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import HamburgerIcon from './icons/HamburgerIcon';

type NavbarProps = {
    image: any;
    navItems: NavItem[]
}

type NavItem = {
    title: string;
    link: any;
    _key: string;
}

export default function Navbar(props: NavbarProps) {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <nav className='p-2 md:py-4 md:px-16 flex w-full md:justify-between items-center'>
            <ul className='flex justify-between gap-4 md:gap-12 md:text-xl items-center'>
                {/* <button onClick={handleOpen}>
                    <HamburgerIcon />
                </button> */}
                <li>
                    <Link href={'/'}>
                        <Image
                            src={urlForImage(props.image)}
                            height={200}
                            width={200}
                            alt='Weir Logo'
                            className='h-24 w-24'
                        />
                        {/* <h1 className='text-2xl font-bold'>Weir's Tutoring</h1> */}
                    </Link>
                </li>
                {props.navItems && props.navItems.map((item) => (
                    <li key={item._key}>
                        <Link href={item.link.slug.current}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='hidden md:block'>
                <PrimaryButton link='/contact' text='Get Started' />
            </div>
        </nav>
    )
}

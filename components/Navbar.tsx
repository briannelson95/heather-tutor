import Link from 'next/link'
import React from 'react'
import PrimaryButton from './PrimaryButton'
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

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
    // console.log(props.navItems[0])
    return (
        <nav className='py-4 px-16 flex justify-between items-center'>
            <ul className='flex gap-12 text-xl items-center'>
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
            <PrimaryButton link='/contact' text='Get Started' />
        </nav>
    )
}

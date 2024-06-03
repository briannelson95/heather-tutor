import { urlForImage } from '@/sanity/lib/image'
import React from 'react'
import Link from 'next/link'
import StarIcon from './icons/StarIcon'

export default function TextWithImage(props: any) {
    return (
        <div className='w-full p-4 md:pt-24 md:px-24 md:pb-16 grid grid-cols-1 md:grid-cols-5 md:gap-20'>
            <div className='bg-gray-500 bg-cover rounded-xl w-full aspect-square md:col-span-2 hidden md:block' style={{backgroundImage: `url(${urlForImage(props.image)})`}} />
            <div className='space-y-4 md:space-y-9 col-span-3 p-4 w-full flex flex-col items-center md:block'>
                <h2 className='text-2xl md:text-4xl font-bold text-center md:text-left'>{props.heading}</h2>
                <div className='bg-gray-500 bg-cover rounded-xl w-full aspect-square md:col-span-2 md:hidden' style={{backgroundImage: `url(${urlForImage(props.image)})`}} />
                <p className='w-full'>{props.tagline}</p>
                <div className='grid grid-cols-2 gap-2 pb-6 md:pb-10 md:w-5/6'>
                    {props.benefitList && props.benefitList.map((item: any, index: number) => (
                        <div key={index} className='flex gap-2 text-sm md:text-base'>
                            <div className='w-6 h-6'>
                                <StarIcon />
                            </div>
                            {item}
                        </div>
                    ))}
                </div>
                <Link
                    href={'/contact'}
                    className='border-2 border-brand-purple text-brand-purple text-xl font-medium md:font-bold py-3 px-6 rounded-lg'
                >
                    Contact Me
                </Link>
            </div>
        </div>
    )
}

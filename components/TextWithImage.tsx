import { urlForImage } from '@/sanity/lib/image'
import React from 'react'
import Link from 'next/link'
import StarIcon from './icons/StarIcon'

export default function TextWithImage(props: any) {
    return (
        <div className='w-full pt-24 px-24 pb-16 grid grid-cols-5 gap-20'>
            <div className='bg-gray-500 bg-cover rounded-xl w-full aspect-square col-span-2' style={{backgroundImage: `url(${urlForImage(props.image)})`}} />
            <div className='space-y-9 col-span-3 p-4 w-full'>
                <h2 className='text-4xl font-bold'>{props.heading}</h2>
                <p className='w-full'>{props.tagline}</p>
                <div className='grid grid-cols-2 gap-2 pb-10 w-5/6'>
                    {props.benefitList && props.benefitList.map((item: any, index: number) => (
                        <div key={index} className='flex gap-2'>
                            <StarIcon />
                            {item}
                        </div>
                    ))}
                </div>
                <Link
                    href={'/contact'}
                    className='border-2 border-black text-xl font-bold py-3 px-6 rounded-lg'
                >
                    Contact Me
                </Link>
            </div>
        </div>
    )
}

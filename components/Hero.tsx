import React from 'react'
import PrimaryButton from './PrimaryButton'
import { urlForImage } from '@/sanity/lib/image'

export default function Hero(props: any) {
    return (
        <div className='w-full bg-brand-primary-bg p-4 md:pt-24 md:px-24 md:pb-16 grid grid-cols-1 md:grid-cols-5 gap-12'>
            <div className='space-y-4 md:space-y-9 md:col-span-3 p-4'>
                <h1 className='text-3xl md:text-5xl font-bold'>{props.heading}</h1>
                <div>
                    <p className='md:w-4/5'>
                        {props.tagline}
                    </p>
                </div>
                <div className='flex gap-4'>
                    {props.cta && (
                        <>
                            <PrimaryButton link={props.cta[0].link} text={props.cta[0].title} />
                            <PrimaryButton link={props.cta[1].link} text={props.cta[1].title} secondary />
                        </>
                    )}
                </div>
            </div>
            <div className='bg-gray-500 bg-cover rounded-xl w-full aspect-square md:col-span-2 hidden md:block' style={{backgroundImage: `url(${urlForImage(props.image)})`}} />
        </div>
    )
}

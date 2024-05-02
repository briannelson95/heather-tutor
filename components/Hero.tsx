import React from 'react'
import PrimaryButton from './PrimaryButton'
import { urlForImage } from '@/sanity/lib/image'

export default function Hero(props: any) {
    return (
        <div className='w-full bg-gray-300 pt-24 px-24 pb-16 grid grid-cols-5 gap-12'>
            <div className='space-y-9 col-span-3 p-4'>
                <h1 className='text-5xl font-bold'>{props.heading}</h1>
                <p className='w-4/5'>{props.tagline}</p>
                <div className='flex gap-4'>
                    {props.cta && (
                        <>
                            <PrimaryButton link={props.cta[0].link} text={props.cta[0].title} />
                            <PrimaryButton link={props.cta[1].link} text={props.cta[1].title} secondary />
                        </>
                    )}
                </div>
            </div>
            <div className='bg-gray-500 bg-cover rounded-xl w-full aspect-square col-span-2' style={{backgroundImage: `url(${urlForImage(props.image)})`}} />
        </div>
    )
}

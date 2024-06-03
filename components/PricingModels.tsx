import React from 'react'
import Link from 'next/link'

export default function PricingModels(props: any) {
    return (
        <div className='w-full p-4 md:pt-12 md:pb-28 md:px-24'>
            <div className='md:w-3/4 mx-auto flex flex-col items-center space-y-6'>
                <h2 className='text-2xl md:text-4xl font-bold'>{props.title}</h2>
                <p className='text-center max-w-3xl'>{props.pricingDesc}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 w-full place-items-center'>
                    {props.optionsArray && props.optionsArray.map((option: any) => (
                        <div key={option._key} className='w-full h-auto rounded-xl p-4 bg-brand-gray-blue flex flex-col justify-between max-w-sm'>
                            <div className='space-y-2 mb-4'>
                                <div className='flex items-center gap-2'>
                                    <div className='text-2xl' dangerouslySetInnerHTML={{ __html: option.optionIcon.svg }} />
                                    <h3 className='text-2xl font-semibold text-center'>{option.optionTitle}</h3>
                                </div>
                                <p className='text-sm text-gray-500'>{option.preface}</p>
                                <p className='text-4xl font-medium'>${option.optionPrice}<span className='text-xl font-normal'>/hour</span></p>
                                <p className='text-sm text-gray-600'>{option.optionDesc}</p>
                            </div>
                            <Link className='w-full text-xl py-3 px-6 rounded-lg border-2 bg-brand-secondary text-white font-medium hover:bg-brand-secondary-hover transition-colors duration-200 flex justify-center justify-self-end' href={'/contact'}>
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    )
}

import React from 'react'
import InstagramIcon from './icons/InstagramIcon'
import FacebookIcon from './icons/FacebookIcon'
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

type FooterProps = {
    image: any;
}

export default function Footer(props: FooterProps) {
    return (
        <footer className='py-6 px-16 border border-t'>
            <div className="grid grid-cols-5">
                <div className='space-y-2'>
                    <div className='flex gap-2 items-center'>
                        {props.image && (
                             <Image
                                src={urlForImage(props.image)}
                                height={100}
                                width={100}
                                alt='Weir Logo'
                                className='w-6 h-6 aspect-square'
                            />
                        )}
                       
                        {/* <h2 className='text-2xl font-bold'>Weir&apos;s Tutoring</h2> */}
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

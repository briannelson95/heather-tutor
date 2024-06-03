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
        <footer className='py-6 px-16 border border-t border-brand-gray-blue'>
            <div className="grid grid-cols-8">
                <div className='space-y-2'>
                    <div className='flex gap-2 items-center'>
                        {props.image && (
                             <Image
                                src={urlForImage(props.image)}
                                height={100}
                                width={100}
                                alt='Weir Logo'
                                className='w-10 h-10 aspect-square'
                            />
                        )}
                       
                        {/* <h2 className='text-md font-bold'>Ms. Weir&apos;s Tutoring</h2> */}
                    </div>
                    {/* <div className='space-y-2'>
                        <p className='font-medium'>Follow Me</p>
                        <div className='flex gap-2'>
                            <InstagramIcon />
                            <FacebookIcon />
                        </div>
                    </div> */}
                </div>
                <div>
                    <ul className='flex gap-10 items-center'>
                        <li>Home</li>
                        <li>About</li>
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

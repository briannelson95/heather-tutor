import { client } from '@/sanity/lib/client'
import { aboutQuery } from '@/sanity/lib/queries'
import React from 'react'
import { PortableText } from "@portabletext/react"
import { RichTextComponent } from '@/components/RichTextComponent'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

export default async function AboutPage() {
    const data = await client.fetch(aboutQuery)
    const body = data[0].pageBuilder.find((item: any) => item._type === 'textField').content;
    const image = data[0].pageBuilder.find((item: any) => item._type === 'mainImage');
    console.log(body)
    return (
        <main className='bg-gray-300 px-24 py-16 '>
            <section className='grid grid-cols-5'>
                <div className='col-span-3 pr-36'>
                    <h1 className='text-3xl font-bold'>Who am I?</h1>
                    <PortableText value={body} components={RichTextComponent} />
                </div>
                <div className='w-full aspect-square rounded-3xl bg-cover bg-center col-span-2' style={{ backgroundImage: `url(${urlForImage(image)})`}} />
                {/* <Image 
                    src={urlForImage(image)}
                    height={300}
                    width={300}
                    alt=''
                    className='h-full w-auto'
                /> */}
            </section>
        </main>
    )
}

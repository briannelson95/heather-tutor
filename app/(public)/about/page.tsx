import { client } from '@/sanity/lib/client'
import { aboutQuery } from '@/sanity/lib/queries'
import React from 'react'
import { PortableText } from "@portabletext/react"
import { RichTextComponent } from '@/components/RichTextComponent'
import { urlForImage } from '@/sanity/lib/image'

export default async function AboutPage() {
    const data = await client.fetch(aboutQuery)
    return (
        <main className='bg-brand-primary-bg p-4 md:px-24 md:py-16 '>
            <section className='md:grid grid-cols-5'>
                <div className='col-span-3 md:pr-36'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Who am I?</h1>
                    {/* <PortableText value={body} components={RichTextComponent} /> */}
                    Portable Text here
                </div>
            </section>
        </main>
    )
}

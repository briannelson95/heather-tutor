import { client } from '@/sanity/lib/client'
import { aboutQuery, settingsQuery } from '@/sanity/lib/queries'
import React from 'react'
import { PortableText } from "@portabletext/react"
import { RichTextComponent } from '@/components/RichTextComponent'
import { urlForImage } from '@/sanity/lib/image'
import { ResolvingMetadata, Metadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
  
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const siteData = await client.fetch(settingsQuery);
    const pageData = await client.fetch(aboutQuery);

    const siteTitle = siteData.seo.title ? siteData.seo.title : siteData.siteTitle;
    const separator = siteData.seo.separator ? ` ${siteData.seo.separator} ` : ' '
    const pageTitle = pageData.title;
    
    const title = pageTitle ? siteTitle + separator + pageTitle : siteTitle;
    
    return {
        title
    }
}

export default async function AboutPage() {
    const data = await client.fetch(aboutQuery)
    const body = data.pageBuilder.find((item: any) => item._type === 'textField').content;
    const image = data.pageBuilder.find((item: any) => item._type === 'mainImage');
    return (
        <main className='bg-gray-300 p-4 md:px-24 md:py-16' style={{ minHeight: 'calc(100vh - 280px)'}}>
            <section className='md:grid grid-cols-5'>
                <div className='col-span-3 md:pr-36'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Who am I?</h1>
                    <PortableText value={body} components={RichTextComponent} />
                </div>
                <div className='w-full aspect-square rounded-3xl bg-cover bg-center col-span-2' style={{ backgroundImage: `url(${urlForImage(image)})`}} />
            </section>
        </main>
    )
}

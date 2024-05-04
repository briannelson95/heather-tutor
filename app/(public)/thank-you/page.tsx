import { RichTextComponent } from '@/components/RichTextComponent';
import LeftArrow from '@/components/icons/LeftArrow';
import { client } from '@/sanity/lib/client'
import { thankYouQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import React from 'react'

export default async function ThankYouPage() {
    const pageData = await client.fetch(thankYouQuery);
    return (
        <main className='w-full p-4 md:pt-20 md:px-16 space-y-4' style={{ minHeight: 'calc(100vh - 280px)'}}>
            <h1 className='text-2xl md:text-4xl font-semibold md:font-bold'>{pageData.title}</h1>
            <PortableText value={pageData.body} components={RichTextComponent} />
            <Link href={'/'} className='underline flex gap-2 hover:text-blue-500 transition-all duration-200'>
                <LeftArrow /> Return to homepage
            </Link>
        </main>
    )
}

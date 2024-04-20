import Link from 'next/link'
import React from 'react'

export default function PrimaryButton({link, text, secondary}: {link: string; text: string; secondary?: boolean;}) {
    return (
        <Link
            href={link}
            className={`${secondary ? 'border-2 border-gray-500 text-inherit font-normal text-gray-500' : 'bg-gray-400 text-white font-bold hover:bg-gray-700 transition-colors duration-200'} text-xl py-3 px-6 rounded-lg`}
        >
            {text}
        </Link>
    )
}

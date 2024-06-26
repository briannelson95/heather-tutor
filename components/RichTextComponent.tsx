import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export const RichTextComponent: any = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className='relative w-full h-96 mt-6 mx-auto'>
                    <Image 
                        className='object-contain'
                        src={urlForImage(value)} 
                        alt={value.alt}
                        fill
                    />
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => {
            <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
        },
        number: ({ children }: any) => {
            <ol className='mt-lg list-decimal'>{children}</ol>
        },
    },
    block: {
        // Ex. 1: customizing common block types
        h1: ({children}: any) => <h1 className="text-2xl">{children}</h1>,
        h2: ({ children }: any) => <h2 className='text-4xl py-6 font-bold'>{children}</h2>,
        h3: ({ children }: any) => <h3 className='text-3xl py-6 font-bold'>{children}</h3>,
        h4: ({ children }: any) => <h4 className='text-2xl py-6 font-bold'>{children}</h4>,
        blockquote: ({ children }: any) => (
            <blockquote className='border-l-slate-500 border-l-4 pl-5 py-5 my-5'>
                {children}
            </blockquote>
        ),
        normal: ({children}: any) => <p className='my-2 w-full'>{children}</p>
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("")
                ? "noreferrer noopener"
                : undefined;
            
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-slate-800 text-purple-600 dark:text-purple-500"
                >
                    {children}
                </Link>
            )
        }
    }
}

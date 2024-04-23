import Navbar from '@/components/Navbar'
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon'
import Link from 'next/link'
 
export default function NotFound() {
    return (
        <main>
            <Navbar />
            <div className='bg-gray-300 min-h-screen px-16 py-6 space-y-2'>
                <h2 className='text-3xl font-bold'>Page Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/" className='flex gap-2 items-center hover:underline'>
                    <ChevronLeftIcon />
                    Return Home
                </Link>
            </div>
        </main>
    )
}
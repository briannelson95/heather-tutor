import Link from 'next/link'
import React from 'react'
import PrimaryButton from './PrimaryButton'
import SubjectCard from './SubjectCard'

export default function Gallery(props: any) {
    return (
        <div className='w-full bg-gray-300 pt-12 pb-28 px-16'>
            <div className='max-w-2xl mx-auto flex flex-col items-center space-y-6 text-center mb-12'>
                <h2 className='text-5xl font-bold'>My Subjects</h2>
                <p>{props.desc}</p>
                <PrimaryButton link='/#pricing' text='Book Now' />
            </div>
            <div className='grid grid-cols-4 gap-9'>
                {props.subjectList && props.subjectList.map((item: any, index: number) => (
                    <SubjectCard key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

import React from 'react'

export default function SubjectCard(props: any) {
    return (
        <div className='rounded-xl bg-white flex flex-col items-center space-y-4 py-6 px-4'>
            <div className='bg-brand-accent rounded-full w-11 aspect-square text-white flex justify-center items-center'>
                <div className='text-xl' dangerouslySetInnerHTML={{ __html: props.icon.svg }} />
            </div>
            <h3 className='text-xl md:text-2xl font-semibold md:font-bold'>{props.title}</h3>
            <p className='text-center text-sm md:text-base'>{props.desc}</p>
        </div>
    )
}

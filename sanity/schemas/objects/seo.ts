import { defineArrayMember, defineField, defineType } from "sanity";

export const seo = defineType({
    title: 'SEO',
    name: 'seo',
    type: 'object',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'separator',
            type: 'string',
            options: {
                list: [
                    {title: '-', value: '-'},
                    {title: '|', value: '|'},
                    {title: '[space]', value: ' '},
                    {title: '>', value: '>'}
                ]   
            }
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'text'
        }) ,
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'keywords',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'string',
                })
            ]
        })
    ],
})
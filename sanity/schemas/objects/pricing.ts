import { defineField, defineType } from "sanity";

export const pricing = defineType({
    title: 'pricing',
    name: 'Pricing',
    type: 'object',
    fields: [
        defineField({
            title: 'title',
            name: 'Title',
            type: 'string',
        }),
        
    ],
})
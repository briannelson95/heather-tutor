import { defineArrayMember, defineField, defineType } from "sanity";

export const cta= defineType({
    name: 'cta',
    title: 'Call to Action',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'link',
            type: 'url',
        })
    ],
});
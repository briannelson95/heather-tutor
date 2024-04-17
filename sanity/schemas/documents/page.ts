import { defineField, defineType } from "sanity";

export const page = defineType({
    title: 'Pages',
    name: 'page',
    type: 'document',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        }),
        defineField({
            name: 'body',
            type: 'blockContent'
        }),
    ],
});
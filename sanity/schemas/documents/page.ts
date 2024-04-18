import { defineArrayMember, defineField, defineType } from "sanity";

export const page = defineType({
    title: 'Pages',
    name: 'page',
    type: 'document',
    fieldsets: [
        {
            name: 'info',
            title: 'Page Info'
        }
    ],
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            fieldset: 'info',
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            fieldset: 'info',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        })
    ],
});
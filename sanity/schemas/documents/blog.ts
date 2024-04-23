import { defineField, defineType } from "sanity";
import {EditIcon} from '@sanity/icons'

export const blog = defineType({
    title: 'Blogs',
    name: 'blog',
    type: 'document',
    icon: EditIcon,
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'body',
            type: 'blockContent'
        })
    ],
})
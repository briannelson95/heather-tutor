import { defineArrayMember, defineField, defineType } from "sanity";
import {DocumentTextIcon} from '@sanity/icons'

export const hero = defineType({
    name: 'hero',
    type: 'object',
    fields: [
        defineField({
            title: 'Heading',
            name: 'heading',
            type: 'string',
        }),
        defineField({
            title: 'Tagline',
            name: 'tagline',
            type: 'string',
        }),
        defineField({
            name: 'cta',
            title: 'Call to Action',
            type: 'array',
            of: [
                defineArrayMember({
                    name: 'button',
                    type: 'cta'
                })
            ],
            validation: Rule => Rule.max(2)
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string'
                })
            ]
        }),
    ],
    icon: DocumentTextIcon,
    preview: {
        select: {
          title: 'heading',
          image: 'image',
        },
        prepare({title, image}) {
          return {
            title: title || 'Untitled',
            subtitle: 'Hero',
            media: image || DocumentTextIcon,
          }
        },
    },
});
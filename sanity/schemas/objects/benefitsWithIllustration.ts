import { defineArrayMember, defineField, defineType } from "sanity";
import {BarChartIcon} from '@sanity/icons'

export const benefitsWithIllustration = defineType({
    title: 'Benefits with Illustration',
    name: 'benefits',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'tagline',
            type: 'string',
        }),
        defineField({
            name: 'benefitList',
            title: 'List of Benefits',
            type: 'array',
            of: [
                defineArrayMember({
                    name: 'benefit',
                    type: 'string',
                    // validation: Rule => Rule.max(20)
                })
            ],
            // validation: Rule => Rule.max(4)
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
        })
    ],
    icon: BarChartIcon,
    preview: {
        select: {
          title: 'heading',
          image: 'image',
        },
        prepare({title, image}) {
          return {
            title: title || 'Untitled',
            subtitle: 'Benefits',
            media: image || BarChartIcon,
          }
        },
    },
});
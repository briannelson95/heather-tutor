import { defineArrayMember, defineField, defineType } from "sanity";
import {BookIcon} from '@sanity/icons'

export const subjectGallery = defineType({
    title: 'Subject Gallery',
    name: 'subjectGallery',
    type: 'object',
    fields: [
        defineField({
            title: 'Description',
            name: 'desc',
            type: 'string',
        }),
        defineField({
            name: 'subjectList',
            title: 'List of Subjects',
            type: 'array',
            of: [
                defineArrayMember({
                    name: 'subject',
                    type: 'reference',
                    to: [{type: 'subject'}]
                })
            ],
            validation: Rule => Rule.max(4)
        })
    ],
    icon: BookIcon,
    preview: {
        prepare() {
          return {
            title: 'Subjects',
            subtitle: 'Subject Gallery',
            media: BookIcon,
          }
        },
    },
});
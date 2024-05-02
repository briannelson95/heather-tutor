import { defineArrayMember, defineField, defineType } from "sanity";
import {BlockContentIcon} from '@sanity/icons'

export const pageBuilder = defineType({
    title: 'Page Builder',
    name: 'pageBuilder',
    type: 'array',
    of: [
        defineArrayMember({
            name: 'hero',
            type: 'hero'
        }),
        defineArrayMember({
            name: 'benefitsSection',
            title: 'Benefits Section',
            type: 'benefits'
        }),
        defineArrayMember({
            name: 'subjectGallery',
            type: 'subjectGallery'
        }),
        defineArrayMember({
            name: 'textField',
            title: 'Text Field',
            type: 'object',
            fields: [
                defineField({
                    name: 'content',
                    type: 'blockContent'
                })
            ],
            icon: BlockContentIcon
        }),
        defineArrayMember({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
    ]
})
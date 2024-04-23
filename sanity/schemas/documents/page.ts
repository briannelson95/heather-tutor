import { defineArrayMember, defineField, defineType } from "sanity";
import {DocumentsIcon} from '@sanity/icons'

export const page = defineType({
    title: 'Pages',
    name: 'page',
    type: 'document',
    icon: DocumentsIcon,
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
            name: 'pageBuilder',
            title: 'Page Builder',
            type: 'pageBuilder'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        })
    ],
});
import { defineField, defineType } from "sanity";
import { preview } from 'sanity-plugin-icon-picker';
import {ProjectsIcon} from '@sanity/icons'

export const subject = defineType({
    title: 'Subjects',
    name: 'subject',
    type: 'document',
    icon: ProjectsIcon,
    fieldsets: [
        {
            name: 'info', 
            options: {
                columns: 2,
            }
        }
    ],
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            fieldset: 'info'
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            title: "Icon",
            name: "icon",
            type: "iconPicker",
            options: {
                outputFormat: 'react',
                storeSvg: true,
            },
            fieldset: 'info'
        }),
    ],
    preview: {
        select: {
            provider: "icon.provider",
            name: "icon.name",
            title: 'title'
        },
        prepare(icon) {
            return {
                title: icon.title || 'Untitled',
                media: preview(icon),
            };
        },
      }
});
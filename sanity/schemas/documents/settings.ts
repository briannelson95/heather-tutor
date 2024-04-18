import { defineField, defineType } from "sanity";

export const settings = defineType({
    title: 'Settings',
    name: 'settings',
    type: 'document',
    fields: [
        defineField({
            title: 'Site Title',
            name: 'site',
            type: 'string',
        }),
        
    ],
})
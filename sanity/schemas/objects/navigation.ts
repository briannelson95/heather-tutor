import { defineArrayMember, defineField, defineType } from "sanity";

export const navigation = defineType({
    title: 'Navigation',
    name: 'navigation',
    type: 'array',
    of: [
        defineArrayMember({
            title: 'navItem',
            name: 'Nav Item',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    type: 'string'
                }),
                defineField({
                    name: 'link',
                    type: 'reference',
                    to: [
                        {type: 'page'}
                    ]
                })
            ]
        }),
    ],
})
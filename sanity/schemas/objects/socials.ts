import { defineArrayMember, defineField, defineType } from "sanity";

export const socials = defineType({
    title: 'Socials',
    name: 'socials',
    type: 'array',
    of: [
        defineArrayMember({
            title: 'Social Link',
            name: 'socialItem',
            type: 'object',
            options: {
                columns: 2
            },
            fields: [
                defineField({
                    name: 'socialMedia',
                    title: 'Social Media',
                    type: 'string',
                    options:{
                        list: [
                            {
                                title: 'Facebook',
                                value: 'facebook',
                            },
                            {
                                title: 'Instagram',
                                value: 'instagram',
                            },
                            {
                                title: 'Twitter/X',
                                value: 'twitter',
                            },
                            {
                                title: 'Youtube',
                                value: 'youtube',
                            },
                            {
                                title: 'LinkedIn',
                                value: 'linkedin',
                            },
                            {
                                title: 'TikTok',
                                value: 'tiktok',
                            }
                        ]
                    }
                }),
                defineField({
                    name: 'url',
                    title: 'Social Link',
                    type: 'url'
                })
            ]
        }),
        
    ],
})
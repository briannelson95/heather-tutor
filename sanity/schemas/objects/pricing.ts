import { defineArrayMember, defineField, defineType } from "sanity";

export const pricing = defineType({
    title: 'Pricing',
    name: 'pricing',
    type: 'object',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'pricingDesc',
            title: 'Description',
            type: 'string'
        }),
        defineField({
            name: 'optionsArray',
            title: 'Options',
            type: 'array',
            of: [
                defineArrayMember({
                    name: 'option',
                    title: 'Option',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'optionTitle',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'optionIcon',
                            title: 'Icon',
                            type: 'iconPicker',
                            options: {
                                outputFormat: 'react',
                                storeSvg: true,
                            },
                        }),
                        defineField({
                            name: 'preface',
                            title: 'Preface',
                            type: 'string',
                        }),
                        defineField({
                            name: 'optionPrice',
                            title: 'Price',
                            type: 'number'
                        }),
                        defineField({
                            name: 'optionDesc',
                            title: 'Description',
                            type: 'text'
                        }),
                    ]
                })
            ]
        })
    ],
})
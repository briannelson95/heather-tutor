import MoneyFilledIcon from "@/components/icons/MoneyFilledIcon";
import { defineArrayMember, defineField, defineType } from "sanity";

export const homepage = defineType({
    title: 'Homepage',
    name: 'homepage',
    type: 'document',
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
                    name: 'pricing',
                    title: 'Pricing',
                    type: 'pricing',
                    icon: MoneyFilledIcon,
                })
            ]
        })
    ],
});
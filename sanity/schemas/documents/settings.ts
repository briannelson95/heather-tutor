import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const settings = defineType({
    title: 'Settings',
    name: 'settings',
    type: 'document',
    icon: CogIcon,
    fields: [
        defineField({
            title: 'Site Title',
            name: 'siteTitle',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            type: 'image'
        }),
        defineField({
            name: 'favicon',
            type: 'file'
        }),
        defineField({
            name: 'navigation',
            type: 'navigation'
        }),
        defineField({
            name: 'socials',
            type: 'socials'
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        })
    ],
    preview: {
        prepare({ icon, siteTitle }: any) {
            return {
                title: siteTitle,
                media: icon
            }
          }        
    }
})
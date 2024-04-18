// @ts-nocheck
import {HomeIcon, CogIcon} from '@sanity/icons'
export const structure = (S) =>
    S.list()
        .title('Content')
        .items([
            S.documentListItem()
                .id('homepage')
                .title("Homepage")
                .icon(HomeIcon)
                .schemaType('homepage'),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem) => !['settings', 'homepage',].includes(listItem.getId())
            ),
            S.divider(),
            S.documentListItem()
                .id('settings')
                .title("Site Settings")
                .icon(CogIcon)
                .schemaType('settings')
        ])
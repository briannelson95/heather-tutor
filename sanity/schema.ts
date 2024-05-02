import { type SchemaTypeDefinition } from 'sanity'
import { page } from './schemas/documents/page'
import { blockContent } from './schemas/objects/blockContent'
import { hero } from './schemas/objects/hero'
import { cta } from './schemas/objects/cta'
import { benefitsWithIllustration } from './schemas/objects/benefitsWithIllustration'
import { subject } from './schemas/documents/subject'
import { subjectGallery } from './schemas/objects/subjectGallery'
import { homepage } from './schemas/documents/homepage'
import { settings } from './schemas/documents/settings'
import { seo } from './schemas/objects/seo'
import { blog } from './schemas/documents/blog'
import { pageBuilder } from './schemas/objects/pageBuilder'
import { pricing } from './schemas/objects/pricing'
import { navigation } from './schemas/objects/navigation'
import { socials } from './schemas/objects/socials'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    homepage,
    subject,
    settings,
    blog,
    // objects
    blockContent,
    hero,
    cta,
    benefitsWithIllustration,
    subjectGallery,
    seo,
    pageBuilder,
    pricing,
    navigation,
    socials,
  ],
}

import { type SchemaTypeDefinition } from 'sanity'
import { page } from './schemas/documents/page'
import { blockContent } from './schemas/objects/blockContent'
import { hero } from './schemas/objects/hero'
import { cta } from './schemas/objects/cta'
import { benefitsWithIllustration } from './schemas/objects/benefitsWithIllustration'
import { subject } from './schemas/documents/subject'
import { subjectGallery } from './schemas/objects/subjectGallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    subject,
    // objects
    blockContent,
    hero,
    cta,
    benefitsWithIllustration,
    subjectGallery,
  ],
}

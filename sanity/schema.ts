import { type SchemaTypeDefinition } from 'sanity'
import { page } from './schemas/documents/page'
import { blockContent } from './schemas/objects/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    // objects
    blockContent
  ],
}

import { type SchemaTypeDefinition } from 'sanity'
import ContactSchema from './contact'
import OrderSchema from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ContactSchema, OrderSchema],
}

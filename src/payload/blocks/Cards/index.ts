import type { Block, Field } from 'payload/types'
import link from '../../fields/link'
import richText from '../../fields/richText'

const columnFields: Field[] = [
  richText(),
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
]

export const Cards: Block = {
  slug: 'cardCollection',
  fields: [
    {
      name: 'cards',
      type: 'array',
      fields: columnFields,
    },
  ],
}

import { LINK_FIELDS } from './link'
import { MEDIA } from './media'


export const CONTENT = `
...on Content {
  blockType
  columns {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  position
  ${MEDIA}
}
`

export const CARD_COLLECTION_BLOCK = `
...on CardCollection {
  blockType
  cards {
   richText
    enableLink
    link ${LINK_FIELDS()}
  }
}
`



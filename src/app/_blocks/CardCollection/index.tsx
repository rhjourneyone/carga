import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'cardCollection' }>

export const CardCollectionBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { cards } = props

  return (
    <Gutter className={classes.content}>
      <div className={classes.flex}>
        {cards &&
          cards.length > 0 &&
          cards.map((col, index) => {
            const { enableLink, richText, link } = col

            return (
              <div key={index} className={classes.card}>
                <RichText content={richText} />
                {enableLink && <CMSLink className={classes.link} {...link} />}
              </div>
            )
          })}
      </div>
    </Gutter>
  )
}

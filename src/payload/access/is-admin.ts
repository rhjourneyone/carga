import type { AccessArgs } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'
import type { User } from '../payload-types'

type isAdminType = (args: AccessArgs<unknown, User>) => boolean

export const isAdmin: isAdminType = ({ req: { user } }) => {
  return checkRole(['admin'], user)
}

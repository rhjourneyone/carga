import type { Access } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'

export const isAdminsOrIsPagePublished: Access = ({ req: { user } }) => {
  if (user && checkRole(['admin'], user)) {
    return true
  }

  return {
    _status: {
      equals: 'published',
    },
  }
}

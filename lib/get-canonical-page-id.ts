import { ExtendedRecordMap } from 'notion-types'
import {
  getCanonicalPageId as getCanonicalPageIdImpl,
  parsePageId
} from 'notion-utils'

import { inversePageUrlOverrides } from './config'

export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null {
  const cleanPageId = parsePageId(pageId, { uuid: false })
  if (!cleanPageId) {
    return null
  }

  const override = inversePageUrlOverrides[cleanPageId]
  if (override) {
    return override
  } else {
    const pageIdFull = getCanonicalPageIdImpl(pageId, recordMap, {
      uuid
    });
    const pageIdFullArr = pageIdFull.split('-');
    const uuidString = pageIdFullArr.slice(-1).join('');
    const slug = pageIdFullArr.slice(0, -1).join('');
    if (/^[a-zA-Z0-9-_]+$/.test(slug)) {
      return slug;
    } else {
      return uuidString;
    }
  }
}

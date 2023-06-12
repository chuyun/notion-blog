import { notion } from '@/lib/notion-api';
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPagesInSpace, getBlockTitle, parsePageId } from 'notion-utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'method not allowed' })
  }

  const pageId: string = parsePageId(req.body.pageId)
  if (!pageId) {
    throw new Error('Invalid notion page id')
  }
  const recordMap = await notion.getPage(pageId);
  const all = await getAllPagesInSpace(
    pageId,
    'fead1abe-2981-4ec1-8fb2-697f4d979416',
    notion.getPage,
  )
  const keys = Object.keys(recordMap?.block || {})
  const block = recordMap?.block?.[keys[0]]?.value

  if (!block) {
    throw new Error('Invalid recordMap for page')
  }

  // const blockSpaceId = block.space_id;

  const navList = [];

  Object.keys(recordMap?.block || {})
    .forEach((key) => {
      const item = recordMap.block[key];
      const value = item.value;
      const title = getBlockTitle(value, recordMap)
      if (
        value.type === 'page' &&
        // value.parent_table !== 'space' &&
        title.toLowerCase() !== 'wiki'
      ) {
        navList.push({
          title,
          type: value.type,
          id: value.id,
          parent_id: value.parent_id,
          parent_table: value.parent_table,
          content: value.content,
          format: value.format
        })
      }
    })


  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, max-age=3600, stale-while-revalidate=3600'
  )
  res.status(200).json({
    ...recordMap,
    navList: navList,
    all,
  })
}

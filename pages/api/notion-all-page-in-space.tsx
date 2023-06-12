import { notion } from '@/lib/notion-api';
import { getAllPagesInSpace } from 'notion-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { parsePageId } from 'notion-utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'method not allowed' })
  }

  const pageId: string = parsePageId(req.body.pageId)
  if (!pageId) {
    throw new Error('Invalid notion page id')
  }
  const recordMap = await getAllPagesInSpace(
    pageId,
    'fead1abe-2981-4ec1-8fb2-697f4d979416',
    notion.getPage,
  )
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, max-age=3600, stale-while-revalidate=3600'
  )
  res.status(200).json(recordMap)
}

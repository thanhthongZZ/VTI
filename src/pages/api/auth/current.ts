import type { NextApiRequest, NextApiResponse } from 'next';

import serverAuth from '@/lib/severAuth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    const { currentUSer } = await serverAuth(req);

    return res.status(200).json(currentUSer);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}

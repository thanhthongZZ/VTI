import type { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

import prismadb from '@/lib/prismadb';

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }

  const currentUSer = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUSer) {
    throw new Error('Not signed in');
  }

  return { currentUSer };
};

export default serverAuth;

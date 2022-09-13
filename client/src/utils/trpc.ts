import { createTRPCReact } from '@trpc/react';
// eslint-disable-next-line import/no-relative-packages
import { AppRouter } from '../../../server/src/router';

export const trpc = createTRPCReact<AppRouter>();

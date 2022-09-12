import * as trpc from '@trpc/server';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext = ({
  req,
}: trpcExpress.CreateExpressContextOptions) => {
  const getAuthorization = () => {
    return req.headers.authorization || '';
  };

  return {
    authorization: getAuthorization(),
  };
};
type Context = trpc.inferAsyncReturnType<typeof createContext>;

const createRouter = () => {
  return trpc.router<Context>();
};

export const appRouter = createRouter()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input, ctx }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
        authorization: `token is ${ctx.authorization}`,
      };
    },
  })
  .mutation('mutation', {
    input: z.object({
      text: z.string(),
    }),
    resolve() {
      return {};
    },
  });

export type AppRouter = typeof appRouter;

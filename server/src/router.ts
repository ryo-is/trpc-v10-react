import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';

export const createContext =
  ({}: trpcExpress.CreateExpressContextOptions) => ({});
type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((req) => {
    return {
      id: req.input,
      name: 'John',
    };
  }),
  createUser: t.procedure
    .input(z.object({ name: z.string(), age: z.number() }))
    .mutation(async (req) => {
      await new Promise(() => {
        return;
      });
      return {
        id: 'id',
        name: req.input.name,
        age: req.input.age,
      };
    }),
});

export type AppRouter = typeof appRouter;

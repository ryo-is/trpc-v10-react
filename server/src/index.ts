import express from 'express';
import cors from 'cors';
import { appRouter, createContext } from './router';
import * as trpcExpress from '@trpc/server/adapters/express';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3001;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get('/', (_req, res) => res.send('hello'));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

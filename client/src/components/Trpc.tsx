import { FC } from 'react';
import { trpc } from '../utils/trpc';

export const Trpc: FC = () => {
  const user = trpc.getUser.useQuery('uuid-uuid');

  if (!user.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>{user.data.id}</div>
      <div>{user.data.name}</div>
    </div>
  );
};

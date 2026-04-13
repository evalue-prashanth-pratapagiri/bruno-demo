import { users, nextId, incrementNextId } from './types.js';

export const resolvers = {
  Query: {
    users: () => Array.from(users.values()),

    user: (_: unknown, args: { id: string }) =>
      users.get(args.id) ?? null,
  },

  Mutation: {
    createUser: (_: unknown, args: { name: string; email: string }) => {
      const id = String(nextId);
      incrementNextId();
      const user = { id, name: args.name, email: args.email };
      users.set(id, user);
      return user;
    },

    updateUser: (
      _: unknown,
      args: { id: string; name?: string; email?: string }
    ) => {
      const existing = users.get(args.id);
      if (!existing) return null;
      const updated = {
        ...existing,
        ...(args.name  !== undefined && { name: args.name }),
        ...(args.email !== undefined && { email: args.email }),
      };
      users.set(args.id, updated);
      return updated;
    },

    deleteUser: (_: unknown, args: { id: string }) =>
      users.delete(args.id),
  },
};

export interface User {
  id: string;
  name: string;
  email: string;
}

// In-memory store — seeded so read-only tests work immediately
export const users = new Map<string, User>([
  ['1', { id: '1', name: 'Alice Nguyen', email: 'alice@example.com' }],
  ['2', { id: '2', name: 'Bob Patel', email: 'bob@example.com' }],
]);

export let nextId = 3;
export const incrementNextId = () => { nextId++; };

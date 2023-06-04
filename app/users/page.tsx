import getAllUsers from '@/lib/getAllUsers';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
export const metadata: Metadata = {
  title: 'users',
};
export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import UserPosts from './components/UserPosts';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user) {
    return {
      title: 'User Not Found!',
    };
  }

  return {
    title: user.name,
    description: `the page of ${user.name}`,
  };
}
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const postsData: Promise<Post[]> = getUserPosts(userId);
  const user: User = await userData;
  if (!user) notFound;
  return (
    <div>
      <h2>{user?.name}</h2>
      <Suspense fallback={<h2>Loading ...</h2>}>
        {/* @ts-expect-error server component */}
        <UserPosts postsData={postsData} />
      </Suspense>
    </div>
  );
}
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => ({
    //params always should be strings
    userId: user.id.toString(),
  }));
}

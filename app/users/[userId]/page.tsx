import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import UserPosts from './components/UserPosts';
import { Suspense } from 'react';
import type { Metadata } from 'next';

type Params = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {}
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const postsData: Promise<Post[]> = getUserPosts(userId);
  const user: User = await userData;

  return (
    <div>
      <h2>{user.name}</h2>
      <Suspense fallback={<h2>Loading ...</h2>}>
        {/* @ts-expect-error server component */}
        <UserPosts postsData={postsData} />
      </Suspense>
    </div>
  );
}

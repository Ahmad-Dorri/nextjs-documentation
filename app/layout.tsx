import { ReactNode } from 'react';
import Providers from '@/store/Providers';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'nextjs',
  description: 'a site created with nextjs',
};

const RootLayout = (props: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;

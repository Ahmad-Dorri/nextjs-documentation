import { ReactNode } from 'react';
import Providers from '@/store/Providers';
export const metadata = {
  title: 'nextjs',
  description: 'a site created with nextjs',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;

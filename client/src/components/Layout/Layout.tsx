import { FC } from 'react';
import { Roboto } from 'next/font/google';

import Header from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-main: ${roboto.style.fontFamily};
        }
      `}</style>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;

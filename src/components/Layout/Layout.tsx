import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

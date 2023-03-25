import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex justify-center min-h-screen bg-slate-200 bg-gradient-to-br from-white dark:bg-slate-800 dark:from-black">
      {children}
    </div>
  );
};

export default Layout;

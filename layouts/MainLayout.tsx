interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <main className="max-w-screen-xl min-h-screen p-4 mx-auto">{children}</main>
);

export default MainLayout;

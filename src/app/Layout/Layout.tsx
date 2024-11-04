import Header from "./Header/Header";
interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;

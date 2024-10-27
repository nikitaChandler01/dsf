import "./Layout.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <div className="layout-root">{children}</div>;
};

export default Layout;

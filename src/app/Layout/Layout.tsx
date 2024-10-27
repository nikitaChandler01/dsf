import "./Layout.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="layout-root">
      {children}
      123213
    </div>
  );
};

export default Layout;

import Footer from '../common/Footer';
import Headers from '../common/Headers';

interface LayoutProps {
  children: React.ReactNode; // React에서 사용할 수있는 모든 렌더링 가능한 요소를 포괄
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <Headers />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

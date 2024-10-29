import { Pages } from '@constants';
import { getAccessToken } from '@/shared/utils';
import { Link, Outlet } from 'react-router-dom';
import { Header } from '@/widgets';

const MainLayout = () => {
  const isAuth = !!getAccessToken();
  return (
    <main className="flex size-full">
      {isAuth ? (
        <>
          <div className="w-full flex-1 overflow-hidden">
            <Header />
            <div className="p-6">
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        <main className="flex w-full items-center justify-center text-2xl font-bold h-dvh gap-2">
          <span>It's seams you are not auth, please</span>
          <Link to={Pages.SignIn} className="text-blue-500">
            auth
          </Link>
        </main>
      )}
    </main>
  );
};

export default MainLayout;

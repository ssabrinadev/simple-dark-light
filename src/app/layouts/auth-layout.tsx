import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '@/widgets';
import { getAccessToken } from '@/shared/utils';
import { useEffect } from 'react';

const AuthLayout = () => {
  const isAuth = !!getAccessToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
  return (
    <main className="h-full bg-hero-pattern bg-cover bg-center">
      <Header />
      <Outlet />
    </main>
  );
};

export default AuthLayout;

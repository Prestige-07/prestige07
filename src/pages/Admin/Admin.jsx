import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Sidebar } from 'components/AdminPage/Sidebar/Sidebar';
import { AdminContainer } from 'components/Global/Global.styled';
import { Loading } from 'components/Loading/Loading';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getCurrentUser } from 'redux/auth/authOperations';
import { MobileAdminMenu } from 'components/AdminPage/MobileAdminMenu/MobileAdminMenu';

const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const LocalStoreToken = localStorage.getItem('persist:auth');
    if (LocalStoreToken) {
      dispatch(getCurrentUser())
        .then(() => {
          setIsLoading(false);
        })
        .catch(error => {
          alert('Error refreshing token:', error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate('/login');
    }
  }, [isLoading, isLoggedIn, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ display: 'flex' }}>
      <MobileAdminMenu />
      <Sidebar />
      <AdminContainer>
        <Outlet />
      </AdminContainer>
    </div>
  );
};

export default Admin;

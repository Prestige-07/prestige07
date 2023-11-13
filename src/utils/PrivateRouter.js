import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getCurrentUser } from 'redux/auth/authOperations';

import { Loading } from 'components/Loading/Loading';

export const PrivateRoute = ({ component }) => {
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const LocalStoreToken = localStorage.getItem('persist:auth');
    if (LocalStoreToken) {
      dispatch(getCurrentUser())
        .then(() => {
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return isLoggedIn ? component : <Navigate to="/login" />;
};

// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import {
//   selectIsLoggedIn,
//   selectIsAuthLoading,
// } from 'redux/auth/authSelectors';

// export const PrivateRoute = ({ component: Component }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isLoading = useSelector(selectIsAuthLoading);
//   const shouldRedirect = !isLoggedIn && !isLoading;

//   return shouldRedirect ? <Navigate to="/login" /> : Component;
//   //   return !isLoggedIn ? <Navigate to="/login" /> : Component;
// };

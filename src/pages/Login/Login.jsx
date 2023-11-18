import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginWrapper, Label, Form, Input, HiddenBtn } from './Login.styled';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { MainButton } from 'components/Global/Global.styled';

import { getCurrentUser, login } from 'redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const LoginPage = () => {
  const [isHiddenPass, setHiddenPass] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const LocalStoreToken = localStorage.getItem('persist:auth');
    if (LocalStoreToken) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/admin');
    }
  }, [isLoggedIn, navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(login(values));
    },
  });

  return (
    <LoginWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          <Input
            required
            type="text"
            id="email"
            name="email"
            label="Електронна пошта"
            value={formik.values.email}
            onChange={formik.handleChange}
            variant="standard"
          />
        </Label>
        <Label>
          <Input
            required
            type={isHiddenPass ? 'password' : 'text'}
            id="password"
            name="password"
            label="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            variant="standard"
          />
          <HiddenBtn type="button" onClick={() => setHiddenPass(!isHiddenPass)}>
            {isHiddenPass ? <FiEye /> : <FiEyeOff />}
          </HiddenBtn>
        </Label>
        <MainButton type="submit" color="var(--black-color)">
          Увійти
        </MainButton>
      </Form>
    </LoginWrapper>
  );
};

export default LoginPage;

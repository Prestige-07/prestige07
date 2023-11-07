import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginWrapper, Label, Form, Input, HiddenBtn } from './Login.styled';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { MainButton } from 'components/Global/Global.styled';

import { login } from 'redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const LoginPage = () => {
  const [isHiddenPass, setHiddenPass] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/admin');
    }
  }, [isLoggedIn, navigate]);

  const validationSchema = yup.object().shape({
    email: yup
      .string('Введіть ел.пошту')
      .email('Некоректна ел.пошта')
      .required('Введіть ел.пошту'),
    password: yup
      .string('Введіть пароль')
      .min(8, 'Пароль повинен мати не менше 8 символів')
      .required('Введіть пароль'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
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
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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

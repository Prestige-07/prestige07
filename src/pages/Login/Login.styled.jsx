import styled from '@emotion/styled';
import { TextField } from '@mui/material';
//  import { FiEye, FiEyeOff } from 'react-icons/fi';

export const LoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 30px;
  padding: 50px;
  width: 400px;
  color: black;
  background-color: white;
  border-radius: 12px;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const HiddenBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translate(0, 20%);
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

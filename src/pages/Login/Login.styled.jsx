import styled from '@emotion/styled';
import { TextField } from '@mui/material';

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
  position: relative;
  width: 100%;
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const HiddenBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

import styled from '@emotion/styled';
import { Select, TextField, Checkbox, MenuItem } from '@mui/material';

export const Title = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  color: black;
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
  color: black;
`;

export const Label = styled.label`
  width: 100%;
  max-width: 100%;
  color: var(--label-color);
  font-size: 12px;
`;

export const LabelText = styled.p`
  margin-bottom: 4px;
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const FormSelect = styled(Select)`
  width: 100%;
`;

export const SelectOption = styled(MenuItem)``;

export const FormCheckbox = styled(Checkbox)``;

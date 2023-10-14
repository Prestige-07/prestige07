import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 30px;
  padding: 25px;
  margin-bottom: 40px;
  color: var(--black-color);
  background-color: var(--white-color);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DateLabel = styled.label``;

export const Input = styled(TextField)`
  width: 100%;
`;

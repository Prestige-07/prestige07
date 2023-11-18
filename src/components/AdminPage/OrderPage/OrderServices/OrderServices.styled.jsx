import styled from '@emotion/styled';
import { FiTrash2 } from 'react-icons/fi';

export const ServicesContainer = styled.div`
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--white-color);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const PartTitle = styled.h3`
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const AddServices = styled.div`
  position: relative;
  display: inline-block;
  margin-left: auto;
  opacity: 0.7;
  transition: opacity var(--transition);

  &:hover {
    opacity: 1;
  }
`;

export const AddServicesButton = styled.div`
  position: relative;
  display: inline-block;
  padding: 10px;
  background-color: #007bff;
  color: var(--black-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ServicesSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

// Табличка з послугами

export const TableWrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
  border-radius: 8px;
`;

export const Table = styled.table`
  width: 100%;
  min-height: 90px;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: var(--table-background);
  color: black;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TableHead = styled.thead`
  background-color: var(--table-head);
  color: #fff;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: var(--table-row);
  }
`;

export const TableHeader = styled.th`
  padding: 10px;
  width: max-content;
`;

export const TableNameHeader = styled.th`
  padding: 10px;
  width: 60%;
`;

export const TableData = styled.td`
  padding: 10px;
`;

export const AmountInput = styled.input`
  width: 50px;
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity var(--transition);

  &:hover {
    opacity: 1;
  }
`;

export const DeleteIcon = styled(FiTrash2)`
  width: 25px;
  height: 25px;
  color: red;
`;

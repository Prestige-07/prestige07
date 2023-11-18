import styled from '@emotion/styled';
import { FiDownload } from 'react-icons/fi';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
`;

export const TableWrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
  border-radius: 8px;
`;

export const TableThumb = styled.div`
  flex-basis: calc(50% - 10px);
  margin-top: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: var(--table-background);
  color: black;
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
`;

export const TableData = styled.td`
  padding: 10px;
`;

export const TableCellServices = styled.td`
  padding: 10px;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    padding: 5px 0;
  }
`;

export const DownloadBtn = styled.button`
  margin-left: auto;
  width: 50px;
  height: 50px;
  background-color: var(--white-color);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;

  transition: opacity var(--transition);
  &:hover {
    opacity: 1;
  }
`;

export const DownloadIcon = styled(FiDownload)`
  width: 30px;
  height: 30px;
  color: var(--download-color);
`;

import ExcelJS from 'exceljs';
import { useSelector } from 'react-redux';

import {
  selectOrders,
  selectEmployees,
  selectPayments,
} from 'redux/reporting/reportingSelectors';

import { formatedDate } from 'utils/formatedDate';

import {
  TableContainer,
  TableThumb,
  FlexContainer,
  Title,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
  TableCellServices,
  DownloadBtn,
  DownloadIcon,
} from './ReportTable.styled';

export const ReportingTable = () => {
  const orders = useSelector(selectOrders);
  const employees = useSelector(selectEmployees);
  const payments = useSelector(selectPayments);

  const handleDownloadReport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheetOrders = workbook.addWorksheet('Виконані замовлення');
    const worksheetEmployeesPayments = workbook.addWorksheet(
      'Виплата працівникам'
    );
    const worksheetPayments = workbook.addWorksheet('Дані про платежі');

    worksheetOrders.addRow([
      'Час заїзду',
      'Марка ДНЗ',
      'Контакти клієнта',
      'Послуги',
      'Вартість, грн',
      'Спосіб оплати',
      'Адміністратор',
      'Працівник',
    ]);

    orders.forEach(order => {
      worksheetOrders.addRow([
        formatedDate(order.orderDate),
        order.serviceObject,
        order.clientPhone,
        order.services.map(service => service.name).join(', '),
        order.discountedCostOrder,
        order.payment,
        order.administrator,
        order.washer,
      ]);
    });

    worksheetEmployeesPayments.addRow(['Ім`я', 'грн']);

    employees.forEach(employee => {
      worksheetEmployeesPayments.addRow([employee.name, employee.payment]);
    });

    worksheetPayments.addRow(['Категорія', 'Сума, грн']);

    worksheetPayments.addRow(['Всього каса:', payments.totalPayments]);
    worksheetPayments.addRow(['Всього готівкою:', payments.totalCash]);
    worksheetPayments.addRow(['Всього терміналом:', payments.totalCard]);
    worksheetPayments.addRow([
      'Всього заробітна плата:',
      payments.totalEmployeesPayments,
    ]);
    worksheetPayments.addRow(['Дохід:', payments.profit]);

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.xlsx';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <TableContainer>
      {orders && orders.length > 0 && (
        <>
          <DownloadBtn type="button" onClick={handleDownloadReport}>
            <DownloadIcon />
          </DownloadBtn>
          <Title>Звітність за обраний період</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Час заїзду</TableHeader>
                <TableHeader>Марка ДНЗ</TableHeader>
                <TableHeader>Контакти клієнта</TableHeader>
                <TableHeader>Послуги</TableHeader>
                <TableHeader>Вартість, грн</TableHeader>
                <TableHeader>Спосіб оплати</TableHeader>
                <TableHeader>Адміністратор</TableHeader>
                <TableHeader>Працівник</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {orders.map(order => (
                <TableRow key={order._id}>
                  <TableData>{formatedDate(order.orderDate)}</TableData>
                  <TableData>{order.serviceObject}</TableData>
                  <TableData>{order.clientPhone}</TableData>
                  <TableCellServices>
                    {order.services.map(service => (
                      <p key={service._id}>{service.name}</p>
                    ))}
                  </TableCellServices>
                  <TableData>{order.discountedCostOrder}</TableData>
                  <TableData>{order.payment}</TableData>
                  <TableData>{order.administrator}</TableData>
                  <TableData>{order.washer}</TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
      )}
      <FlexContainer>
        {employees && employees.length > 0 && (
          <TableThumb>
            <Title>Заробітна плата</Title>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Ім'я</TableHeader>
                  <TableHeader>грн</TableHeader>
                </TableRow>
              </TableHead>
              <tbody>
                {employees.map(employee => (
                  <TableRow key={employee.name}>
                    <TableData>{employee.name}</TableData>
                    <TableData>{employee.payment}</TableData>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableThumb>
        )}
        {payments && (
          <TableThumb>
            <Title>Розрахунок</Title>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Категорія</TableHeader>
                  <TableHeader>грн</TableHeader>
                </TableRow>
              </TableHead>
              <tbody>
                <TableRow>
                  <TableData>Всього каса:</TableData>
                  <TableData>{payments.totalPayments}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Всього готівкою:</TableData>
                  <TableData>{payments.totalCash}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Всього терміналом:</TableData>
                  <TableData>{payments.totalCard}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Всього заробітна плата:</TableData>
                  <TableData>{payments.totalEmployeesPayments}</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Дохід:</TableData>
                  <TableData>{payments.profit}</TableData>
                </TableRow>
              </tbody>
            </Table>
          </TableThumb>
        )}
      </FlexContainer>
    </TableContainer>
  );
};

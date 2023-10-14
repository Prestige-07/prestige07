import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { getReportingByDates } from 'redux/reporting/reportingOperations';

import { MainButton } from 'components/Global/Global.styled';
import { SearchForm, DateLabel, Input } from './ReportSearchForm.styled';

export const ReportSearchForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      startDate: '',
      endDate: '',
    },
    onSubmit: values => {
      dispatch(getReportingByDates(values));
    },
  });
  return (
    <SearchForm onSubmit={formik.handleSubmit}>
      <DateLabel>
        Початок
        <Input
          required
          type="date"
          id="startDate"
          name="startDate"
          value={formik.values.startDate}
          onChange={formik.handleChange}
          variant="standard"
          className="field"
        />
      </DateLabel>
      <DateLabel>
        Кінець
        <Input
          required
          type="date"
          id="endDate"
          name="endDate"
          value={formik.values.endDate}
          onChange={formik.handleChange}
          variant="standard"
          className="field"
        />
      </DateLabel>
      <MainButton type="submit" color="var(--black-color)">
        Пошук
      </MainButton>
    </SearchForm>
  );
};

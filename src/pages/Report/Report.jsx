import { useSelector } from 'react-redux';

import { Section } from 'components/Global/Global.styled';
import { Loading } from 'components/Loading/Loading';
import { ReportingTable } from 'components/AdminPage/ReportPage/ReportTable/ReportTable';
import { ReportSearchForm } from 'components/AdminPage/ReportPage/ReportSearchForm/ReportSearchForm';

import { selectIsLoading } from 'redux/reporting/reportingSelectors';

const ReportingPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Section paddingBottom={true}>
      <ReportSearchForm />
      <ReportingTable />
      {isLoading && <Loading />}
    </Section>
  );
};

export default ReportingPage;

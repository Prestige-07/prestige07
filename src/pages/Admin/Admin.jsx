import { Outlet } from 'react-router-dom';
import { Wrapper } from './Admin.styled';
import { Sidebar } from 'components/AdminPage/Sidebar/Sidebar';
import { AdminContainer } from 'components/Global/Global.styled';
import { MobileAdminMenu } from 'components/AdminPage/MobileAdminMenu/MobileAdminMenu';

const Admin = () => {
  return (
    <Wrapper>
      <MobileAdminMenu />
      <Sidebar />
      <AdminContainer>
        <Outlet />
      </AdminContainer>
    </Wrapper>
  );
};

export default Admin;
